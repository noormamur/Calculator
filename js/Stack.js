class Stack {
    constructor() {
        
        this.arr = [];
        this.length = 0;
    
    }

    push(n){
        this.arr[this.length] = n;
        this.length += 1;
    }

    pop(){
        var top = this.arr[this.length - 1];
        this.length--;

        return top;
    }

    getTop(){
        return this.arr[this.length - 1];
    }

    isEmpty(){
        return this.length == 0;
    }

    print(){
        var output = "[";

        for (let i = 0; i < this.length; i++) {
            output += this.arr[i];

            if(i != this.length - 1){
                output += ", "; 
            }
        }

        console.log("Stack: " + output + "]");
    }


    
}
 
