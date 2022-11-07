'use strict';

const num= document.querySelector('.num');
const convert= document.querySelector('.convert');
const chooseOne= document.querySelector('.choose-01');
const chooseTwo= document.querySelector('.choose-02');
const result= document.querySelector('.result');

chooseOne.addEventListener('click', function() {
    if(chooseOne.checked){
        chooseTwo.checked = false;
    }
});

chooseTwo.addEventListener('click', function() {
    chooseOne.checked = false;
})

convert.addEventListener('click', () => {
    let a = num.value.trim();
    if (a == isNaN) {
        let outPut = 'please enter a valid number';
        result.innerText = outPut;
    } 
    else if(chooseOne.checked) {
        let outPut = 32 + a * 1.8;
        result.innerText = `${a}C = ${outPut.toFixed(2)}F`;
    } else if(chooseTwo.checked) {
        let outPut = (a - 32) / 1.8;
        result.innerText = `${a}F = ${outPut.toFixed(2)}C`;

    }
});

const lightMode = document.querySelector('.light-02');
const main = document.querySelector('.main');
const title = document.querySelector('.title');
const exchangeOne = document.querySelector('.exchange-01');
const exchangeTwo = document.querySelector('.exchange-02');

let flag = 0;
lightMode.addEventListener('click', () => {
    if(flag === 0) {
        main.style.backgroundColor= '#B1B1B1';
        title.style.color = '#fff';
        exchangeOne.style.color = '#fff';
        exchangeTwo.style.color = '#fff';
        result.style.backgroundColor= '#fff';
        flag = 1;
    } else {
        main.style.backgroundColor= '#fff';
        title.style.color = '#000';
        exchangeOne.style.color = '#000';
        exchangeTwo.style.color = '#000';
        flag = 0;
    }
});