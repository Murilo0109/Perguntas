function corrigir(){
    let resposta1 = window.document.querySelector(
        'input[name="pergunta1"]:checked'
    );

    let resutado1 = window.document.getElementById("resutado1");

    if(resposta1 == null){
        resutado1.innerText = "escolha uma resposta!"
    }
    else if (resposta1.value === "html"){
        resutado1.innerText = "Você Acertou"
    }
    else{
        resutado1.innerText = "Você Errou"
    }



    let resposta2 = window.document.querySelector(
        'input[name = "pergunta2"]'
    );

    let resutado2 = window.document.getElementById("resutado2");

    if(resposta2 == null){
        resutado2.innerText = "digite uma resposta!"
    }
    else if (resposta2.value.toLowerCase() ==="css"){
        resutado2.innerText = "Você Acertou "
    }
    else{
        resutado2.innerText = "Você Errou"
    }



    let resposta3 = window.document.querySelector(
        'input[name="pergunta3"]:checked'
    );

    let resutado3 = window.document.getElementById("resutado3");

    if(resposta3 == null){
        resutado3.innerText = "Escolha uma resposta!"
    }
    else if(resposta3.value == "JavaScript"){
        resutado3.innerText = "Você Acertou"
    }
    else{
        resutado3.innerText = "Você Errou"
    }


    let resposta4 = window.document.querySelector(
        'input[name = "pergunta4"]'
    )
    let resutado4 = window.document.getElementById("resutado4");

    if(resposta4 == null){
        resutado4.innerText = "digite uma pergunta"
    }
    else if(resposta4.value.toLowerCase() === "button"){
        resutado4.innerText = "Você Acertou";
    }
    else{
        resutado4.innerText = "Você Errou";
    }



    let resposta5 = window.document.querySelector(
        'input[name = "pergunta5"]:checked'
    )
    let resutado5 = window.document.getElementById("resutado5");

    if(resposta5 == null){
        resutado5.innerText = "Escolha uma resposta"
    }
    else if(resposta5.value === "a"){
        resutado5.innerText = "Você Acertou"
    }
    else{
        resutado5.innerText = "Você Errou"

    }


    let resposta6 = window.document.querySelector(
        'input[name = "pergunta6"]:checked'
    )
    let resutado6 = window.document.getElementById("resutado6");
    if(resposta6 == null){
        resutado6.innerText = "Escolha uma resposta"
    }
    else if(resposta6.value === "alert()"){
        resutado6.innerText = "Você Acertou"
    }
    else{
        resutado6.innerText = "Você Errou"
    }


    let resposta7 = window.document.querySelector(
        'input[name = "pergunta7"]:checked'
    )
    let resutado7 = window.document.getElementById("resutado7");
    if(resposta7 == null){
        resutado7.innerText = "Escolha uma resposta"
    }
    else if (resposta7.value === "let"){
        resutado7.innerText = "Você Acertou"
    }
    else{
        resutado7.innerText = "Você Errou"
    }



    let resposta8 = window.document.querySelector(
        'input[name = "pergunta8"]:checked'
    )
    let resutado8 = window.document.getElementById("resutado8");
    if(resposta8 == null){
        resutado8.innerText = "Escolha uma resposta"
    }
    else if(resposta8.value === "onclick"){
        resutado8.innerText = "Você Acertou"
    }
    else{
        resutado8.innerText = "Você Errou"
    }



    let resposta9 = window.document.querySelector(
        'input[name = "pergunta9"]:checked'
    )
    let resutado9 = window.document.getElementById("resutado9");
    if(resposta9 == null){
        resutado9.innerText = "Escolha uma resposta"
    }
    else if(resposta9.value === "Nas duas formas"){
        resutado9.innerText = "Você Acertou"
    }
    else{
        resutado9.innerText = "Você Errou"
    }


    let resposta10 = window.document.querySelector(
        'input[name = "pergunta10"]:checked'
    )
    let resutado10 = window.document.getElementById("resutado10");
    if(resposta10 == null){
        resutado10.innerText = "Escolha uma resposta"
    }
    else if(resposta10.value === "function minhaFuncao() {}"){
        resutado10.innerText = "Você Acertou"
    }
    else{
        resutado10.innerText = "Você Errou"
    }



let Acertou = 0;

if(resutado1.innerText === "Você Acertou"){
    Acertou++;
}

if(resutado2.innerText === "Você Acertou"){
    Acertou++;
}

if(resutado3.innerText === "Você Acertou"){
    Acertou++;
}

if(resutado4.innerText === "Você Acertou"){
    Acertou++;
}

if(resutado5.innerText === "Você Acertou"){
    Acertou++;
}

if(resutado6.innerText === "Você Acertou"){
    Acertou++;
}

if(resutado7.innerText === "Você Acertou"){
    Acertou++;
}

if(resutado8.innerText === "Você Acertou"){
    Acertou++;
}

if(resutado9.innerText === "Você Acertou"){
    Acertou++;
}

if(resutado10.innerText === "Você Acertou"){
    Acertou++;
}

let total = window.document.getElementById("total");

   
    if(Acertou >= 5){
        total.innerText += " Parabéns, você passou!"
    }
    else{
        total.innerText += "Você precisa estudar mais um pouco!"
    }

}

