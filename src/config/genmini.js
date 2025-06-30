// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyAaeNCo8T5oiZ4bREsIEkZgV3VPCPiiO40",
});
const config = {
  thinkingConfig: {
    thinkingBudget: -1,
  },
  responseMimeType: "text/plain",
};
const model = "gemini-2.5-pro";

export const handleAI = (message) => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try {
      const contents = [
        {
          role: "user",
          parts: [
            {
              text: message,
            },
          ],
        },
      ];

      const response = await ai.models.generateContentStream({
        model,
        config,
        contents,
      });

      let text = "";

      for await (const chunk of response) {
        text += chunk.text;
      }

      resolve(text);
    } catch (error) {
      reject(error);
    }
  });
};
