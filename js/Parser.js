// const { Operator } = require("./Operator");

class Parser {
    constructor(str){
        this.str = "";
        this.index = 0;
        this.token = "";


        for (let i = 0; i < str.length; i++) {
            if(str[i] != " ") this.str += str[i]
        }
    }

    getToken(){
        let char = this.str[this.index];
        if( Operator.isOperator( char ) ){
            this.index ++ ;
            return char;
        }
        else {
            let temp = ""
            while( !Operator.isOperator( this.str[this.index] ) ) {
                temp += this.str[this.index];
                this.index ++;
                
                if( this.str.length == this.index ) break;
            }

            return temp;
        }
    }

    isEnd() {
        return this.str[this.index] == undefined
    }
}

// let parser = new Parser("123 + 44 +5 + ( 2^3 )")


// while( !parser.isEnd() ){
//     console.log(parser.getToken())
// }


// module.exports = Parser;
