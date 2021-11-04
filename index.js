const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  validateForm();
});

const validateForm = () => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let bool = [true, true, true, true];

  // a function to validate inputs
  function checkValue(input, element, boolIndex) {
    // if value is email then execute:
    if (input === email) {
      if (input.value === "") {
        document
          .getElementsByClassName(element)[0]
          .classList.remove("error-email");
        document.getElementsByClassName(element)[0].classList.add("error");
        return (bool[boolIndex] = false);
      } else if (!emailRegex.test(input.value)) {
        document.getElementsByClassName(element)[0].classList.remove("error");
        document
          .getElementsByClassName(element)[0]
          .classList.add("error-email");
        input.style.color = "var(--red)";
        return (bool[boolIndex] = false);
      } else {
        document
          .getElementsByClassName(element)[0]
          .classList.remove("error-email");
        return document
          .getElementsByClassName(element)[0]
          .classList.remove("error");
      }
    }
    // if value is none email then execute:
    if (input.value === "") {
      document.getElementsByClassName(element)[0].classList.add("error");
      return (bool[boolIndex] = false);
    } else {
      return document
        .getElementsByClassName(element)[0]
        .classList.remove("error");
    }
  }

  // use function to check each value separately
  checkValue(firstName, "f-name-group", 0);
  checkValue(lastName, "l-name-group", 1);
  checkValue(password, "password-group", 2);
  checkValue(email, "email-group", 3);

  if (bool.every((b) => b)) {
    form.reset();
    document.getElementsByClassName("main-form")[0].classList.add("success");
    setInterval(removeSuccess, 5000);
  } else {
    document.getElementsByClassName("main-form")[0].classList.remove("success");
  }
};

const removeColor = () => {
  document.getElementById("email").style.color = "var(--dark-blue)";
};
const removeSuccess = () => {
  document.getElementsByClassName("main-form")[0].classList.remove("success");
};
const checkEnter = (e) => {
  if (e.key === "Enter") {
    validateForm();
  }
};
