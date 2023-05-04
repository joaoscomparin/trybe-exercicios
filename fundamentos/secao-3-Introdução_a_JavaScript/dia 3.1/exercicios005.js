let angulo01 = 40;
let angulo02 = 90;
let angulo03 = 50;

let somaDosAgulos = angulo01 + angulo02 + angulo03;
let angulosPositivos = angulo01 > 0 && angulo02 > 0 && angulo03 > 0;

if (angulosPositivos){
    if (somaDosAgulos ===180){
        console.log(true);
    } else {console.log(false);
    };
} else {
    console.log('erro');
}
