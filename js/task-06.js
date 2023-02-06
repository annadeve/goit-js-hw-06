const input = document.querySelector("#validation-input");
const length = Number(input.dataset.length);

input.addEventListener("blur", function () {
  if (input.value.length === length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
