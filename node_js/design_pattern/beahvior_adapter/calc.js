class OldCalculator {
    constructor() {
        this.operations = function(n1, n2, op) {
            switch(op) {
                case 'add':
                    return n1 + n2;
                case 'sub':
                    return n1 - n2;
                default:
                    return NaN;
            }
        }
    }
}

class NewCalculator {
    static add(n1, n2) {
        return n1 + n2;
    }
    static sub(n1, n2) {
        return n1 - n2;
    }
}

//Adapter for used new Api
//__?__

const Calculator = new OldCalculator();
console.log(Calculator.operations(10, 5, 'add'));

//new calc
console.log(NewCalculator.add(10, 5))
console.log(NewCalculator.sub(10, 5))

//test adapter 
//__?__
//__?__