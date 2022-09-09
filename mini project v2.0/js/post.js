let post = JSON.parse(localStorage.getItem('post')) ;

let main = document.getElementsByClassName('main')[0];
let divBoxOfComments = document.getElementsByClassName('comments')[0];

let postInfo = (post) => {
    let divPost = document.createElement('div');
    divPost.classList.add('post');
    main.append(divPost);

    let arr = Object.values(post);
    let keys = Object.keys(post);
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === "object"){
            info (arr[i]);
        }
        else{
            let p = document.createElement('p');
            p.innerText = `${keys[i]}: ${arr[i]}`;
            divPost.append(p);
        }
    }
}
postInfo(post);

fetch(`https://jsonplaceholder.typicode.com/posts/${post.user.id}/comments`)
    .then(resp => resp.json())
    .then(comments =>{
        for (const comment of comments) {
            let divComment = document.createElement('div');
            divComment.classList.add('comment')
            divBoxOfComments.append(divComment);

            let pComment = document.createElement('p');
            pComment.innerText = comment.body;
            divComment.appendChild(pComment);
        }
    })