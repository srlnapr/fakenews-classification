import { InferenceClient } from "@huggingface/inference";

interface ExplainRequestBody {
  text: string;
  isReal: boolean;
  prompt: string;
}

interface ExplainResponse {
  explanation?: string;
  error?: string;
  details?: string;
}

// Type definitions for Hugging Face API response (flexible approach)
interface HuggingFaceResponse {
  choices: Array<{
    message: {
      content?: string;
      role?: string;
    };
    finish_reason?: string;
    index?: number;
  }>;
  [key: string]: unknown; // Allow additional properties
}

export async function POST(request: Request): Promise<Response> {
  try {
    const { text, isReal, prompt }: ExplainRequestBody = await request.json();

    if (!text || !prompt) {
      return Response.json({ error: 'Text and prompt are required' }, { status: 400 });
    }

    const client = new InferenceClient(process.env.HF_TOKEN as string);

    const fullPrompt = `
Analisis berita berikut dan jelaskan mengapa termasuk ${isReal ? 'FAKTA' : 'HOAKS'}:

"${text}"

Berikan penjelasan dengan struktur:

**Analisis:** Jelaskan mengapa berita ini ${isReal ? 'faktual' : 'hoaks'} berdasarkan karakteristik isinya.

**Sumber Pendukung:** Sebutkan referensi kredibel yang mendukung analisis ini (situs pemeriksa fakta, media resmi, atau lembaga terpercaya).

**Saran Verifikasi:** Berikan tips cara memverifikasi informasi serupa di masa depan.

Jawab dalam bahasa Indonesia yang mudah dipahami dan profesional. Hindari penggunaan kata "pengguna" dan jangan gunakan format <think>. Berikan analisis yang langsung dan jelas.
`;

    const chatCompletion: HuggingFaceResponse = await client.chatCompletion({
      provider: "fireworks-ai",
      model: "deepseek-ai/DeepSeek-R1-0528",
      messages: [
        {
          role: "user",
          content: fullPrompt,
        },
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    console.log("DeepSeek Response:", chatCompletion);

    const explanation: string = chatCompletion.choices[0]?.message?.content || "Tidak dapat memberikan penjelasan saat ini.";

    return Response.json({ explanation } as ExplainResponse);
  } catch (error: unknown) {
    console.error("Error getting explanation:", error);
    
    // Type-safe error handling
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    return Response.json({
      error: 'Failed to get explanation',
      details: errorMessage
    } as ExplainResponse, { status: 500 });
  }
}