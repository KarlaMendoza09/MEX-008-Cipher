//Llamamos Id de cifrar, uno por cada sección 
  const encode=document.getElementById("txtCifrar");
  const offset=document.getElementById("numOffset");
  const botonEncode=document.getElementById("botonCifrar");
  const encodeText=document.getElementById("resultText");


//Atribuimos eventos del DOM al botón CIFRAR y ordenamos que se efectúe nuestro método

  botonEncode.addEventListener("click" , (e) => {
  e.preventDefault();
  }
    encodeText.value=window.cipher.encode (offset.value), encode.value
})l
 