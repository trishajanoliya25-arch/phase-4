const API_KEY = "AIzaSyBz0xl2USASGicz1MqOD_F6TuWpnceKoek";

const API_URL =
"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

const btn = document.getElementById("btn");
const output = document.getElementById("output");

const getJoke = async () => {
  try {
    output.innerText = "Loading...";

    const prompt = "Tell me a short clean joke";

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
      || "No response";

  } catch (error) {
    console.log(error);
    output.innerText = "Error occurred";
  }
};

btn.addEventListener("click", getJoke);