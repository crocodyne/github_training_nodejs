class Course {
    constructor(data) {
        this.name = data.name;
        this.project = data.project;
        this.completed = data.completed ||false;
    }
}

const CourseServices = (() => {
    return {
        complete : (Course) => {
            Course.completed = true;
            console.log("Completed course " + Course.name);
        },
        save : (Course) => {
            console.log("Save course " , Course);
        }
    }
})();

module.exports = {Course, CourseServices}