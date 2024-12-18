//TIMER CODE
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const timer = document.querySelector('.timer');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');

start.addEventListener("click", () => {
    let secondsPerHour = (hours.value === 0 ? 0 : hours.value * 60 * 60);
    let secondsPerMinute = (minutes.value === 0 ? 0 : minutes.value * 60);

    let time = secondsPerHour + secondsPerMinute + Number(seconds.value);

    function formatTime(time) {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600)/ 60);
        const seconds = time % 60;
        return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    
    function updateCountdown() {
        time--;
        timer.innerText = formatTime(time);
        if(time <= 0) {
            clearInterval(timerInterval);
            console.log('nigga');
        }
    }

    modal.style.display = 'none';

    const timerInterval = setInterval(updateCountdown, 1000);

    stop.addEventListener("click", () => {
        clearInterval(timerInterval);
        stop.innerText = 'Start';
    });

    reset.addEventListener("click", () => {
        clearInterval(timerInterval);
        time = 0;
        timer.innerText = formatTime(time);
    });
    
});









