//Desafio 2
var player = "Lucas Kenobi"
var rankPlayer = ""
let resultado = rankiado(100, 57)

function rankiado(saldoVitorias, saldoDerrotas){
    let resultado = saldoVitorias - saldoDerrotas
    return resultado 
}  

if (resultado < 10){
    rankPlayer = "Ferro"
}if (resultado >= 11 && resultado <= 20){
    rankPlayer = "Bronze"
}if (resultado >= 21 && resultado <= 50){
    rankPlayer = "Prata"
}if (resultado >= 51 && resultado <= 80){
    rankPlayer = "Ouro"
}if (resultado >= 81 && resultado <= 90){
    rankPlayer = "Diamante"
}if (resultado >= 91 && resultado <= 100){
    rankPlayer = "Lendário"
}if (resultado >= 101){
    rankPlayer = "Imortal"
}
console.log("O herói " + player + " tem saldo de " + resultado + " vitórias, o que o coloca na posição " + rankPlayer + " do ranking geral!")
