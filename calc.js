const formRef = document.querySelector('.form');
const inputRef = document.querySelector('.calc__input');

const resultRef = document.querySelector('.result');
formRef.addEventListener('click', event => {
  event.preventDefault();
  
  if (event.target.nodeName !== 'BUTTON') {
    return
  }
  let inputValue = event.target.textContent
  console.log(inputValue);
  if (inputValue === '=') {
    calc.getNumber(inputRef.value )
    return
  } 
  if (inputValue === '+'||inputValue === '-'||inputValue === '*'||inputValue === '/') {
    calc.operator = inputValue
  }
  if (inputValue === 'С') {
    inputRef.value = ''
    return
  }
  inputRef.value +=inputValue
})

const calc = {
  res:'',
  num1: '',
  num2:'',
  operator: '',
  lastNumber:'',
  
 
  getNumber(e) {
     this.num1 = Number.parseInt(e)
     this.lastNumber = e.length - this.num1.toString().length -1
     this.num2 = Number(e.substring(e.length - this.lastNumber))
    this.result()
   
  },

  result() {
    switch (this.operator) {
      case '+':
        inputRef.value = this.num1 + this.num2;
        break;
      case '-':
        inputRef.value = this.num1 - this.num2;
        break;
      case '*':
        inputRef.value = this.num1 * this.num2;
        break;
      case '/':
        inputRef.value = this.num1 / this.num2;
        break;
    }
  }
}
  console.log(calc);