let elemento_usuario_logado = document.getElementById("usuario-logado");

const nome_usuario_logado = localStorage.getItem("usuarioLogado");

const sobrenomeUsuarioLogado = 'Silva'

elemento_usuario_logado.innerText = `Olá ${nome_usuario_logado} ${sobrenomeUsuarioLogado}`;

const paginaInicial = () => {
    localStorage.removeItem("usuarioLogado");
    window.location.assign('../../index.html');
}