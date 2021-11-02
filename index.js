const validateForm = () => {
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let bool = [true, true, true, true];
  if (firstName.value === "") {
    document.getElementsByClassName("f-name-group")[0].classList.add("error");
    bool[0] = false;
  } else {
    document
      .getElementsByClassName("f-name-group")[0]
      .classList.remove("error");
  }
  if (lastName.value === "") {
    document.getElementsByClassName("l-name-group")[0].classList.add("error");
    bool[1] = false;
  } else {
    document
      .getElementsByClassName("l-name-group")[0]
      .classList.remove("error");
  }
  if (email.value === "") {
    document
      .getElementsByClassName("email-group")[0]
      .classList.remove("error-email");
    document.getElementsByClassName("email-group")[0].classList.add("error");
    bool[2] = false;
  } else if (!emailRegex.test(email.value)) {
    document.getElementsByClassName("email-group")[0].classList.remove("error");
    document
      .getElementsByClassName("email-group")[0]
      .classList.add("error-email");
    email.style.color = "var(--red)";
    bool[2] = false;
  } else {
    document
      .getElementsByClassName("email-group")[0]
      .classList.remove("error-email");
    document.getElementsByClassName("email-group")[0].classList.remove("error");
  }
  if (password.value === "") {
    document.getElementsByClassName("password-group")[0].classList.add("error");
    bool[3] = false;
  } else {
    document
      .getElementsByClassName("password-group")[0]
      .classList.remove("error");
  }
  if (bool.every((b) => b)) {
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    password.value = "";
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
