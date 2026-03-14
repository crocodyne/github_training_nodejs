function wait(timeout) {
    //create a succed promise with "ok" in result
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("ok");
        }, timeout);
    })
};

function waitAndFailed(timeout) {
    //create a rejected promise with "ko" in result
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("Ko")
        }, timeout);
    })
}


//call wait and chain then / catch and finally
wait(2000)
    .then((res) => {
        console.log(res);
        return "Bye";
    })
    .then((res) => {
        console.log(res);
    })
    .catch((e) => {
        console.log(e);
    })
    .finally(() => {
        console.log("The end");
    })
