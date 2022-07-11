class Operator {
    static operators = ['+', '-', '*', '/', '^', '(', ')', '%']

    // "static" means: a function inside a class
    // can be used outside the class's scope
    // without declaring class object
    static isOperator(token) {
        return this.operators.includes(token);
    }

    priority(){}

    toString(){};

    exec(operand1, operand2) {}

}

class Addition extends Operator {

    exec(operand1, operand2){
        return operand1 + operand2;
    }

    toString(){ return "+" }

    priority(){
        return 1;
    }
}

class Subtraction extends Operator {

    exec(operand1, operand2){
        return operand1 - operand2;
    }

    toString(){ return "-" }

    priority(){
        return 1;
    }
}

class Multiplication extends Operator {
    
    exec(operand1, operand2) {
        return operand1 * operand2;
    }

    toString(){ return "*" }

    priority() {
        return 2;
    }
}
class Division extends Operator {
    exec(operand1, operand2) {
        return operand1 / operand2;
    }

    toString(){ return "/" };

    priority() {
        return 2;
    }
}

class PowerOf extends Operator {
    exec(operand1, operand2) {
        return Math.pow(operand1, operand2);
    }

    toString(){ return "^" };

    priority() {
        return 3;
    }
}

class Percentage extends Operator {
    exec(operand1, operand2) {
        return (operand1 / 100) * operand2
    }

    toString() { return "%"};

    priority() { return 2}
}

class OpenPar extends Operator {
    exec(operand1, operand2) {
        return null
    }

    toString(){ return "(" }

    priority() {
        return 0;
    }
}
