let peça1 = 'bispo';

switch (peça1.toLowerCase()) {
    case 'rei':
      console.log('rei -> uma casa apenas para qualquer direção');
    break;
    case 'bispo':
      console.log('bispo -> diagonal');
    break;
    case 'rainha':
      console.log('rainha -> diagonal, horizontal, vertical');
    break;
    case 'cavalo':
      console.log('cavalo -> "L" pode pular sobre as peças'); 
    break;
    case 'torre':
      console.log('torre -> horizontal e vertical');
    break;
    case 'peao':
      console.log('peao -> apenas uma casa para frente, no primeiro movimento podem ser duas casas');
    break;
    default:
        console.log('erro, peça invalida');
};