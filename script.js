"use strict";

// counter Program

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

// increse count
increaseBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
};

// decrease count
decreaseBtn.onclick = function () {
  count--;
  countLabel.textContent = count;
};

// Reset Counter
resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
