document.getElementById('loadPostsBtn').addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        const postsList = document.getElementById('postsList');
        postsList.innerHTML = '';
        posts.forEach(post => {
            postsList.innerHTML += `<li><strong>${post.title}</strong><p>${post.body}</p></li>`;
        });
    })
    .catch(error => console.error('Erro ao buscar posts:', error));
});
