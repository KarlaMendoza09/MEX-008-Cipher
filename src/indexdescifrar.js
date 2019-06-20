//Llamamos Id de descifrar, uno por cada sección 
const encode=document.getElementById("txtDecode");
const offset=document.getElementById("offsetDecode")
const botonEncode=document.getElementById("botonDescifrar")
const encodeText=document.getElementById("decodeResult")


//Atribuimos eventos del DOM al botón DESCIFRAR y ordenamos que se efectúe nuestro método Y BUCLE

botonDescifrar.addEventListener("click"), => {
textDecode.value=window.cipher.decode (offset.value), decode.value