document.getElementById("contactForm").addEventListener("submit", function(e) {
    const email = document.querySelector("#contactForm input[type='text']").value;
    const message = document.querySelector("#contactForm textarea").value;

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Proszę wpisz poprawny adres e-mail!");
        e.preventDefault();
        return;
    }

    if (message.trim() === "") {
        alert("Wpisz wiadomość!");
        e.preventDefault();
        return;
    }

    alert("Formularz wysłany poprawnie!");
});
