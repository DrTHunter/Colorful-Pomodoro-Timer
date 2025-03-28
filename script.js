let timer;
let timeLeft;
let isRunning = false;
let alarm = document.getElementById("alarm");

function startTimer() {
    if (isRunning) return;

    const minutes = document.getElementById("minutes").value;
    timeLeft = minutes * 60;
    isRunning = true;

    document.getElementById("start").textContent = "Pause";

    timer = setInterval(function () {
        timeLeft--;
        updateDisplay();

        if (timeLeft <= 0) {
            clearInterval(timer);
            isRunning = false;
            document.getElementById("start").textContent = "Start";
            alarm.play();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    document.getElementById("start").textContent = "Start";
    timeLeft = document.getElementById("minutes").value * 60;
    updateDisplay();
}

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("time-display").textContent =
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
