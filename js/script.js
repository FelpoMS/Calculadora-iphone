function expressao(parametro){
    document.getElementById('tela').value +=parametro;
    console.log(parametro);
}

function resultado(){
    //EVAL()
    try{
        let expressao=document.getElementById('tela').value;
        let resultado = eval(expressao);
        document.getElementById('tela').value = resultado;
    }catch(error){

    }
}

function limpar(){
    document.getElementById('tela').value = '';
}