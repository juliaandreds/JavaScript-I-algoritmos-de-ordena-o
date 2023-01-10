const precos = [9, 10, 15, 5, 4, 20, 2];

let maisCaro = 0;


for (let atual = 0; atual<precoLivros.length; atual++) {
    if (precoLivros[atual] > precoLivros [maisCaro]) {
        maisCaro = atual;
    }
}

console.log (`O livro mais caro é: ${precoLivros[maisCaro]}`);




