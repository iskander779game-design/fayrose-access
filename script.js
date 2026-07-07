function login() {
    const password = "ANNABA"; // غيرها لكلمة السر اللي تحبها
    const input = document.getElementById("pass").value;

    if (input === password) {
        window.location.href = "home.html";
    } else {
        document.getElementById("error").innerText = "Wrong Secret Key";
    }
}
