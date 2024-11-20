import "./styles.css";

const formController = () => {
  const form = document.querySelector("form");

  // Email validation
  const email = document.getElementById("email");
  const emailError = document.querySelector("#email + span.error");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  email.addEventListener("input", () => {
    if (email.validity.valid) {
      emailError.textContent = "";
      emailError.className = "error";
    } else {
      showEmailError();
    }
  });

  const showEmailError = () => {
    if (email.validity.valueMissing) {
      emailError.textContent = "You need to enter an email address.";
    } else if (email.validity.typeMismatch) {
      emailError.textContent = "Entered value needs to be an email address.";
    }
    emailError.className = "error active";
  };

  // Postal Code Validation
  const postalCode = document.getElementById("postal-code");
  const postalError = document.querySelector("#postal-code + span.error");

  postalCode.addEventListener("input", () => {
    if (postalCode.validity.valid) {
      postalError.textContent = "";
      postalError.className = "error";
    } else {
      showPostalError();
    }
  });

  const showPostalError = () => {
    if (postalCode.validity.valueMissing) {
      postalError.textContent = "You need to enter a postal code.";
    } else if (postalCode.validity.patternMismatch) {
      postalError.textContent =
        "Entered value needs to be a valid postal code (only digits).";
    } else if (postalCode.validity.tooShort) {
      postalError.textContent =
        "Entered value needs to be at least three digits.";
    }
    postalError.className = "error active";
  };

  // Password Validation
  const password = document.getElementById("password");
  const passwordConfirm = document.getElementById("confirm-password");
  const passwordError = document.querySelector(
    "#confirm-password + span.error",
  );

  if (password.value !== passwordConfirm.value) {
    password.setCustomValidity("Your passwords don't match");
    passwordConfirm.setCustomValidity("Your passwords don't match");
  }

  password.addEventListener("input", () => {
    if (
      password.validity.valid &&
      passwordConfirm.validity.valid &&
      password.value === passwordConfirm.value
    ) {
      passwordError.textContent = "";
      passwordError.className = "error";
    } else {
      showPasswordError();
    }
  });

  passwordConfirm.addEventListener("input", () => {
    if (
      password.validity.valid &&
      passwordConfirm.validity.valid &&
      password.value === passwordConfirm.value
    ) {
      passwordError.textContent = "";
      passwordError.className = "error";
    } else {
      showPasswordError();
    }
  });

  const showPasswordError = () => {
    if (passwordConfirm.validity.tooShort) {
      passwordError.textContent =
        "Entered value needs to be at least eight characters.";
    } else if (password.value !== passwordConfirm.value) {
      passwordError.textContent = "Your passwords don't match.";
    } else if (passwordConfirm.validity.valueMissing) {
      passwordError.textContent = "You need to confirm your password.";
    }
    passwordError.className = "error active";
  };
};

formController();
