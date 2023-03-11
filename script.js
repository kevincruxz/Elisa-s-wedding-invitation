const date = new Date("Jul 22, 2023 17:00:00").getTime();

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
    document.getElementById('days').innerHTML = days + ((days === 1) ? " Dia  " : " Dias ");
    document.getElementById('hours').innerHTML = hours + ((hours === 1) ? " Hora " : " Horas ");
    document.getElementById('minutes').innerHTML = minutes + ((minutes === 1) ? " Minuto " : " Minutos ");
    document.getElementById('seconds').innerHTML = seconds + " Segundos ";
}

const holaArray = [
    document.getElementById('H'),
    document.getElementById('o'),
    document.getElementById('l'),
    document.getElementById('a')
];

let i = 0;

let holaAnimation = setInterval(function() {
    if (i === 0) {
        holaArray[3].classList.remove('agrandizar');
    } else {
        holaArray[i - 1].classList.remove('agrandizar');
    }
    holaArray[i].classList.add('agrandizar');
    i = (i === 3) ? 0 : i + 1;
}, 300);

let botones = document.querySelectorAll('.botones');

botones.forEach(function(boton) {
    boton.addEventListener('click', (e) => {
        let allData = getEverything(boton.id);
        let descripcion = document.querySelector(allData[0]);

        if (descripcion.classList.contains('agrandar-descripcion')) {
            descripcion.style.cssText = '';
            descripcion.classList.remove('agrandar-descripcion');
            descripcion.classList.remove('animate__animated');
            descripcion.classList.remove('animate__jackInTheBox');
            
            descripcion.innerHTML = allData[2];
            descripcion.classList.add('animate__animated');
            descripcion.classList.add('animate__bounceInDown');
            descripcion.classList.add('descripciones');
        } else {
            descripcion.classList.remove('animate__animated');
            descripcion.classList.remove('animate__bounceInDown');
            descripcion.classList.remove('descripciones');

            descripcion.style.cssText = `background: url(img/${allData[3]}); background-size: cover; background-position: center; background-repeat: no-repeat;`;
            
            descripcion.classList.add('animate__animated');
            descripcion.classList.add('animate__jackInTheBox');
            descripcion.classList.add('agrandar-descripcion');
            if (allData[0] === "#descripcion" || allData[0] === "#descripcion-tres" || allData[0] === "#descripcion-cinco" || allData[0] === "#descripcion-siete") {
                descripcion.style.color = 'white'
            }
            descripcion.innerHTML = allData[1];
        }   
    });
});

function getEverything(id) {
    arr = []; //arr[0] = id, arr[1] = description, arr[2] = default, arr[3] = background

    if (id === 'cuando') {
        arr[0] = "#descripcion";
        arr[1] = "Se celebrara el dia 22 de Julio del 2023, puedes llegar ese dia o antes si decides hospedarte en el hotel";
        arr[2] = "Dia de la boda";
        arr[3] = "ererer.png";
    } else if (id === 'cuando-dos') {
        arr[0] = "#descripcion-dos";
        arr[1] = "Cuando llegues al parque Chipinque en la entrada menciona que asistiras a la boda de Elisa y Pedro";
        arr[2] = "Recepcion en hotel chipinque";
        arr[3] = "hotel.png";
    } else if (id === 'cuando-tres') {
        arr[0] = "#descripcion-tres";
        arr[1] = "Iniciara a las 17:00 en una capilla al aire libre dentro del hotel Chipinque";
        arr[2] = "Ceremonia religiosa";
        arr[3] = "misa.png";
    } else if (id === 'cuando-cuatro') {
        arr[0] = "#descripcion-cuatro";
        arr[1] = "Despues de la misa, a las 18:00 se celebrara un brindis en el mirador panoramico de Chipinque";
        arr[2] = "Brindis";
        arr[3] = "brindis.png";
    } else if (id === 'cuando-cinco') {
        arr[0] = "#descripcion-cinco";
        arr[1] = "Alrededor del mirador se encontrarán mesas llenas de diferentes postres y dulces";
        arr[2] = "Aperitivo";
        arr[3] = "mesadedulces.png";
    } else if (id === 'cuando-seis') {
        arr[0] = "#descripcion-seis";
        arr[1] = "En la explanada del hotel se localizara un fotografo profesional para tomar fotos con o sin los novios";
        arr[2] = "Fotografias";
        arr[3] = "fotos.png";
    } else if (id === 'cuando-siete') {
        arr[0] = "#descripcion-siete";
        arr[1] = "Tendra lugar a partir de las 19:00 en una explanada al costado del mirador de Chipinque";
        arr[2] = "Fiesta";
        arr[3] = "fiesta.png";
    } else {
        arr[0] = "#descripcion-ocho";
        arr[1] = "Aproximadamente a las 21:00 se  empezara a servir un menu de tres tiempos conformado por platillos muy buenos";
        arr[2] = "Servicio de cena";
        arr[3] = "cena.png";
    }
    return arr;
}

let buttonsAnimation = setInterval(function() {
    if (botones[0].classList.contains('animate__animated')) {
        botones.forEach(function(boton) {
            boton.classList.remove('animate__animated');
            boton.classList.remove('animate__tada')
        });
    } else {
        botones.forEach(function(boton) {
            boton.classList.add('animate__animated');
            boton.classList.add('animate__tada')
        });
    }
    
}, 1000);

const gift = document.querySelector('.boton-regalos');

let giftAnimation = setInterval(function() {
    if (gift.classList.contains('animate__animated')) {
        gift.classList.remove('animate__animated');
        gift.classList.remove('animate__rubberBand');
    } else {
        gift.classList.add('animate__animated');
        gift.classList.add('animate__rubberBand');
    }
}, 1000);