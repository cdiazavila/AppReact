import React, { Fragment,useState } from 'react';
import Pregunta1  from './Pregunta1';
import Pregunta2  from './Pregunta2';
import Pregunta3  from './Pregunta3';
function Container(props){
  const [contador, guardarContador]  = useState(1);

    
      let pregunta,pregunta2,pregunta3,Ocultar;
   // en esta parte capturamos las veces que el usuario da clik 
   const siguiente =()=>{
     guardarContador(contador+1);
    
   }
     
   const anterior =()=>{
    guardarContador(contador-1);
  }
  
  //en esta parte mostramos las preguntas 1 por 1 
   if(contador===1){
   
   pregunta=<Pregunta1 mostrarocultar="d-md-block" />
   pregunta2=<Pregunta2 mostrarocultar="d-md-none"/>
   pregunta3=<Pregunta3 mostrarocultar="d-md-none"/>
   Ocultar="d-md-none";
   
   }else  if(contador===2){
 
    pregunta=<Pregunta1 mostrarocultar="d-md-none" />
    pregunta2=<Pregunta2 mostrarocultar="d-md-block"/>
    pregunta3=<Pregunta3 mostrarocultar="d-md-none"/>
  
   }else if(contador===3){
    pregunta=<Pregunta1 mostrarocultar="d-md-none" />
    pregunta2=<Pregunta2 mostrarocultar="d-md-none"/>
    pregunta3=<Pregunta3 mostrarocultar="d-md-block"/>
   }
   //obtenemos el numero de preguntas realizanas y se las mandamos a la  App.js 
   props.obtenercontador(contador);

    let clase=`${Ocultar} btn`;
    return(

       <Fragment>
          {pregunta}
          {pregunta2}
          {pregunta3}

         <di className="botones">

           <button type="button" onClick={anterior} id="btn-ante" className={clase} >Anterior</button>
           <button type="button" onClick={siguiente} id="btn-sig" className="btn">Siguiente</button>
         
         </di>
       </Fragment>

    )
}
export default Container;