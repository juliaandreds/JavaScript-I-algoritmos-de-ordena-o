//verificar o nome do livro de menor preço.
const livros = [
    {
        nome: "JavaScript",
        preco: 150,
    },
    {
        nome: "Python",
        preco: 100,
    },
    {
        nome: "Java",
        preco: 90,
    },
    {
        nome: "Angular",
        preco: 65,
    },
    {
        nome: "NodeJS",
        preco: 250,
    },
    {
        nome: "C++",
        preco: 70,
    },
]

/* console.log(livros.length);
console.log(livros[0].preco); */

let maisBarato =0;
let atual=0;

for (let atual =0; atual<livros.length; atual++) {
    if (livros[atual].preco < livros[maisBarato].preco ) {
        maisBarato = atual;
    }

}

console.log (`O livro mais barato é: ${livros[maisBarato].nome}`);















