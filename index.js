let billTotalInput = document.querySelector("#billTotalInput");
let tipTotalInput = document.querySelector("#tipTotalInput");
let numberOfPeople = document.querySelector(".numberOfPeople");
let personPay = document.querySelector(".personPay");
let increase = document.querySelector(".increase");
let decrease = document.querySelector(".decrease");

// calculate
const calculate = () => {
  let bill = Number(billTotalInput.value);
  let tipPercent = Number(tipTotalInput.value) / 100;
  let number = Number(numberOfPeople.innerHTML);
  let total = (bill + tipPercent * bill) / number;
  personPay.innerHTML = `$${total.toFixed(2)}`;
};
billTotalInput.onkeyup = () => {
  calculate();
};
tipTotalInput.onkeyup = () => {
  calculate();
};

//increase
increase.onclick = () => {
  numberOfPeople.innerHTML = Number(++numberOfPeople.innerHTML);
  calculate();
};

// decrease
decrease.onclick = () => {
  if (numberOfPeople.innerHTML > 1) {
    numberOfPeople.innerHTML = Number(--numberOfPeople.innerHTML);
    calculate();
  }
};
