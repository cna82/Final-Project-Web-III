// dom nodes Selection & golbal variables
let fNamePersian = document.getElementById("f-name-p");
let fNameEnglish = document.getElementById("f-name-e");
let emalAddress = document.getElementById("gmail");
let password = document.getElementById("my-pass");
let fNamePText = document.getElementById("f-name-text-p");
let fNameEText = document.getElementById("f-name-text-e");
let gmailText = document.getElementById("gmail-text");
let passwordText = document.getElementById("password-text");
let validationCount = 0;
// steps
const divs = document.querySelectorAll(".pages > div");
let CURRENT_STEP = 0;

// next and prev btn
let btnNext = document.getElementById("btn-next");
let btnPrev = document.getElementById("btn-prev");
let btnNext2 = document.getElementById("btn-next-2");
let btnPrev2 = document.getElementById("btn-prev-2");
let harchi = document.getElementById("harchi");
let harchi2 = document.getElementById("harchi2");

// functions
const handleValidationFnamePersian = (event) => {
  let value = event.target.value;
  const pattern = /[ پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأءًٌٍَُِّ\s]+$/;
  const isValid = pattern.test(value);
  if (value.length === 0) {
    fNamePText.textContent = "Full name persian can't be empty";
    fNamePersian.classList.remove("success");
    fNamePersian.classList.add("error");
  }
  if (isValid) {
    fNamePText.textContent = "";
    fNamePersian.classList.remove("error");
    fNamePersian.classList.add("success");
  } else if (value.length >= 1) {
    fNamePText.textContent = "Please switch keyboard to persian";
    fNamePersian.classList.remove("success");
    fNamePersian.classList.add("error");
  }
};
const handleValidationFnameEnglish = (event) => {
  let value = event.target.value;
  const pattern = /^[a-z A-Z]+$/;
  const isValid = pattern.test(value);
  if (value.length === 0) {
    fNameEText.textContent = `Full name English can't be empty`;
    fNameEnglish.classList.remove("success");
    fNameEnglish.classList.add("error");
  }
  if (isValid) {
    fNameEText.textContent = "";
    fNameEnglish.classList.remove("error");
    fNameEnglish.classList.add("success");
  } else if (value.length >= 1) {
    fNameEText.textContent = "Please switch keyboard to Enlish";
    fNameEnglish.classList.remove("success");
    fNameEnglish.classList.add("error");
  }
};
const handleValidationEmail = (event) => {
  let value = event.target.value;
  const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const isValid = pattern.test(value);
  if (value.length === 0) {
    gmailText.textContent = "Fill this field";
    emalAddress.classList.remove("success");
    emalAddress.classList.add("error");
  }
  if (isValid) {
    gmailText.textContent = "";
    emalAddress.classList.remove("error");
    emalAddress.classList.add("success");
  } else if (value.length >= 1) {
    gmailText.textContent = "Please write currect email address";
    emalAddress.classList.remove("success");
    emalAddress.classList.add("error");
  }
};
const handleValidationPassword = (event) => {
  let value = event.target.value;
  const pattern =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  const isValid = pattern.test(value);
  if (value.length === 0) {
    passwordText.textContent = "Pass can't be empty";
    password.classList.remove("success");
    password.classList.add("error");
  }
  if (isValid) {
    passwordText.textContent = "";
    password.classList.remove("error");
    password.classList.add("success");
  } else if (value.length >= 1) {
    passwordText.textContent =
      "Password must be 8 chars, contain An uppercase and lowercase letter and a special char (@*/- etc)";
    password.classList.remove("success");
    password.classList.add("error");
  }
};
const handlePasswordVisibilty = () => {
  let comparisoned =
    password.type === "password"
      ? (password.type = "text")
      : (password.type = "password");
  return comparisoned;
};
const setActiveStep = (currentStep) => {
  divs.forEach((element, index) => {
    let result =
      index < currentStep
        ? element.classList.add("current")
        : element.classList.remove("current");
    return result;
  });
};

const handleNext = () => {
  CURRENT_STEP++;
  setActiveStep(CURRENT_STEP);
  showNext();
};
const handlePrev = () => {
  CURRENT_STEP--;
  setActiveStep(CURRENT_STEP);
  showPrev();
};
const showNext = () => {
  harchi.classList.add("d-none");
  harchi2.classList.remove("d-none");
  debugger;
  if (CURRENT_STEP === 1) {
    btnNext2.textContent = "Log in !";
  }
};
const showPrev = () => {
  harchi.classList.remove("d-none");
  harchi2.classList.add("d-none");
};

// events
