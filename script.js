const displayResponse = (idNumber) => {
  const sign = document.getElementById(`A${idNumber}`)
  const response = document.getElementById(`R${idNumber}`)

  if(sign.classList.contains('active-sign')) {
    sign.classList.remove('active-sign')
    response.classList.remove('active-response')
  } else {
    sign.classList.add('active-sign')
    response.classList.add('active-response')
  }
}

document.getElementById('A0').addEventListener('click', () => {
  displayResponse(0)
})
document.getElementById('A1').addEventListener('click', () => {
  displayResponse(1)
})
document.getElementById('A2').addEventListener('click', () => {
  displayResponse(2)
})
document.getElementById('A3').addEventListener('click', () => {
  displayResponse(3)
})