const SECRET_KEY = "Annaba"; // غيّرها إلى كلمة السر التي تريدها

function checkPassword() {

    let pass = document.getElementById("password").value;

    if (pass === SECRET_KEY) {

        document.getElementById("passwordBox").style.display = "none";
        document.getElementById("identityBox").style.display = "block";

    } else {

        document.getElementById("error").innerHTML = "Wrong Secret Key";

    }

}

function submitIdentity() {

    let first = document.getElementById("firstname").value.trim();
    let last = document.getElementById("lastname").value.trim();

    if (first === "" || last === "") {

        alert("Please enter your First Name and Last Name.");

        return;

    }

    /* سنربط Google Sheets هنا لاحقًا */

    window.location.href = "home.html";

}
