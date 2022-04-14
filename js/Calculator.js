// const Parser = require("./Parser");
// const Stack = require("./Stack");
// const {
//     Operator,
//     Addition,
//     Subtraction,
//     Multiplication,
//     Division,
//     PowerOf,
//     OpenPar
// } = require("./Operator");

class Calculator {
    operandStack = new Stack(); // Ex: [3, 4, 5, 6]
    operatorStack = new Stack(); // [new Add(), new Mulp(), new Add()]
    operators = {
        "+": new Addition(),
        "-": new Subtraction(),
        "*": new Multiplication(),
        "/": new Division(),
        "^": new PowerOf(),
        "%": new Percentage(),
        "(": new OpenPar()
    }

    constructor(){
        this.parser = null;
    }
    
    calculate(str){
        this.parser = new Parser(str);

        while( !this.parser.isEnd() ){
            let token = this.parser.getToken()
            if( !Operator.isOperator(token) ) {
                this.operandStack.push(parseInt(token));
            }
            else {
                if (token != ")") {
                    let newToken = this.operators[token];

                    if( !this.operatorStack.isEmpty() && !(newToken instanceof OpenPar) ) {
                        if( this.operatorStack.getTop().priority() >= newToken.priority() ){
                            let operand1 = this.operandStack.pop();
                            let operand2 = this.operandStack.pop();
                            let operator = this.operatorStack.pop();
                            this.operandStack.push(operator.exec(operand2, operand1));
                        }
                    }

                    this.operatorStack.push( newToken );
                }
                else if(token == ")") {
                    while(!this.operatorStack.isEmpty()){
                        if( !(this.operatorStack.getTop() instanceof OpenPar) ){
                            let operand1 = this.operandStack.pop();
                            let operand2 = this.operandStack.pop();
                            let operator = this.operatorStack.pop();
                            this.operandStack.push(operator.exec(operand2, operand1));
                        }
                        else break
                    }

                    this.operatorStack.pop()
                }

            }
        }


        while(!this.operatorStack.isEmpty()){
            let operand1 = this.operandStack.pop();
            let operand2 = this.operandStack.pop();
            let operator = this.operatorStack.pop();
            this.operandStack.push(operator.exec(operand2, operand1));
        }

        return this.operandStack.pop()

    }
}

// let cal = new Calculator("2 * 3 + (3 / 3)");

// console.log(cal.calculate())


// module.exports = Calculator;




