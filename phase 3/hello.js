// mini project 2nd

let btn = document.querySelector("button");

btn.addEventListener("click",() => {

    let bill = Number(document.getElementById("bill").value);
  let tip = Number(document.getElementById("tip").value);
  let people = Number(document.getElementById("people").value);

  let tipAmount = (bill * tip) / 100;
  let total = bill + tipAmount;

  let perPerson = total / people;

  document.getElementById("result").innerText =
    "Tip/person: " + (tipAmount / people).toFixed(2) +
    " | Total/person: " + perPerson.toFixed(2);  
});