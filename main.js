const num = document.getElementById('num1');
const operando = document.getElementById('operando');
const display = document.getElementById('display');
const botones = document.querySelector('.container__parte3')
let num1 = "";
botones.addEventListener('click',(e)=>{
    switch(e.target.id){
        case 'divi':
            if(isNaN(num.value) || num.value == ""){
                display.textContent = 'NaN';
            }else{
                operando.textContent = '/';
                num1 = num.value;
                num.value = "";
            }
            break;
        case 'mult':
            if(isNaN(num.value) || num.value == ""){
                display.textContent = 'NaN';
            }else{
                operando.textContent = '*';
                num1 = num.value;
                num.value = "";
            }
            break;
        case 'rest':
            if(isNaN(num.value) || num.value == ""){
                display.textContent = 'NaN';
            }else{
                operando.textContent = '-';
                num1 = num.value;
                num.value = "";
            }
            break;  
        case 'suma':
            if(isNaN(num.value) || num.value == ""){
                display.textContent = 'NaN';
            }else{
                operando.textContent = '+';
                num1 = num.value;
                num.value = "";
            }
            break;   
        default:
            break;
    }
    if(e.target.id=='igual'){
        if(isNaN(num.value)){
            display.textContent = 'NaN'
        }
        else{
            if(num.value != '' && num1 != ''){
                switch(operando.textContent){
                    case '/':
                        display.textContent=+num1 / +num.value;
                        num.value = "";
                        operando.textContent = '';
                        break;
                    case '*':
                        display.textContent=+num1 * +num.value;
                        num.value = "";
                        operando.textContent = '';
                        break;
                    case '-':
                        display.textContent=+num1 - +num.value;
                        num.value = "";
                        operando.textContent = '';
                        break;  
                    case '+':
                        display.textContent=+num1 + +num.value;
                        num.value = "";
                        operando.textContent = '';
                        break;        
                }
            }
            else{
                display.textContent = ''
            }
        }
    }
    if(e.target.id=='limpiar'){
        display.textContent= "";
        num.value = "";
        operando.textContent = '';
    }
})