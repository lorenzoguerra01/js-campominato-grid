// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

let elBtnPlay = document.getElementById("btn-play")

elBtnPlay.addEventListener("click", function () {
    let acc = '';
    let sel = document.getElementById("sel").value
    let msContainer = document.querySelector(".ms_container");

    console.log(sel);
    if (sel === "easy") {
        for (let i = 0; i < 100; i++) {
            acc += ` <div class="ms_box ms_box-easy">${i + 1}</div>`;
            console.log(acc);
        }
    } else if (sel === "normal") {
        for (let i = 0; i < 81; i++) {
            acc += ` <div class="ms_box ms_box-normal">${i + 1}</div>`;
            console.log(acc);
        }
    } else if (sel === "hard") {
        for (let i = 0; i < 49; i++) {
            acc += ` <div class="ms_box ms_box-hard">${i + 1}</div>`;
            console.log(acc);
        }
    } else {
        msContainer.innerHTML = ` <div class="text-danger">Selezionare una difficoltà</div>`;
    }

    msContainer.innerHTML = acc;
    let boxes = document.querySelectorAll(".ms_box")
    boxes.forEach(function (box) {
        box.addEventListener("click", function () {
            this.classList.toggle("bg-primary")
        })
    })
})

