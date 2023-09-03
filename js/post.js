function loadUser (){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayUser(data))
}

function displayUser(data){
    const postContainer = document.getElementById('post-container');
    for(const user of data){
        // console.log(user)
        const div = document.createElement('div');
        div.innerHTML = `
        <h3>user-id:${user.userId}</h3>
        <h2>title :${user.title} </h2>
        <p> description : ${user.body} </p>
        `
        div.classList.add('post-div');
        postContainer.appendChild(div);

    }
}