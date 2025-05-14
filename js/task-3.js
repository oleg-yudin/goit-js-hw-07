const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");


input.addEventListener("input", (event) => {
    if (event.data == " ") {
        span.textContent = "Anonymous";
    }
    else {
        span.textContent = event.currentTarget.value.trim();
    }
})

input.addEventListener("focus", () => {
    span.textContent = "Anonymous";
})


input.addEventListener("blur", () => {
    span.textContent = "Anonymous";
})
