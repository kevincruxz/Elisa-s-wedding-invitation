const date = new Date("Apr 8, 2023 17:00:00").getTime();

let setCountdown = setInterval(function() {
    let currentDate = new Date().getTime();
    let timeLeft = date - currentDate;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    displayCountdown(days, hours, minutes, seconds);
}, 1000);

function displayCountdown(days, hours, minutes, seconds) {
    document.getElementById('days').innerHTML = days + " Dias :";
    document.getElementById('hours').innerHTML = hours + " Horas :";
    document.getElementById('minutes').innerHTML = minutes + " Minutos :";
    document.getElementById('seconds').innerHTML = seconds + " Segundos";
}

/*
    // detect when element gets visible on scroll
    document.addEventListener("scroll", (e) => {
        var element = document.getElementById("img-lisa");

        var top_of_element = element.offsetTop;
        var bottom_of_element = element.offsetTop + element.offsetHeight + element.style.marginTop;
        var bottom_of_screen = window.scrollY + window.innerHeight;
        var top_of_screen = window.scrollY;

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
            // Element is visible write your codes here
            // You can add animation or other codes here
            element.classList.add('img-on-screen');
        } else {
            // the element is not visible, do something else
            element.classList.remove('img-on-screen');
        }
    });
*/
