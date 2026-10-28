// mini project 1



let quotes = [
  "Believe in yourself",
  "Keep going no matter what",
  "Success needs hard work",
  "Never give up",
  "Stay positive and strong"
];


let btn = document.querySelector("button"); 

btn.addEventListener("click",() => {

    let randomIndex = quotes.length * Math.random() >> 0;
    document.querySelector("#quote").textContent = quotes[randomIndex];
}
 );



 