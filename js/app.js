//
const enlace=document.createElement('a');

enlace.className='enlace';
enlace.id='nuevo-id';
enlace.setAttribute('href','#');
enlace.textContent='nuevo enlace';

document.querySelector('#secundaria').appendChild(enlace)

const nuevoEncabezado=document.createElement('h2');
nuevoEncabezado.id='encabezado';
nuevoEncabezado.appendChild(document.createTextNode('cursos carlos'))

document.querySelector('#encabezado')