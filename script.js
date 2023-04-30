const light = document.querySelector(".light");
const h2 = document.getElementById("click-me");
const container = document.querySelector(".container");

window.addEventListener("mousemove", (e) => {
  light.style.setProperty("--x", e.clientX + "px");
  light.style.setProperty("--y", e.clientY + "px");
});

h2.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
  container.style.opacity = "0";
  setTimeout(() => {
    container.innerHTML = "";
  }, 4000);
});
