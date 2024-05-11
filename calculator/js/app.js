const calcButtons = document.querySelectorAll(".calc-btn");
const calcDisplay = document.getElementById("screen-input");
const calcOperators = document.querySelectorAll(".arthematicOperator");


let calcButtonsArray = Array.from(calcButtons);
// console.log(calcButtonsArray);
let calcStrings = '';
calcButtonsArray.forEach(btn => {
    btn.addEventListener("click",(e) => {
        // console.log(e);
        if(e.target.innerHTML == 'DEL'){
            calcStrings = calcStrings.substring(0,calcStrings.length-1);
            calcDisplay.value = calcStrings;
        }else if(e.target.innerHTML == 'AC'){
            calcStrings = '';
            calcDisplay.value = calcStrings;
        }else if(e.target.innerHTML == '='){
            calcStrings = eval(calcStrings);
        calcDisplay.value = calcStrings;
        }else if(e.target.innerHTML == '%'){
                calcStrings = eval(calcStrings)/100;
            calcDisplay.value = calcStrings;
        }else{
        calcStrings += e.target.innerHTML;
        calcDisplay.value = calcStrings;
        }

     });
});

// // ++++++++++++++++++++++++ basic calculator +++++++++++++++++++++++++++


    
