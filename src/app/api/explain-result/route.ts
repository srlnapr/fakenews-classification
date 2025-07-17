
import { InferenceClient } from "@huggingface/inference";
export async function POST(request) {
  try {
    const { text, isReal, prompt } = await request.json();

    if (!text || !prompt) {
      return Response.json({ error: 'Text and prompt are required' }, { status: 400 });
    }

    const client = new InferenceClient(process.env.HF_TOKEN);
    
const fullPrompt = `
Analisis mengapa berita berikut termasuk ${isReal ? 'FAKTA' : 'HOAKS'} berdasarkan karakteristik isi beritanya.

Teks berita:
"${text}"

Tuliskan:
1. Alasan berita ini dikategorikan sebagai ${isReal ? 'FAKTA' : 'HOAKS'}

3. Saran verifikasi lebih lanjut (jika perlu), seperti pengecekan sumber, bukti pendukung, atau konfirmasi pihak terkait.

Gunakan bahasa Indonesia yang mudah dipahami, rapi, dan profesional. Gunakan bullet point agar penjelasan mudah dibaca.
`;


    const chatCompletion = await client.chatCompletion({
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

    const explanation = chatCompletion.choices[0]?.message?.content || "Tidak dapat memberikan penjelasan saat ini.";

    return Response.json({ explanation });
  } catch (error) {
    console.error("Error getting explanation:", error);
    return Response.json({ 
      error: 'Failed to get explanation',
      details: error.message 
    }, { status: 500 });
  }
}