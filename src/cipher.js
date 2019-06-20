window.cipher = {
   encode: (offset,string) =>
   
   //Enunciamos la variable vacía que contendrá la palabra que ingrese el usuario//
    let newText='';
   
   //Convertimos cadena de texto a mayúsculas
   string = string.toUppercase();
   
   //Creamos bucle "For", iniciando en cero y sentenciando que aumente de uno en uno
     for(let i= 0;i<string.lenght;i++);{
     
    //Declaramos la constante que va a convertir las letras en mayúsculas en nuestrop programa
       const asciiCode = string[i].charCodeAt();
     
     //Aplicamos la fórmula 
     const modele=(asciiCode-65+offset)%26+65;
    
     //Para obtener caracter o letra del texto quye se ingrese
     const caracter=String.fromcharCodeAt (modele)
     
     //Declaramos la constante que nos arrojará l palabra convertida en código ASCII y mayúsculas
       newText= newText + caracter
     }

     return newText
    

//Funciones para descifrar*/