const express = require('express');
const morgan = require('morgan')

const app = express();
const port = 3000;
console.log(process.env)
const logger = (req, res, next) => {
    console.log("req -> " , req);
    next()
}
//create a logger
//__?__

//use logger
//__?__
//app.use(morgan('dev'))
//app.use(logger)

app.get('/', (req, res) => {
    //how to start to measure time 
    console.time('time_e');
    res.send("Hello");
    //how to display time until here
    console.timeEnd('time_e');
})

app.listen(port, () => {
    console.log("App is running");
})