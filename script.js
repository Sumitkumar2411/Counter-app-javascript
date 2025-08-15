const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

let count = 0;

function updateDisplay() {
  countDisplay.textContent = count;
  if (count > 0) {
    countDisplay.style.color = "blue";
  } else if (count < 0) {
    countDisplay.style.color = "red";
  } else {
    countDisplay.style.color = "black";
  }
}

updateDisplay(); 

increaseBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

decreaseBtn.addEventListener("click", () => {
  count--;
  updateDisplay();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});
