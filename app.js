const screenDisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')



let calculation = []

function calculate(button){
    const value = button.textContent

    calculation.push(value)

    console.log(button)

} 

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))

