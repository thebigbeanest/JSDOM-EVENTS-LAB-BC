/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let equation = ""
/*------------------------ Cached Element References ------------------------*/

const numbers = document.querySelectorAll(".number")
const equalsButton = document.querySelector('.equals')
const operators = document.querySelectorAll('.operator')
const clearButton = document.querySelector('.clear')
const display = document.querySelector('.display')

/*----------------------------- Event Listeners -----------------------------*/
numbers.forEach(number => {
    number.addEventListener("click", (event) => {
      append(event.target.innerText);
        display.innerText = equation
    });
  });
  operators.forEach(operator => {
    operator.addEventListener("click", (event) => {
      append(event.target.innerText);
        display.innerText = equation
    });
  });
  clearButton.addEventListener("click", clear);
  equalsButton.addEventListener("click", equal);
/*-------------------------------- Functions --------------------------------*/
  function append(input) {
    equation = equation + input
  }

  function clear() {
    display.innerText = ''
    equation = ''
  }

  function equal() {
    if (display.innerText == "") {return}
        display.innerText = eval(display.innerText)
    equation = display.innerText
  }


  // WORKED ON IN COLLABORATION WITH MYSELF (TANNER GILLIAM), GRACE KADIKAEGBU, JO SLEMPA, and WILL ISENBERG
  