let saldo =100;

function somaSaldo (valor) {
    return saldo + valor;
};
 function subtraiSaldo (valor) {
    return saldo - valor;
 };
  function multiplicaSaldo (valor) {
    return saldo * valor;
  };
  function divideSaldo (valor) {
    return saldo / valor;
  };

  console.log(somaSaldo(100));
  console.log(subtraiSaldo(50));
  console.log(multiplicaSaldo(5));
  console.log(divideSaldo(2));