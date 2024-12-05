alert('boas vindas ao jogo do número secreto'); // alert == print 
let num = prompt('digite o número limite da brincadeira: ');
let numeroSecreto = parseInt(Math.random() * num + 1); // let é usado para definir uma variavel, perseint serve so pra pegar o primeiro número, Math.random() pra randomizar o numero 
console.log(`número secreto: ${numeroSecreto}`) //serve para imprimir mensagens no console do navegador 
let numeroUsuario;
let tentativas = 1;
// && = and, || == or, ! == valor de negação exp: !(a == b) verdadeiro se a não for igual a b 
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt(`escolha um número entre 1 e ${num}`); // prompt == input 
    if (numeroSecreto == numeroUsuario) {
        break;
    }
    else {
        if (numeroSecreto > numeroUsuario) {
        alert(`o número secreto é maior que  ${numeroUsuario}`);
        } else {
            alert(`o número secreto é menor que  ${numeroUsuario}`);
        }
        tentativas++ // tentativas + 1 
    }
}
let palavraTentativa =  tentativas > 1 ? 'tentativas' : 'tentativa'; // operador ternário 
alert(`você acertou o número ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

// if (tentativas > 1) {
    // alert(`você acertou o número ${numeroSecreto} com ${tentativas} tentativas`); // para fazer um print formatado e necesario usar ´` e ${} 
// } else {
    // alert(`você acertou o número ${numeroSecreto} com ${tentativas} tentativa`); 
// }

