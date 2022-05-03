//document.getElementById("botaoEnviar").addEventListener("click", validaForm)
//
//function validaForm(){
    //if(document.getElementById("nameUser").value != "" && document.getElementById("emailUser").value != "" && document.getElementById("numberUser").value != ""){
        //alert("Prontinho! Você receberá as novidades por email :)") 
    //}else{
        //alert("Ops! Parece que você esqueceu de preencher algum campo :(")
    //}
//}

// Desafio:
// Quando o usuário digitar o nome errado, você irá exibir uma mensagem em vermelho abaixo do campo do input. CSS
// como fazer isso:
// Primiero crie um label com um texto explicando que o valor não deve ser vazio, pocicionado abaixo do input do nome, assim que tiver posicionado corretamente, coloque um atributo nele: hidden=true DONE
// Altere o if da função para testar se o valor digitado no campo do nome está vazio, se sim, vc deverá remover a propriedade hidden deste elemento DONE

// Desafios extras:
// 1. Fazer com que o texto suma quando o usuário clica no enviar com o nome preenchido
// 2. Replicar estrutura pra os outros campos
// 3. Fazer a validação do desafio extra 1, assim que o usuário digitar algo no campo que estava vazio

//document.getElementById("nameUser").addEventListener("change", elementName)

//function elementName(){
    //if (document.getElementById("nameUser").value != ""){
        //let alertUser = document.getElementById("alertUser");
        //alertUser.setAttribute("hidden", true);
    //}
//}

//document.getElementById("botaoEnviar").addEventListener("click", validaForm)

//function validaForm(e){
    //if (document.getElementById("nameUser").value == ""){
        //e.preventDefault();
        //let alertUser = document.getElementById("alertUser");
        //alertUser.removeAttribute("hidden");
    //}  
//}

//
function generateRainbowText(element) {
    var text = element.innerText;
    element.innerHTML = "";
    for (let i = 0; i < text.length; i++) {
      let charElem = document.createElement("span");
      charElem.style.color = "hsl(" + (360 * i / text.length) + ",80%,50%)";
      charElem.innerHTML = text[i];
      element.appendChild(charElem);
    }
  }

document.getElementById("nameUser").addEventListener("change", () => {
    if (document.getElementById("nameUser").value != ""){
        let alertUser = document.getElementById("alertUser");
        alertUser.setAttribute("hidden", true);
    }
})

document.getElementById("botaoEnviar").addEventListener("click", (e) => {
    e.preventDefault();
    if (document.getElementById("nameUser").value == ""){
        let alertUser = document.getElementById("alertUser");
        alertUser.removeAttribute("hidden");
    }else{
        let mq = document.createElement("marquee");
        let sucesso = document.createElement("label");
        sucesso.innerText = "SUCESSO!";
        generateRainbowText(sucesso);
        mq.appendChild(sucesso);
        document.querySelector('#sucesso').appendChild(mq);
    }
})