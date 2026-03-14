async function fetchUsers() {
    //how to insert a post stored at : https://jsonplaceholder.typicode.com/posts
    //with this data : body : JSON.stringify({title : "Mon premier titre"}) 
    const r = //__?__
    if(r.ok === true) {
        return r.json();
    }
    throw new Error("Server is on error");
}

fetchUsers()
    .then((posts) => console.log(posts));

async function fetchTasks() {
    //how to get todos list stored at :https://jsonplaceholder.typicode.com/todos 
    const data = //__?__
    console.log(data);
    if(data.ok === true) return data.json();
    throw new Error("Tasks is not retrieve");
}

fetchTasks()
    .then((tasks) => {
        console.log(tasks);
    })

//how to create an object which can abort Promise
//__?__
Promise.race([
    fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5&_delay=2000', {
        //__?__
    }),
    fetch('https://jsonplaceholder.typicode.com/users/?_limit=3', {
        //__?__
    }),
]).then((r) => r.json()).then(body => {
    a.abort();
    console.log(body);
})