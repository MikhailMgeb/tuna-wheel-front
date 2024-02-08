import { symbols } from './symbols.js';
const button = document.querySelector('.button');
const characterFirst = document.querySelector('.casino__table-first');
const characterSecond = document.querySelector('.casino__table-second');
const characterThird = document.querySelector('.casino__table-third');
const countPoints = document.querySelector('.block-points__point');

let points = 1500;
countPoints.textContent = points;

function characterRendering(array) {
    characterFirst.textContent = array[0];
    characterSecond.textContent = array[1];
    characterThird.textContent = array[2];

    if (array[0] === array[1] && array[1] === array[2]) {
        points += Number(array[3]);
        countPoints.textContent = points;
    } else {
        points -= 50;
        countPoints.textContent = points;
    }
}

button.addEventListener('click', (event) => {
    let array = [];

    fetch('http://localhost:3000/wheel', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(symbols)
    })
        .then(response => response.json())
        .then(data => {
            array = [...data];
            characterRendering(array);
            if (array.length === 4) {
                array.length = 0;
            }
        })
        .finally(() => {

        })
})
