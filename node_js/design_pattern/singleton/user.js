class User {
    constructor(firstName, lastName) {
        if(User.exists) {
            return User.instance;
        }
        this._firstName = firstName;
        this._lastName = lastName;

        //singleton
        User.exists = true;
        User.instance = this;
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