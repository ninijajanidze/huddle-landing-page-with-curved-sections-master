const submit = document.querySelector(".submitButton");
const errorMessage = document.getElementById("errorMessage");



const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

submit.addEventListener("click", function() {
    const inputField = document.querySelector(".inputField");
    if(!emailRegex.test(inputField.value)) {
        errorMessage.style.display = "block";
        inputField.style.border =  "1px solid #ff4343";
    } else {
        errorMessage.style.display = "none";
        inputField.style.borderColor = "";
    }
  console.log("clicked");
});