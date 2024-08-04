let currentActive = 1;

const circles = document.querySelectorAll(".circle");
const bar = document.getElementById("bar");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

function updateBarWidth() {
    const completes = document.querySelectorAll(".complete");
    const barWidth = (completes.length) / (circles.length - 1) * 100 + "%";
    bar.style.width = barWidth;
}

next.addEventListener("click", function() {
    if (currentActive < circles.length) {
        circles[currentActive - 1].classList.remove("active");
        circles[currentActive - 1].classList.add("complete");
        currentActive += 1;
        circles[currentActive - 1].classList.add("active");
        updateBarWidth();
        console.log(currentActive);
    }
});

prev.addEventListener("click", function() {
    if (currentActive > 1) {
        circles[currentActive - 1].classList.remove("active");
        circles[currentActive - 2].classList.remove("complete");
        currentActive -= 1;
        circles[currentActive - 1].classList.add("active");
        updateBarWidth();
        console.log(currentActive);
    }
});

updateBarWidth();