const elForm = document.querySelector("#form");
const elInput = document.querySelector("#input");
const elBtn = document.querySelector(".btn");
const text = document.querySelector(".text");

let array = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
let result = 0;

elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  text.textContent = "Vowels:";

  let value = elInput.value.trim();

  for (let i = 0; i < value.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (value[i] === array[j]) {
        result++;
        text.textContent += ` ${array[j]} `;
      }
    }
  }
  text.textContent += `(${result})`;
});
