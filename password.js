class Password {
  constructor(length) {
    this.length = length;
    this.lowercase = "abcdefghijklmnopqrstuvwxyz";
    this.uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.numbers = "0123456789";
    this.special = "!@#$%^&*()_+[]{}<>?";
  }

  generate() {
    let password = "";

    // add one of each required type
    password += this.getRandom(this.lowercase);
    password += this.getRandom(this.uppercase);
    password += this.getRandom(this.special);

    // fill the rest with random characters
    let allChars = this.lowercase + this.uppercase + this.numbers + this.special;
    while (password.length < this.length) {
      password += this.getRandom(allChars);
    }

    // shuffle so required chars aren’t always at the start
    return this.shuffle(password);
  }

  getRandom(str) {
    let index = Math.floor(Math.random() * str.length); // pick random spot
    return str[index]; // return that character
  }

  shuffle(str) {
    return str.split("") // break into array
              .sort(() => Math.random() - 0.5) // mix randomly
              .join(""); // put back together
  }
}

// Function connected to HTML button
function generatePassword() {
  let length = document.getElementById("length").value;

  // enforce minimum and maximum length
  if (length < 6) {
    alert("Password length must be at least 6 characters!");
    return;
  }
  if (length > 20) {
    alert("Password length must not exceed 20 characters!");
    return;
  }

  let pwd = new Password(length);
  document.getElementById("output").textContent = pwd.generate();
}
