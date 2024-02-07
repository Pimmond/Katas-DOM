// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click
const addBotonToClick = () => {
  const botonToClick = document.createElement('button')
  botonToClick.className = 'btnToClick'
  botonToClick.textContent = 'Haz click'
  document.body.appendChild(botonToClick)
  botonToClick.addEventListener('click', function (e) {
    console.log(e)
  })
}
addBotonToClick()

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const focusInput = () => {
  const focusInput = document.querySelector('.focus')
  focusInput.addEventListener('focus', function () {
    console.log(focusInput.value)
  })
}
focusInput()

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const inputInput = () => {
  const inputValue = document.querySelector('.value')
  inputValue.addEventListener('input', function () {
    console.log(inputValue.value)
  })
}

inputInput()
