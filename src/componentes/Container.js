import React, { Fragment,useState } from 'react';
import Pregunta1  from './Pregunta1';
import Pregunta2  from './Pregunta2';
import Pregunta3  from './Pregunta3';
import Nota       from './Nota';
function Container(props){
  const [contador, guardarContador]  = useState(1);
  // para la pregunta 1 
  const [respusta1, guardarRespuesta1] = useState(0);
  const [color1, guardarcolor1] = useState('');
  const [mensaje1, guardarmensaje1] = useState('');
  //para la pregunta 2
  const [respuesta2, guardarRespuesta2] = useState(0);
  const [color2, guardarcolor2] = useState('');
  const [mensaje2, guardarmensaje2] = useState('');
  //para la pregunta 3
  const [respuesta3, guardarRespuesta3] = useState(0);
  const [color3, guardarcolor3] = useState('');
  const [mensaje3, guardarmensaje3] = useState('');
  // resultados de las nota 
  const [nota, guardarNota] = useState(0);
  
    
      let pregunta,pregunta2,pregunta3,Ocultar,NotaMostra,OcultarBntFin,ocultarBntSig;
      OcultarBntFin="d-md-none";
   // en esta parte capturamos las veces que el usuario da clik 
   const siguiente =()=>{
     guardarContador(contador+1);
    
   }
     
   const anterior =()=>{
    guardarContador(contador-1);
  }

  const terminar=()=>{
    guardarContador(4);
    let definitiva= respusta1+respuesta2+respuesta3;
    guardarNota(definitiva);
  }
    
  //en esta parte mostramos las preguntas 1 por 1 
   if(contador===1){
   
   pregunta=<Pregunta1 mostrarocultar="d-md-block" respusta1={respusta1} guardarRespuesta1={guardarRespuesta1} guardarmensaje1={guardarmensaje1} guardarcolor1={guardarcolor1}/>
   pregunta2=<Pregunta2 mostrarocultar="d-md-none"/>
   pregunta3=<Pregunta3 mostrarocultar="d-md-none"/>
   Ocultar="d-md-none";
   
   
   }else  if(contador===2){
 
    pregunta=<Pregunta1 mostrarocultar="d-md-none" />
    pregunta2=<Pregunta2 mostrarocultar="d-md-block" respuesta2={respuesta2} guardarRespuesta2={guardarRespuesta2} guardarmensaje2={guardarmensaje2} guardarcolor2={guardarcolor2}/>
    pregunta3=<Pregunta3 mostrarocultar="d-md-none"/>
  
   }else if(contador===3){
    pregunta=<Pregunta1 mostrarocultar="d-md-none" />
    pregunta2=<Pregunta2 mostrarocultar="d-md-none"/>
    pregunta3=<Pregunta3 mostrarocultar="d-md-block" respuesta3={respuesta3} guardarRespuesta3={guardarRespuesta3} guardarmensaje3={guardarmensaje3} guardarcolor3={guardarcolor3}/>
    OcultarBntFin="d-md-block";
   
   }else if(contador===4){
    
    pregunta=<Pregunta1 mostrarocultar= "d-md-block" clasesLabel="bg-success" mensaje1={mensaje1} color1={color1}/>
    pregunta2=<Pregunta2 mostrarocultar="d-md-block" clasesLabel="bg-success" mensaje2={mensaje2} color2={color2}/>
    pregunta3=<Pregunta3 mostrarocultar="d-md-block" clasesLabel="bg-success" mensaje3={mensaje3} color3={color3}/>
    NotaMostra = <Nota nota={nota}/>
    Ocultar="d-md-none";
    ocultarBntSig="d-md-none";
   
   }
   //obtenemos el numero de preguntas realizanas y se las mandamos a la  App.js 
   props.obtenercontador(contador);

  
   
  

    let clase=`${Ocultar} btn`;
    let clase2=`${OcultarBntFin} btn`;
    let clase3=`${ocultarBntSig} btn`;
    return(

       <Fragment>
          {NotaMostra}
          {pregunta}
          {pregunta2}
          {pregunta3}
          
         <di className="botones">

           <button type="button" onClick={anterior} id="btn-ante" className={clase} >Anterior</button>
           <button type="button" onClick={siguiente} id="btn-sig" className={clase3}>Siguiente</button>
           <button type="button" onClick={terminar} id="btn-sig" className={clase2}>terminar</button>
         
         </di>
       </Fragment>

    )
}
export default Container;