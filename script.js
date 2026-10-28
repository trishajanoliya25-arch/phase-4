// const API_KEY = "AIzaSyCUpU_Un8E8wUNzGfFPuTQPeOTYCBHJ7Kk";

// const generateContent = async (type) => {

//   const input = document.getElementById("inputText").value;
//   const result = document.getElementById("result");

//   let prompt = "";

//   if (type === "answer") {
//     prompt = `Answer this question: ${input}`;
//   }

//   else if (type === "summary") {
//     prompt = `Summarize this text: ${input}`;
//   }

//   else if (type === "ideas") {
//     prompt = `Give ideas about: ${input}`;
//   }

//   result.innerHTML = "Loading...";

//   try {

//     const response = await fetch(
//       `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           contents: [
//             {
//               parts: [{ text: prompt }]
//             }
//           ]
//         })
//       }
//     );

//     const data = await response.json();

//     const output =
//       data.candidates[0].content.parts[0].text;

//     result.innerHTML = output;

//   } catch (error) {
//     result.innerHTML = "Something went wrong!";
//     console.log(error);
//   }
// };



const API_KEY = "AIzaSyCUpU_Un8E8wUNzGfFPuTQPeOTYCBHJ7Kk";
const history = [];

// Rest
const log = (...msg) => console.log(...msg);

const generateContent = async (type) => {
  const input = document.getElementById("inputText").value;
  const result = document.getElementById("result");

  const prompts = {
    answer: `Answer this: ${input}`,
    summary: `Summarize this: ${input}`,
    ideas: `Give ideas about: ${input}`
  };

  result.innerHTML = "Loading...";

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompts[type] }] }]
        })
      }
    );

    const data = await res.json();

    if (!res.ok) throw new Error(data.error?.message);

    // Destructuring
    const { candidates: [{ content: { parts: [{ text }] } }] } = data;

    // Spread
    history.push({ ...{ type, input, text } });

    // filter + map + reduce
    const valid = history.filter(x => x.text);
    const features = valid.map(x => x.type);
    const total = history.reduce(n => n + 1, 0);

    result.innerHTML = `
      <h3>AI Response</h3>
      <p>${text}</p>
      <hr>
      Requests: ${total}<br>
      Features: ${features.join(", ")}
    `;

    log(text);
  } catch (error) {
    result.innerHTML = `Error: ${error.message}`;
  }
};