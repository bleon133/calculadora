const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operando = document.getElementById('operando');
const display = document.getElementById('display');
const botones = document.querySelector('.container__parte3')

botones.addEventListener('click',(e)=>{
    switch(e.target.id){
        case 'divi':
            operando.textContent = '/';
            break;
        case 'mult':
            operando.textContent = '*';
            break;
        case 'rest':
            operando.textContent = '-';
            break;  
        case 'suma':
            operando.textContent = '+';
            break;        
    }
    if(e.target.id=='igual'){
        if(isNaN(num1.value) && isNaN(num2.value)){
            display.textContent = 'NaN'
        }
        else{
            if(num1.value != '' && num2.value != ''){
                switch(operando.textContent){
                    case '/':
                        display.textContent=+num1.value / +num2.value;
                        break;
                    case '*':
                        display.textContent=+num1.value * +num2.value;
                        break;
                    case '-':
                        display.textContent=+num1.value - +num2.value;
                        break;  
                    case '+':
                        display.textContent=+num1.value + +num2.value;
                        break;        
                }
            }
            else{
                display.textContent = ''
            }
        }
    }
})