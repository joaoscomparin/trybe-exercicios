let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function adicionaCliente(cliente) {
    if (typeof cliente === 'string'){
      clientesTrybeBank.push(cliente) 
    } else {
    return 'o parametro de ser uma "string"';
 }
}

console.log(adicionaCliente(true));
console.log(adicionaCliente('joao'));
console.log(clientesTrybeBank);