const livros = require ("./lista-livros");

function maisBarato (arrProduto, posicaoInicial) {
let maisBarato =0;

    for (let atual =0; atual < livros.length; atual++) {
        if (arrProduto[atual].preco < arrProduto[maisBarato].preco) {
        maisBarato = atual
        }
    }
}
console.log (`O livro mais barato é ${arrProduto[maisBarato].titulo} e custa ${arrProduto[maisBarato].preco}`);


module.exports = menorValor;


