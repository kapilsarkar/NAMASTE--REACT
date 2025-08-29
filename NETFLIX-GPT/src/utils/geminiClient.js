import { GoogleGenerativeAI } from "@google/generative-ai";

// ✅ Correct way to access Vite environment variables in frontend
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  console.error("❌ Gemini API key is missing! Make sure VITE_GEMINI_API_KEY is set in your .env file.");
}

const genAI = new GoogleGenerativeAI(apiKey);

export async function askGemini(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-001" });
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Gemini API error:", error);
    throw error;
  }
}

