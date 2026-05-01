//how to get an obj that contain string str |number nb | obj {a:42 } by file export.js
const myModule = require('./exports_props');
const Dog = require('./exports_class');
console.log(myModule.str);
console.log(myModule.nb);
console.log(myModule.obj);

let c = new Dog();
c.noise();