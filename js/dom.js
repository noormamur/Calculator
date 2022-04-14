// const Calculator = require('./Calculator');

function count (arr) {
    var j = 0 ;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == "(") j++

        if(arr[i] == ")") j--
    }

    return j;
}


function main() {
    let cal = new Calculator();
    var output = document.getElementById("output");
    var operandlist = document.getElementsByClassName("operand");
    let operatorlist = document.getElementsByClassName("operator");
    let remove = document.getElementById("icon");
    let equal = document.getElementById("equal");
    let clear = document.getElementById("clear");
    let parentheses = document.getElementById("parentheses");

    let arr = [];

    // appends an operand to the output
    for (let i = 0; i < operandlist.length; i++) {
        operandlist[i].addEventListener("click", () => {

            if(arr[arr.length -1] == ")") arr.push("*")

            arr.push(operandlist[i].getAttribute('name'));   

            output.innerText = arr.join("");
        })
    }

    // console.log(operandlist);
    for (let i = 0; i < operatorlist.length; i++) {
        operatorlist[i].addEventListener("click", () => {
            if(arr.length > 0 && arr[arr.length - 1] != "(") {
                var currentOperator = operatorlist[i].getAttribute('name');

                if(!Operator.isOperator(arr[arr.length - 1]) || arr[arr.length - 1] == ")") {
                    arr.push(currentOperator);
                }
                else {
                    arr[arr.length - 1] = currentOperator;
                }

                output.innerText = arr.join("");
            }
        })
    }

    clear.addEventListener("click", () => {
        output.innerText = "";
        arr = [];
    })

    parentheses.addEventListener("click", (e) => {
        let openedPar = count(arr);

        if( arr.length  > 0 ){
            if( Operand.isOperand(arr[arr.length - 1]) || arr[arr.length - 1] == ")" ) {
                if(openedPar > 0) {
                    arr.push(")");
                }
                else {
                    arr.push("*");
                    arr.push("(");
                }
            }
            else {
                arr.push("(");
            }
        }
        else {
            arr.push("(");
        }

        output.innerText = arr.join("");
    })

    // removes last char from the output
    remove.addEventListener("click", () => {
        arr.pop();
        output.innerText = arr.join("");
    })

    
    equal.addEventListener("click", () => {
        if(arr.length > 0) {
            var result = cal.calculate(arr.join(""));
            output.innerText = result;
            arr = result.toString().split("")      
        }
    });

}

// operandlist[i].getAttribute("name");


( () => main() )();



// let cal = new Calculator();
// let equal = document.getElementsByClassName("equal");
// equal.addEventListener("click", () => {cal.calculate(str)})