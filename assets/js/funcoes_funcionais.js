const vetorProduto =
[
    {
        "produto": "Produto 01",
        "preco": 3.65,
        "descricao": "Lorem ipsum",
        "em_estoque": true,
        "img": "assets/imgs/img0001.jpg"
    },
    {
        "produto": "Produto 02",
        "preco": 100,
        "descricao": "Lorem ipsum",
        "em_estoque": false,
        "img": "assets/imgs/img0002.jpg"
    },
    {
        "produto": "Produto 03",
        "preco": 100123,
        "descricao": "Lorem ipsum",
        "em_estoque": true,
        "img": "assets/imgs/img0003.jpg"
    }
];

const divListaProdutos = document.getElementById("lista-produtos");

const exibirProdutos = (vetor) =>{
    divListaProdutos.innerHTML = "";
    for (let elemento of vetor) {
        const divProduto = `
            <div class="produto">
            <h1>${elemento.produto}</h1>
            <p>${elemento.descricao}</p>
            <h5>R$ ${elemento.preco}</h5>
            </div>
        `

        divListaProdutos.innerHTML += divProduto;
    }
}

exibirProdutos(vetorProduto);

estadoFiltroEstoque = false;

const btnFiltrarApenasEstoque = document.getElementById("filtro01")
btnFiltrarApenasEstoque.onclick = () =>{
    estadoFiltroEstoque = !estadoFiltroEstoque;
    if (estadoFiltroEstoque){
    const filtro = vetorProduto.filter((element) => {
        return element.em_estoque === true
    })
    exibirProdutos(filtro);
    btnFiltrarApenasEstoque.innerText= "Remover Filtro"
    } else {
        exibirProdutos(vetorProduto);
        btnFiltrarApenasEstoque.innerText= "Adicionar Filtro"
    }
}

const somaPrecos = (totalizador, elemento) => {
    return totalizador  + elemento.preco
}

const divTirarMedia = document.getElementById("media2")
const btnTirarMedia = () => { 
    let media = vetorProduto.reduce(somaPrecos, 0);
    divTirarMedia.innerHTML = `
    <div id="media2">
    <button type="button" id="btnTirarMedia">Média</button> ${media / vetorProduto.length}
    </div>
    `;
}

estadoFiltroDolar = false;

const btnDolar = () => {
    if (!estadoFiltroDolar){
        const produtos_em_dolar = vetorProduto.map((elemento) => {
            elemento.preco = elemento.preco * 5.43;
            return elemento;
        })
        exibirProdutos(produtos_em_dolar);
        estadoFiltroDolar = !estadoFiltroDolar;
        btnTirarMedia.on
    } else {
        const produtos_em_dolar = vetorProduto.map((elemento) => {
            elemento.preco = elemento.preco / 5.43;
            return elemento;
        })
        exibirProdutos(produtos_em_dolar);
        estadoFiltroDolar = !estadoFiltroDolar;
    }
    
}

/*
    filter, map, reduce
*/

// const produtos_em_estoque = vetorProduto.filter((element) => {
//     return element.em_estoque === true;
// });

// console.log(produtos_em_estoque);

// const produtos_em_dolar = vetorProduto.map((elemento) => {
//     elemento.preco = elemento.preco * 5.43;
//     return elemento.produto;
// })

// console.log(produtos_em_dolar)

// const somaPrecos = (totalizador, elemento) => {
//     return totalizador  + elemento.preco
// }

// const media_preco = vetorProduto.reduce(somaPrecos, 0)

// console.log(media_preco);


