const text = document.querySelector("#text");
const size = document.querySelector("#size");
const out = document.querySelector("#out");

text.addEventListener("input", () => {
  out.textContent = text.value;
});
size.addEventListener("input", () => {
  out.style.fontSize = `${size.value}%`;
});
