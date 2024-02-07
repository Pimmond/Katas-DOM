// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
const divVacio1 = document.createElement('div')
document.body.appendChild(divVacio1)
// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const divVacio2 = document.createElement('div')
document.body.appendChild(divVacio2)
const pVacio = document.createElement('p')
divVacio2.appendChild(pVacio)
// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// 	loop con javascript.
const divVacio3 = document.createElement('div')
document.body.appendChild(divVacio3)
for (let i = 0; i < 6; i++) {
  const pVacio = document.createElement('p')
  divVacio3.appendChild(pVacio)
}
// 1.4 Inserta dinamicamente con javascript en un html una p con el
// 	texto 'Soy dinámico!'.
const soyDinamico = document.createElement('p')
soyDinamico.innerHTML = 'Soy dinámico!'
document.body.appendChild(soyDinamico)
// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
document.querySelector('.fn-insert-here').innerHTML = 'Wubba Lubba dub dub'

// 1.6 Basandote en el siguiente array crea una lista ul > li con
// los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

const socialMediaList = document.createElement('ul')
document.body.appendChild(socialMediaList)
for (const app of apps) {
  const li = document.createElement('li')
  li.innerHTML = app
  socialMediaList.appendChild(li)
}

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const nodosEliminar = document.querySelectorAll('.fn-remove-me')
for (const nodoEliminar of nodosEliminar) {
  nodoEliminar.remove()
}
// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
const pVoyEnMedio = document.createElement('p')
pVoyEnMedio.innerHTML = 'Voy en medio!'
const div = document.querySelector('div')
div.appendChild(pVoyEnMedio)

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// 	.fn-insert-here
const divsInsertHere = document.querySelectorAll('div.fn-insert-here')

for (const divInsertHere of divsInsertHere) {
  const p = document.createElement('p')
  p.innerHTML = 'Voy dentro!'
  divInsertHere.appendChild(p)
}
