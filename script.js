const slider = document.querySelectorAll("#slider .btn");
const form = document.querySelector(".left-slider");
slider.forEach(function (element) {
  element.addEventListener("click", (e) => {
    slider.forEach(function (el) {
      el.classList.remove("current-slide");
    });
    e.target.classList.add("current-slide");
    // form.classList.toggle("slide-from");
    if (e.target.classList.contains("log")) {
      form.classList.remove("slide-from");
    } else {
      form.classList.add("slide-from");
    }
  });
});

function register() {
  const uname = document.getElementById("uname").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;
  const confirm = document.getElementById("confirm").value;

  var letters = /^[A-Za-z]+$/;
  var email_val = /^([a-zA-Z0-9])+\@([a-zA-Z0-9])+(\.)+([a-zA-Z0-9])+$/;

  if (uname == "" || email == "" || pass == "" || confirm == "") {
    alert("Enter each details correctly");
  } else if (!letters.test(uname)) {
    alert("Name is incorrect must contain alphabets only");
  } else if (!email_val.test(email)) {
    alert("invalid email format, please enter valid email id");
  } else if (pass != confirm) {
    alert("Password doesn't match");
  } else if (pass.length < 8) {
    alert("Password must contain 8 characters at minimum");
  } else {
    alert(`hello ${uname}, your account has been created successfully`);
  }
}

function login() {
  const email = document.getElementById("email-log").value;
  const pass = document.getElementById("pass-log").value;

  var email_val = /^([a-zA-Z0-9])+\@([a-zA-Z0-9])+(\.)+([a-zA-Z0-9])+$/;

  if (email == "" || pass == "") {
    alert("Enter each details correctly");
  } else if (!email_val.test(email)) {
    alert("invalid email format, please enter valid email id");
  } else if (pass.length < 8) {
    alert("Password must contain 8 characters at minimum");
  } else {
    alert(`welcome back ${email.replace("@gmail.com", "")}`);
  }
}
