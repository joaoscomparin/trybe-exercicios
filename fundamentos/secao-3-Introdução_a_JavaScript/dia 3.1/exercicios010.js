let custoDoProduto = 1;
let valorDeVenda = 3;

if (custoDoProduto >= 0 && valorDeVenda >= 0) {
    let totalCustoProduto = custoDoProduto *1.2;
    let lucroTotal = (valorDeVenda - totalCustoProduto) * 1000;
    console.log(lucroTotal);
} else {
    console.log('erro, os valores nao podem ser negativos');
}