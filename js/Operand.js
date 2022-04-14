class Operand {
    constructor(int) {
        this.int = parseInt(int);
    }

    static isOperand(int){
        return !isNaN(parseInt(int));

    }

    getValue(){
        return this.int
    }
}