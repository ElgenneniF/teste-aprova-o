
//definindo as variaveis com numeros "aleatorios", sendo elas respectivamente a prova1, a prova2 e a media

var p1 = (getRandomInt(11));
var p2 = (getRandomInt(11));
var m = p1 + p2;

//confere se o aluno passou. 
if (m/2 >= 7) {
console.log ("passou", "sua nota foi", m/2)
}
else {
console.log ("reprovou", "sua nota foi", m/2)
};
