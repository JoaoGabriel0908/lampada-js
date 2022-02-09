'use strict'

// Declaração das variaveis
const lampada = document.getElementById('lampada')
const desligar = document.getElementById('desligar')
const ligar = document.getElementById('ligar')
const piscar = document.getElementById('piscar')
let idPiscar = null;

const lampadaQuebrada = () => {
    return lampada.src.includes('quebrada')
}

// Alterando a imagem da lâmpada "Desligada"
const desligarLampada = () => {
    if (!lampadaQuebrada()) {
        lampada.src = './imgs/desligada.jpg'
    }
}

const ligarLampada = () => {
    if (!lampadaQuebrada()) {
        lampada.src = './imgs/ligada.jpg'
    }
}

// Alterando a imagem da lâmpada "Quebrada"
const quebrarLampada = () => {
    lampada.src = './imgs/quebrada.jpg'
}

const lampadaDesligada = () => {
    return lampada.src.includes('desligada')
}

const ligarDesligar = () => {
    if (lampadaDesligada()) {
        ligarLampada()
    } else {
        desligarLampada()
    }
}

const piscarLampada = () => {

    // Método que trabalha em paralelo
    if (idPiscar == null) {
        // Repete a chamada da função
        // Cada clique ele roda denovo
        idPiscar = setInterval(ligarDesligar, 500)
        piscar.textContent = 'Parar'
    } else{
        clearInterval(idPiscar)
        piscar.textContent = 'Piscar'
        idPiscar = null
    }
        // SetTimeout = Tranalha com a função que voçê atribui a ele e o tempo
        // setTimeout(ligarLampada, 1000)
}

// O evento Listener é acionado quando o 'click' é acionado e chama os métodos

// Ligar Lâmpada
ligar.addEventListener('click', ligarLampada);

// Desligar Lâmpada
desligar.addEventListener('click', desligarLampada);

// Quebrar Lâmpada
lampada.addEventListener('dblclick', quebrarLampada);

// Piscar lampada
piscar.addEventListener('click', piscarLampada);