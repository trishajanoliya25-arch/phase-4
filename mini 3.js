const API_KEY = "AIzaSyB0YIH11VlmrIqRbeIKWIrTW1RBAailTPg";

const API_URL =
"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

const output = document.getElementById("output");

const getAffirmation = async () => {

  const prompt =
  "Give me a one-sentence positive affirmation";

  try {

    const res = await fetch(`${API_URL}?key=${API_KEY}`, {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ]
      })
    });

    const data = await res.json();

    output.innerText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text
      || "No affirmation found";

  } catch (error) {

    output.innerText = "Error loading affirmation";

    console.log(error);
  }
};

window.addEventListener("DOMContentLoaded", () => {
  getAffirmation();
});