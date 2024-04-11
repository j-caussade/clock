const hoursHand = document.querySelector("#hours");
const minutesHand = document.querySelector("#minutes");
const secondsHand = document.querySelector("#seconds");

setInterval(movement, 1000);

function movement() {
    const time = new Date();

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const angleHours = 30 * hours;
    hoursHand.style = `transform: rotate(${angleHours}deg)`;

    const angleMinutes = 360 / (60 / minutes);
    minutesHand.style = `transform: rotate(${angleMinutes}deg)`;

    const angleSeconds = 360 / (60 / seconds);
    secondsHand.style = `transform: rotate(${angleSeconds}deg)`;
}