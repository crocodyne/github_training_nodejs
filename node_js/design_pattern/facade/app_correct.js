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
//create facade 
const CourseServicesFacade = (() => {
    const Complete = (myCourse) => {
        CourseServices.complete(myCourse);
        if(myCourse.completed) {
            CourseServices.save(myCourse);
        }
    }
    return {
        completeMethod : Complete
    }
})();
//use facade
CourseServicesFacade.completeMethod(myCourse);
console.log(myCourse);