async function fetchUsers() {
    //how to insert a post stored at : https://jsonplaceholder.typicode.com/posts
    //with this data : body : JSON.stringify({title : "Mon premier titre"}) 
    const r = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method : 'POST',
        headers : {
            "Accept" : "application/json",
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({title : "Mon premier titre"})
    })
    if(r.ok === true) {
        return r.json();
    }
    throw new Error("Server is on error");
}

fetchUsers()
    .then((posts) => console.log(posts));

async function fetchTasks() {
    //how to get todos list stored at :https://jsonplaceholder.typicode.com/todos 
    const data = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method : 'GET',
        headers : {
            "Accept" : "application/json"
        }
    })
    console.log(data);
    if(data.ok === true) return data.json();
    throw new Error("Tasks is not retrieve");
}

fetchTasks()
    .then((tasks) => {
        console.log(tasks);
    })

//how to create an object which can abort Promise
const a = new AbortController()
Promise.race([
    fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5&_delay=2000', {
        signal: a.signal
    }),
    fetch('https://jsonplaceholder.typicode.com/users/?_limit=3', {
        signal: a.signal
    }),
]).then((r) => r.json()).then(body => {
    a.abort();
    console.log(body);
})