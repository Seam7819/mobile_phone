const url = 'https://jsonplaceholder.typicode.com/todos/1';

function loadData (){
    fetch(url)
    .then(res => res.json())
    .then(json => console.log(json))
}

function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( res => res.json())
    .then(data => loadUser2 (data))
}

function loadUser2 (data){
    for(const user of data){
        const ul = document.getElementById('list-container');
        const li = document.createElement('li');
        li.innerText = user.email;
        ul.appendChild(li);
    }
}

function loadUser3 (){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayComment (data))
}

function displayComment (data){
    // console.log(data)
    for ( const comment of data){
        // console.log(comment.body)
        const p = document.getElementById('comment-section')
        const body = document.createElement('body');
        body.innerText = comment.body;
        p.appendChild(body);
    }
}