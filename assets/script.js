/* Traccia
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina! */

const timeElement = document.querySelector(".time")

setInterval(countdown, 1000)
function countdown(){
    let currentTime = new Date().getTime();
    let deadline = new Date ("September 6, 2023 09:30:00").getTime();
    let distance = deadline - currentTime;
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    console.log(hours + "h "
    + minutes + "m " + seconds + "s ");
    timeElement.innerHTML = `<h2> ${hours}  h 
     ${minutes}  m   ${seconds}  s </h2>`
}