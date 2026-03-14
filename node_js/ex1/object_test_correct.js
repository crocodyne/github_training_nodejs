var my_obj = {name : "joe", age : 17};

//how to delete property age from object my_obj
delete my_obj["age"];

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
    const gets = await Promise.all([get("Url_1"), get("Url_2")]);
    const posts = await Promise.all([post("Url_post")]);
    return [gets, posts];
}

request()
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log("Error : " + e);
    })

//this statement is depreciate since nodeJS 10
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
//use class and extends
class Human2 extends EE {
    constructor() {
        super();
        this.on("talk", (data) => {
            console.log(data);
        })
    }
}

var new_Bob = new Human2();
new_Bob.emit("talk"," hello");