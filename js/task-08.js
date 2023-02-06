document
  .querySelector(".login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = this.elements.email.value;
    const password = this.elements.password.value;
    if (!email || !password) {
      alert("All fields are required");
      return;
    }
    const userData = { email, password };
    console.log(userData);
    this.reset();
  });
