var my_obj = {name : "joe", age : 17};

//how to delete property age from object my_obj
//__?__;

console.log(my_obj);


function get(url) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(url)
        }, 3000);
    })
}

function post(url) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(url);
        }, 2000);
    })
}

/*
How to use async / await
    Promise.all([get(url1), get(url2)])
    .then(function(results) {
        return Promise.all([results, post(url3)];)
    })
    .then(funtion(allRes) {
    ....
    })
*/

async function request() {
    //__?__
}

request()
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log("Error : " + e);
    })

const util = require('util');
const EE = require('events');
function Human() {
    EE.call(this);

    var talk = function(data) {
        console.log("Human say " + data);
    }

    this.on("talk", talk);
}
util.inherits(Human, EE);
var bob = new Human();
bob.emit("talk", "Hello")

//what is the new way to do that?
//create class Human2 and extends EE
//__?__

var new_Bob = new Human2();
new_Bob.emit("talk"," hello");
    