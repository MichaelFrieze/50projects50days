const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  // trying to figure out percentages
  // console.log(actives.length / circles.length);
  // not quite right
  // console.log((actives.length / circles.length) * 100);
  // still not right
  // progress.style.width = (actives.length / circles.length) * 100 + "%";
  // not right but we can at least see it

  // here it is!
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  // fixing the disabled prev button
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
