criptografado =""
function processo(char/*event*/){
    /*event = event || window.event;
    var char = String.fromCharCode(event.keyCode || event.which);*/
    if(char=="e"){
        criptografado+="enter";
    }else if(char=="i"){
        criptografado+="imes";
    }else if(char=="a"){
        criptografado+="ai";
    }else if(char=="o"){
        criptografado+="ober";
    }else if(char=="u"){
        criptografado+="ufat";
    }else{
        criptografado+=char
    }
    document.getElementById("resultado").style.display="none"
}

function criptografarTudo(){
    criptografado="";
    valores=document.getElementById("textoArea").value
    for(cont=0;cont<valores.length;cont++){
        letra = valores[cont]
        processo(letra)
    }
}

function criptografar(){
    criptografarTudo()
    document.getElementById("resultadoP").innerHTML=criptografado;
    document.getElementById("informacao").style.display="none";
    document.getElementById("resultado").style.display="block"
    
}

function copiar(){
    var texto = document.getElementById("resultadoP").innerHTML;
    var dummy = document.createElement("textarea");
    dummy.value= texto
    document.body.appendChild(dummy);
    dummy.select();
    document.execCommand("copy")
    document.body.removeChild(dummy)
}