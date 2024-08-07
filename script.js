let currentlyActive = 0;

const circles = document.querySelectorAll(".circle");
const bar = document.getElementById("bar");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

function updateBarWidth() {
  const completes = document.querySelectorAll(".complete");
  const barWidth = (completes.length / (circles.length - 1)) * 100 + "%";
  bar.style.width = barWidth;
}

next.addEventListener("click", function () {
  if (currentlyActive < circles.length - 1) {
    circles[currentlyActive].classList.remove("active");
    circles[currentlyActive].classList.add("complete");
    currentlyActive++;
    circles[currentlyActive].classList.add("active");
    updateBarWidth();
  }
});

prev.addEventListener("click", function () {
  if (currentlyActive > 0) {
    circles[currentlyActive].classList.remove("active");
    circles[currentlyActive - 1].classList.remove("complete");
    currentlyActive--;
    circles[currentlyActive].classList.add("active");
    updateBarWidth();
  }
});

updateBarWidth();
