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
// const errorMessage = (element) => {
//   switch (element.name) {
//     case 'first':
//       return ""
//       break;

//     default:
//       break;
//   }
// };
const requiredValidation = (element) => {
  element.style.borderColor = "red";
  //   element.parentElement.innerHTML += `
  //  <p style="color:red">The field is required</p>
  //   `;
  console.dir(element.nextElementSibling);

  element.nextElementSibling.style.display = "block";
};
const validValue = (element) => {
  element.style.borderColor = "rgb(135, 163, 166)";
  console.dir(element.nextElementSibling);
  element.nextElementSibling.style.display = "none";
  // if p vojod dasht delet con
};
const validation = () => {
  console.log("object");
  inputs.forEach((element) => {
    if (element.value.length === 0) {
      requiredValidation(element);
    } else {
      validValue(element);
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
