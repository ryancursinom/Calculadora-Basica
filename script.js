//variaveis
let operacao = "";

//cleaner
function cleaner(){
    operacao = "";
    document.getElementById("visor").innerHTML = "";
}

//mostrarElemento
function mostrarElemento(id){
    let valor = document.getElementById(id).value;
    operacao += valor;
    document.getElementById("visor").innerHTML = operacao;
}

//resultado
function mostrarResultado(){
    try{
        document.getElementById("visor").innerHTML = eval(operacao);""
        operacao = "";
    } catch(EvalError){
        document.getElementById("visor").innerHTML = "ERRO";
        operacao = "";
    }
}