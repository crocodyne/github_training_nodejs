
const txt = "This a story about a mouse , he lives in New york";

//find the index of word
const r = txt.search(/Ntew/g);

console.log(r);

//how to cut the string txt with a regex?
const r_ = txt.split(/[ ]/);
console.log(r_);

//boolean / number / String / undefined / null sont les types primitifs
movies = [
    { title : "marseille", year : 1976, duration : 120 },
    { title : "Lyon", year : 1980, duration : 150 },
    { title : "Bordeauw", year : 1995, duration : 170 },

]
function displayMovies(movies) {
    //how to create an html fragment with movie information 
    //display in console.log
    let content = [];
    movies.forEach(element => {
        const singleHtmMovie = `
        <div>
            <h3>${element.title}</h3>
            <div>
                <span>${element.year}</span>
                <span>${element.duration}</span>
            </div>
        </div>
        `;
        content = [...content, singleHtmMovie];
    });
    console.log(content.join(''));
}

displayMovies(movies);

//how to swap two var without use an another var temp
let a = 1;
let b = 2;

[a, b] = [b, a];

//how to avoid this statement?
/* 
const colors = [];
let firstColor = "white";
if(colors.length > 0) {
    firstColor = colors[0];
}
*/
const colors = ["red", "blue"];
const [firstColor = "white"] = colors;

console.log(firstColor);

const numbers = [1,2,3];
//how to gets a new var newNumber with only item 2 and 3
const [,...newNumber] = numbers;

console.log(newNumber);

const big = {foo : 'value foo', bar : 'value bar'};
//how to gets new object small without bar property?
const {bar, ...small} = big;
console.log("small -> ", small);

const tab = ["apple", "cherry"];
//how to check if tab contain banana
console.log(tab.includes("banana"));

var mixer = function(food, foodbis) {
    console.log(food + " with " + foodbis);
}

mixer("apple", "cherry");
//how to simplify this statement
const food = ["papaye", "banana"];
mixer(...food);

var dog = {name : "dog", age :3, color : "blue"};
//how to get var name and color
var {name, color} = dog;
console.log(name + " with color " + color);

