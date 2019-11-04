//remove_background____________________________
document.body.style.background = 'url(../img/apple_true.jpg) center no-repeat';

//add and replace bitton________________________
let btn = document.querySelectorAll('.menu .menu-item');
let men = document.querySelector('.menu');
let menBtn = document.createElement('li');
    
    menBtn.classList.add('menu-item');
    men.append(menBtn);
    menBtn.innerHTML = 'Пятий пункт';
    men.insertBefore(btn[2], btn[1]);

//add text______________________________
let tit = document.querySelector('#title');
tit.textContent='Мы продаем только подлинную технику Apple';

// delete reklama_______________________
let rek = document.querySelector('.adv');
    rek.parentNode.removeChild(rek);

    //ask__________________________________
let ask = document.querySelector('#prompt');
let question = prompt("Напишіть ваш відгук про appe?");
    ask.textContent = question;

