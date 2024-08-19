const radioGeneral = document.getElementById("general-query");
const radioSupport = document.getElementById("support-query");
const submitButton = document.getElementById("submit-button");
const inputs = document.querySelectorAll(".input");
const form = document.getElementById("form");
const checkBox = document.getElementById("checkBox");
const radioButtonStyleHandler = () => {
  if (radioGeneral.checked === true) {
    radioGeneral.parentElement.style.backgroundColor = "hsl(148, 38%, 91%)";
    radioGeneral.parentElement.style.borderColor = "rgb(12, 125, 105)";
    radioSupport.parentElement.style.backgroundColor = "#fff";
    radioSupport.parentElement.style.borderColor = "rgb(135, 163, 166)";
  }
  if (radioSupport.checked === true) {
    radioSupport.parentElement.style.backgroundColor = "hsl(148, 38%, 91%)";
    radioSupport.parentElement.style.borderColor = "rgb(12, 125, 105)";
    radioGeneral.parentElement.style.backgroundColor = "#fff";
    radioGeneral.parentElement.style.borderColor = "rgb(135, 163, 166)";
  }
};

const inValidValue = (element) => {
  element.style.borderColor = "hsl(0, 66%, 54%)";
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
const queryValidation = () => {
  if (radioGeneral.checked === false && radioSupport.checked === false) {
    inValidValue(radioGeneral.parentElement.parentElement);
  } else {
    validValue(radioGeneral.parentElement.parentElement);
  }
};
const checkBoxValidation = () => {
  console.dir(checkBox.children[0]);
  if (checkBox.children[0].checked === false) {
    inValidValue(checkBox.children[1]);
  } else {
    validValue(checkBox.children[1]);
  }
};
const formHandler = (e) => {
  e.preventDefault();
  validation();
  queryValidation();
  checkBoxValidation();
};
radioGeneral.addEventListener("click", radioButtonStyleHandler);
radioSupport.addEventListener("click", radioButtonStyleHandler);
form.addEventListener("submit", formHandler);
