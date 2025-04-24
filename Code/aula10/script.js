// Calcula a área do retângulo
//let largura = 5;
//let altura = 10;
//let area = largura * altura;
//document.getElementById("area1").innerHTML = area;


/* Exemplo com função
let largura = 5;
let altura = 10;
function calcularArea(largura, altura) {
    
    return largura * altura;
}
document.getElementById("area1").innerHTML = calcularArea(largura, altura);  

// Imprimindo no Console
console.log("Área: " + calcularArea(largura, altura));
*/

/* Definindo Tipos de Variáveis
nome = "João Silva";
let msg = "Olá, " + nome + "! Bem-vindo!";
document.getElementById("mensagem").innerHTML = msg;
*/

// Exemplo com função
let baseMaior = 5;
let baseMenor = 10;
let altura = 10;
function calcularArea(baseMaior, baseMenor) {
    
    area = ((baseMaior + baseMenor) * altura)/2;   
    return area;
}
document.getElementById("area1").innerHTML = calcularArea(baseMaior, baseMenor);  
document.getElementById("area2").innerHTML = altura; 
// Imprimindo no Console
console.log("Área: " + calcularArea(baseMaior, baseMenor));