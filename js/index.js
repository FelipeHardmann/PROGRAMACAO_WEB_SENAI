//obter um elemento
var appEl = document.querySelector('#app');

//Criar um elemento
var senhaEl = document.createElement('input');
senhaEl.setAttribute('type', 'password');

//atrelar o senhaEl ao appEl
appEl.appendChild(senhaEl);




//Quadrado1 - criar elemento
var quadrado1 = document.createElement('div');

//Criando quadrado
quadrado1.style.height = '100px';
quadrado1.style.width = '100px';
quadrado1.style.backgroundColor = 'red';

appEl.appendChild(quadrado1);

//Circulo
var circulo = document.createElement('div');
circulo.style.height = '100px'
circulo.style.width = '100px'
circulo.style.borderRadius = '100px'
circulo.style.backgroundColor = 'black';
appEl.appendChild(circulo);

//retangulo
var retangulo = document.createElement('div');
retangulo.style.height = '100px';
retangulo.style.width = '300px';
retangulo.style.backgroundColor = 'green';
appEl.appendChild(retangulo);   





