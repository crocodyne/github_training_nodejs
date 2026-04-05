const {Course, CourseServices} = require('./Course');

const myCourse = new Course({
    name : "Js design",
    project : "Udemy app"
})

CourseServices.complete(myCourse);
if(myCourse.completed) {
    CourseServices.save(myCourse);
}
//how to simplify? 

//create facade CourseServicesFacade
//__?__
//use facade
//__?__;
console.log(myCourse);