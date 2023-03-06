// const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const parrafito = document.querySelector('.parrafito');
// const pid = document.querySelector('#pid');
// const input = document.querySelector('input');

// h1.innerText = 'un perrito chistosito';
// // h1.setAttribute('class', 'rojo');
// h1.classList.add('rojo'); //para agregar una clase del dom
// h1.classList.remove('verde'); // para eliminar una clase del dom

// input.value = '456';

// const img = document.createElement('img');
// img.setAttribute('src', 'https://www.zooplus.es/magazine/wp-content/uploads/2022/05/Cuanto-pesa-un-gato-2.jpeg');

// pid.append(img);//meter un nuevo elemeto (etiqueta) al html

const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalculador');
const result = document.querySelector('#result');

form.addEventListener('submit', sumarInputs);

function sumarInputs(event) {
    event.preventDefault();
    let r = parseInt(input1.value) + parseInt(input2.value);
    result.innerText = "Resultado: " + r;
}