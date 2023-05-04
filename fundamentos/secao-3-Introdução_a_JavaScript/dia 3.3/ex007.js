let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function removeCliente(cliente) {
    let clienteEncontrado = false;
    if (typeof cliente === 'string'){
      for(let index = 0; index < clientesTrybeBank.length; index += 1){
       if(cliente === clientesTrybeBank{index}) {
        clientesTrybeBank.splice(index, 1);
        clienteEncontrado = true;
        return 'cliente excluido com sucesso.';
       }
      }
      if (clienteEncontrado === false){
        return 'cliente nao encontrado'
      }
    } else {
        return 'o parametro passado deve ser do tipo "string"'
    }

}

console.log(removeCliente(false));
console.log(removeCliente(lucas));
console.log(removeCliente(Ada));
console.log(clientesTrybeBank);