
const regForm = document.querySelector(".login-form");

regForm.addEventListener("submit", callback)
const count = {};


function callback(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email.trim() === "" || password.trim() === "") {
       return window.alert('All form fields must be filled in');
    }
    count.email = email.trim();
    count.password = password.trim();

    form.reset();

   console.log(count); 
}


