class User {
    constructor(firstName, lastName) {
        //update for make a singleton
        //__?__
        //__?__
        //__?__
        this._firstName = firstName;
        this._lastName = lastName;
        //update for make a singleton
        //__?__
        //__?__
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get user() {
        return {
            firstName:this._firstName,
            lastName : this._lastName
        }
    }
}

const FistUser = new User('toto', 'd');
const SecondUser = new User('alex', 'd');

console.log(FistUser);
console.log(User);