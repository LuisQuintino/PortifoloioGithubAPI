let elementoLogin = document.getElementById("login");
let elementoSenha = document.getElementById("senha");

const verificarLogin = (login, senha) => {
    if (( senha == "arroz") || (login == "gab" && senha == "arroz") ) {
        localStorage.setItem("usuarioLogado", login)
        return true;
    }
    return false;
};

const apresentaMensagemErro = () => {
    alert("Não foi possível realizar o Login");
}

const realizarLogin = () => {
    const login = elementoLogin.value;
    const senha = elementoSenha.value;
    console.log(login,senha)
    if (verificarLogin(login, senha)){
        window.location.assign("./views/home.html");
    }else {
        apresentaMensagemErro();
    }

}