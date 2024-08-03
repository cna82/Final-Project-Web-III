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
handleValidationFnamePersian = (event) => {
  let value = event.target.value;
  const pattern = /[ پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأءًٌٍَُِّ\s]+$/;
  const isValid = pattern.test(value);
  if (value.length === 0) {
    fNamePText.textContent = "نام و نام خانوادگی به فارسی نمیتواند خالی باشد";
    fNamePersian.classList.remove("success");
    fNamePersian.classList.add("error");
    
  }
  if (isValid) {
    fNamePText.textContent = "";
    fNamePersian.classList.remove("error");
    fNamePersian.classList.add("success");
  } else if (value.length >= 1) {
    fNamePText.textContent = "لطفا کیبرد را فارسی کنید";
    fNamePersian.classList.remove("success");
    fNamePersian.classList.add("error");
  }
};
handleValidationFnameEnglish = (event) => {
  let value = event.target.value;
  const pattern = /^[a-z A-Z]+$/;
  const isValid = pattern.test(value);
  if (value.length === 0) {
    fNameEText.textContent = "نام و نام خانوادگی به انگلیسی نمیتواند خالی باشد";
    fNameEnglish.classList.remove("success");
    fNameEnglish.classList.add("error");
  }
  if (isValid) {
    fNameEText.textContent = "";
    fNameEnglish.classList.remove("error");
    fNameEnglish.classList.add("success");
  } else if (value.length >= 1) {
    fNameEText.textContent = "لطفا کیبرد را انگلیسی کنید";
    fNameEnglish.classList.remove("success");
    fNameEnglish.classList.add("error");
  }
};
handleValidationEmail = (event) => {
  let value = event.target.value;
  const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const isValid = pattern.test(value);
  if (value.length === 0) {
    gmailText.textContent = "وارد کردن ایمیل الزامی است";
    emalAddress.classList.remove("success");
    emalAddress.classList.add("error");
  }
  if (isValid) {
    gmailText.textContent = "";
    emalAddress.classList.remove("error");
    emalAddress.classList.add("success");
  } else if (value.length >= 1) {
    gmailText.textContent = "لطفا آدرس ایمیل درست وارد فرمایید";
    emalAddress.classList.remove("success");
    emalAddress.classList.add("error");
  }
};
handleValidationPassword = (event) => {
  let value = event.target.value;
  const pattern =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  const isValid = pattern.test(value);
  if (value.length === 0) {
    passwordText.textContent = "وارد کردن رمز عبور الزامی است";
    password.classList.remove("success");
    password.classList.add("error");
  }
  if (isValid) {
    passwordText.textContent = "";
    password.classList.remove("error");
    password.classList.add("success");
  } else if (value.length >= 1) {
    passwordText.textContent =
      " رمز عبور باید به طول 8 و  شامل حداقل یک حرف انگلیسی بزرگ ، یک عدد و یک کارکتر خاص باشد";
    password.classList.remove("success");
    password.classList.add("error");
  }
};
handlePasswordVisibilty = () => {
  let comparisoned =
    password.type === "password"
      ? (password.type = "text")
      : (password.type = "password");
  return comparisoned;
};
setActiveStep = (currentStep) => {
  divs.forEach((element, index) => {
    let result =
      index < currentStep
        ? element.classList.add("active")
        : element.classList.remove("active");
    return result;
  });
};

handleNext = () => {
  CURRENT_STEP++;
  setActiveStep(CURRENT_STEP);
  showNext();
};
handlePrev = () => {
  CURRENT_STEP--;
  setActiveStep(CURRENT_STEP);
  showPrev();
};
showNext = () => {
  harchi.classList.add("d-none");
  harchi2.classList.remove("d-none");
  debugger;
  if (CURRENT_STEP === 1) {
    btnNext2.textContent = "وارد شوید";
  }
};
showPrev = () => {
  harchi.classList.remove("d-none");
  harchi2.classList.add("d-none");
};


// events
