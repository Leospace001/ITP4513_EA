document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("showPassword");
  const passwordInput = document.querySelector('input[name="password"]');

  checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
          passwordInput.type = "text";
      } else {
          passwordInput.type = "password";
      }
  });
});