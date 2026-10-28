const API_KEY = "AIzaSyBTkzbiPMhS6omZhyeEqzocfcy-JHKlsTw";

const API_URL =
"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

const btn = document.getElementById("btn");
const output = document.getElementById("output");
const topicInput = document.getElementById("topic");

const getQuiz = async () => {

  let topic = topicInput.value;

  let prompt = `Give one simple question and answer about ${topic}`;

  output.innerText = "Loading...";

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

    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text;

    output.innerText = text;

  } catch (error) {

    output.innerText = "Error occurred";

    console.log(error);
  }
};

btn.addEventListener("click", getQuiz);