function renderiza_foto(foto){
    const img_foto = document.getElementById('foto');
    img_foto.src=`${foto}`;
}
function renderiza_nome(nome){
    const nm = document.getElementById('nome');
    nm.innerText = nome;
}
function renderiza_repos(data){
    const repos = document.getElementById('repos');
    repos.innerHTML += `<div class="card shadow-lg mb-3 text-bg-dark text-center">
                            <div class="card-body">
                            <h5 class="card-title">${data.name}</h5>
                            <p class="card-text"><a href="${data.html_url}">LINK</a></p>
                            </div>
                        </div>`
}

const headers = new Headers();
headers.append('Authorization', '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')

fetch('https://api.github.com/users/luisQuintino',
{
    headers: headers
})
.then(response => response.json())
.then(data => {
    console.log(data);
    renderiza_foto(data.avatar_url);
    renderiza_nome(data.name);
    console.log(data.login);
})
.catch (error => {
    console.error("algo deu errado na requisição", error);
}).finally ((finalizar)  => {
    console.log("sempre cai aqui");
})

fetch('https://api.github.com/users/luisQuintino/repos',
{
    headers: headers
})
.then(response => response.json())
.then(data => {
    console.log(data);
    data.forEach(renderiza_repos);
})
.catch (error => {
    console.error("algo deu errado na requisição", error);
}).finally ((finalizar)  => {
    console.log("sempre cai aqui");
})