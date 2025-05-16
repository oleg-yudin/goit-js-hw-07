const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");


input.addEventListener("input", (event) => {
    if (event.data.trim() == " " || event.data.trim() == "") {
        span.textContent = "Anonymous";
    }
    else {
        span.textContent = event.currentTarget.value.trim();
    }
})


