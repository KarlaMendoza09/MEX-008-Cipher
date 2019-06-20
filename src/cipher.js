window.cipher = {
   encode: (offset,string) =>{

  let newText=0;
  
  //Declaramos nuestra variable vacía para que el usuario agregue sus datos
  let textModificado= '';
  
  //Realizamos un bucle FOR para que se cifre desde cero
   for (let i=0; i < string.lenght; i++)

  //Después de cambiar la letra, vamos a aplicar código ASCII
  const asciiCode= string.charCodeAt (i);
    
  
  if (asciiCode >=65 && asciiCode <=90)
   
   
newText= (asciiCode-65+offset)%26 + 65;

//
  else if (asciiCode >= 97 && asciiCode <=122)

  newText= asciiCode;
 //Convertirtiendo el número a través de ASCII a letra
 textModificado= string.fromCharcode(newText); 
   }
 return newText
 



   