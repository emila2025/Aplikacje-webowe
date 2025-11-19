// ZEGAR ODLICZAJĄCY DO KONCERTU

function updateTimer() {
    const eventDate = new Date("2025-12-17").getTime(); // data koncertu
    const now = new Date().getTime();
    const diff = eventDate - now;

    const timer = document.getElementById("timer");

    // Jeśli koncert już minął — komunikat
    if (diff <= 0) {
        timer.innerHTML = "Koncert już się odbył!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    timer.innerHTML = `${days} dni ${hours} godz. ${minutes} min`;
}

setInterval(updateTimer, 1000);
updateTimer();

