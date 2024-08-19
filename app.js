const radioGeneral = document.getElementById("general-query");
const radioSupport = document.getElementById("support-query");
const submitButton = document.getElementById("submit-button");
const inputs = document.querySelectorAll(".input");
const form = document.getElementById("form");
const radioButtonStyleHandler = (event) => {
  console.dir(event.target);
  const parent = event.target.parentElement;
  if (event.target.checked === true) {
    parent.style.backgroundColor = "hsl(148, 38%, 91%)";
  } else {
    parent.style.backgroundColor = "#fff";
  }
};

const inValidValue = (element) => {
  element.style.borderColor = "red";
  element.nextElementSibling.style.display = "block";
};
const validValue = (element) => {
  element.style.borderColor = "rgb(135, 163, 166)";
  element.nextElementSibling.style.display = "none";
};
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
const validation = () => {
  console.log("object");
  inputs.forEach((element) => {
    if (element.value.length === 0) {
      inValidValue(element);
    } else {
      validValue(element);
    }
    if (element.name === "email" && element.value) {
      if (validateEmail(element.value)) {
        validValue(element);
      } else {
        inValidValue(element);
      }
    }
  });
};
const formHandler = (e) => {
  e.preventDefault();
  validation();
};
radioGeneral.addEventListener("click", radioButtonStyleHandler);
radioSupport.addEventListener("click", radioButtonStyleHandler);
form.addEventListener("submit", formHandler);
