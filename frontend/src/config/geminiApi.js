
const API_KEY = "AIzaSyD7A48dP0KmevJAXH80Rlz9lsCzNKGUrdE"; // Replace this with your actual key

const GEMINI_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

export const fetchGeminiResponse = async (prompt) => {
  const requestBody = {
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }]
      }
    ]
  };

  try {
    const res = await fetch(GEMINI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Gemini API Error:", data);
      return `Error: ${data.error?.message || "Unknown error"}`;
    }

    return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
  } catch (err) {
    console.error("Fetch Error:", err);
    return "Something went wrong.";
  }
};






