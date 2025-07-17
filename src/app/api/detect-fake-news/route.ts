import { InferenceClient } from "@huggingface/inference";

export async function POST(request: Request) {
  try {
    const { text } = await request.json();

    if (!text || text.trim().length === 0) {
      return Response.json({ error: 'Text is required' }, { status: 400 });
    }

    const client = new InferenceClient(process.env.HF_TOKEN as string);
    
    const output = await client.textClassification({
      model: "jy46604790/Fake-News-Bert-Detect",
      inputs: text,
      provider: "hf-inference",
    });

    console.log("Hugging Face Output:", output);

    let result = {
      label: "UNKNOWN",
      confidence: 0
    };

   if (output && output.length > 0) {
  const sortedOutput = output.sort((a, b) => b.score - a.score);
  const topResult = sortedOutput[0];

  if (topResult.label === "LABEL_1") {
    result.label = "REAL";
    result.confidence = topResult.score;
  } else if (topResult.label === "LABEL_0") {
    result.label = "FAKE";
    result.confidence = topResult.score;
  } else {
    result.label = topResult.label;
    result.confidence = topResult.score;
  }
}


    return Response.json(result);
  } catch (error: any) {
    console.error("Error in fake news detection:", error);
    return Response.json({ 
      error: 'Failed to detect fake news',
      details: error.message 
    }, { status: 500 });
  }
}
