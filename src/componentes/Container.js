import React, { Fragment,useState } from 'react';
import Pregunta1  from './Pregunta1';
import Pregunta2  from './Pregunta2';
import Pregunta3  from './Pregunta3';
import Pregunta4  from './Pregunta4';
import Pregunta5  from './Pregunta5';
import Pregunta6  from './Pregunta6';
import Pregunta7  from './Pregunta7';
import Pregunta8  from './Pregunta8';
import Pregunta9  from './Pregunta9';
import Pregunta10  from './Pregunta10';
import Nota       from './Nota';
import Panel      from './Panel';

function Container(props){
  const [contador, guardarContador]  = useState(1);
  const [mensaje, guardarMensaje] = useState('');
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

   //para la pregunta 4
   const [respuesta4, guardarRespuesta4] = useState(0);
   const [color4, guardarcolor4] = useState('');
   const [mensaje4, guardarmensaje4] = useState('');

   //para la pregunta 5
   const [respuesta5, guardarRespuesta5] = useState(0);
   const [color5, guardarcolor5] = useState('');
   const [mensaje5, guardarmensaje5] = useState('');
   //para la pregunta 6
   const [respuesta6, guardarRespuesta6] = useState(0);
   const [color6, guardarcolor6] = useState('');
   const [mensaje6, guardarmensaje6] = useState('');
    //para la pregunta 7
   const [respuesta7, guardarRespuesta7] = useState(0);
   const [color7, guardarcolor7] = useState('');
   const [mensaje7, guardarmensaje7] = useState('');
   //para la pregunta 8
   const [respuesta8, guardarRespuesta8] = useState(0);
   const [color8, guardarcolor8] = useState('');
   const [mensaje8, guardarmensaje8] = useState('');
   //para la pregunta 9
   const [respuesta9, guardarRespuesta9] = useState(0);
   const [color9, guardarcolor9] = useState('');
   const [mensaje9, guardarmensaje9] = useState('');
   //para la pregunta 10
   const [respuesta10, guardarRespuesta10] = useState(0);
   const [color10, guardarcolor10] = useState('');
   const [mensaje10, guardarmensaje10] = useState('');
  // resultados de las nota 
  const [nota, guardarNota] = useState(0);
  
    
    let pregunta,pregunta2,pregunta3, pregunta4,pregunta5,pregunta6,pregunta7,pregunta8,pregunta9
      ,pregunta10,Ocultar,NotaMostra,OcultarBntFin,ocultarBntSig,ocultarPanel;
      OcultarBntFin="d-md-none";
   // en esta parte capturamos las veces que el usuario da clik 
   const siguiente =()=>{
     guardarContador(contador+1);
    
   }
     
   const anterior =()=>{
    guardarContador(contador-1);
   }

  const terminar=()=>{
    guardarContador(11);
    let definitiva= respusta1+respuesta2+respuesta3+respuesta4+respuesta5+respuesta6+
    respuesta7+respuesta8+respuesta9+respuesta10;
    guardarNota(definitiva);
   }
    
  //en esta parte mostramos las preguntas 1 por 1 
   if(contador===1){
   
   pregunta=<Pregunta1 mostrarocultar="d-md-block" respusta1={respusta1} guardarRespuesta1={guardarRespuesta1} guardarmensaje1={guardarmensaje1} guardarcolor1={guardarcolor1}/>
   pregunta2=<Pregunta2 mostrarocultar="d-md-none"/>
   pregunta3=<Pregunta3 mostrarocultar="d-md-none"/>
   pregunta4=<Pregunta4 mostrarocultar="d-md-none"/>
   pregunta5=<Pregunta5 mostrarocultar="d-md-none"/>
   pregunta6=<Pregunta6 mostrarocultar="d-md-none"/>
   pregunta7=<Pregunta7 mostrarocultar="d-md-none"/>
   pregunta8=<Pregunta8 mostrarocultar="d-md-none"/>
   pregunta9=<Pregunta9 mostrarocultar="d-md-none"/>
   pregunta10=<Pregunta10 mostrarocultar="d-md-none"/>
   Ocultar="d-md-none";
   
   
   }else  if(contador===2){
 
    pregunta=<Pregunta1 mostrarocultar="d-md-none" />
    pregunta2=<Pregunta2 mostrarocultar="d-md-block" respuesta2={respuesta2} guardarRespuesta2={guardarRespuesta2} guardarmensaje2={guardarmensaje2} guardarcolor2={guardarcolor2}/>
    pregunta3=<Pregunta3 mostrarocultar="d-md-none"/>
    pregunta4=<Pregunta4 mostrarocultar="d-md-none"/>
    pregunta5=<Pregunta5 mostrarocultar="d-md-none"/>
    pregunta6=<Pregunta6 mostrarocultar="d-md-none"/>
    pregunta7=<Pregunta7 mostrarocultar="d-md-none"/>
    pregunta8=<Pregunta8 mostrarocultar="d-md-none"/>
    pregunta9=<Pregunta9 mostrarocultar="d-md-none"/>
    pregunta10=<Pregunta10 mostrarocultar="d-md-none"/>
  
   }else if(contador===3){
    pregunta=<Pregunta1 mostrarocultar="d-md-none" />
    pregunta2=<Pregunta2 mostrarocultar="d-md-none"/>
    pregunta3=<Pregunta3 mostrarocultar="d-md-block" respuesta3={respuesta3} guardarRespuesta3={guardarRespuesta3} guardarmensaje3={guardarmensaje3} guardarcolor3={guardarcolor3}/>
    pregunta4=<Pregunta4 mostrarocultar="d-md-none"/>
    pregunta5=<Pregunta5 mostrarocultar="d-md-none"/>
    pregunta6=<Pregunta6 mostrarocultar="d-md-none"/>
    pregunta7=<Pregunta7 mostrarocultar="d-md-none"/>
    pregunta8=<Pregunta8 mostrarocultar="d-md-none"/>
    pregunta9=<Pregunta9 mostrarocultar="d-md-none"/>
    pregunta10=<Pregunta10 mostrarocultar="d-md-none"/>
  
   
   }else if(contador===4){
    pregunta=<Pregunta1 mostrarocultar="d-md-none" />
    pregunta2=<Pregunta2 mostrarocultar="d-md-none"/>
    pregunta3=<Pregunta3 mostrarocultar="d-md-none"/>
    pregunta4=<Pregunta4 mostrarocultar="d-md-block" respuesta4={respuesta4} guardarRespuesta4={guardarRespuesta4} guardarmensaje4={guardarmensaje4} guardarcolor4={guardarcolor4} />
    pregunta5=<Pregunta5 mostrarocultar="d-md-none"/>
    pregunta6=<Pregunta6 mostrarocultar="d-md-none"/>
    pregunta7=<Pregunta7 mostrarocultar="d-md-none"/>
    pregunta8=<Pregunta8 mostrarocultar="d-md-none"/>
    pregunta9=<Pregunta9 mostrarocultar="d-md-none"/>
    pregunta10=<Pregunta10 mostrarocultar="d-md-none"/>
   
   }else if(contador===5){
    pregunta=<Pregunta1 mostrarocultar="d-md-none" />
    pregunta2=<Pregunta2 mostrarocultar="d-md-none"/>
    pregunta3=<Pregunta3 mostrarocultar="d-md-none"/>
    pregunta4=<Pregunta4 mostrarocultar="d-md-none"/>
    pregunta5=<Pregunta5 mostrarocultar="d-md-block" respuesta5={respuesta5} guardarRespuesta5={guardarRespuesta5} guardarmensaje5={guardarmensaje5} guardarcolor5={guardarcolor5}/>
    pregunta6=<Pregunta6 mostrarocultar="d-md-none"/>
    pregunta7=<Pregunta7 mostrarocultar="d-md-none"/>
    pregunta8=<Pregunta8 mostrarocultar="d-md-none"/>
    pregunta9=<Pregunta9 mostrarocultar="d-md-none"/>
    pregunta10=<Pregunta10 mostrarocultar="d-md-none"/>
  }else if(contador===6 ){
    pregunta=<Pregunta1 mostrarocultar="d-md-none" />
    pregunta2=<Pregunta2 mostrarocultar="d-md-none"/>
    pregunta3=<Pregunta3 mostrarocultar="d-md-none"/>
    pregunta4=<Pregunta4 mostrarocultar="d-md-none"/>
    pregunta5=<Pregunta5 mostrarocultar="d-md-none" />
    pregunta6=<Pregunta6 mostrarocultar="d-md-block" respuesta6={respuesta6} guardarRespuesta6={guardarRespuesta6} guardarmensaje6={guardarmensaje6} guardarcolor6={guardarcolor6}/>
    pregunta7=<Pregunta7 mostrarocultar="d-md-none"/>
    pregunta8=<Pregunta8 mostrarocultar="d-md-none"/>
    pregunta9=<Pregunta9 mostrarocultar="d-md-none"/>
    pregunta10=<Pregunta10 mostrarocultar="d-md-none"/>
   }else if(contador===7){
    pregunta=<Pregunta1 mostrarocultar="d-md-none" />
    pregunta2=<Pregunta2 mostrarocultar="d-md-none"/>
    pregunta3=<Pregunta3 mostrarocultar="d-md-none"/>
    pregunta4=<Pregunta4 mostrarocultar="d-md-none"/>
    pregunta5=<Pregunta5 mostrarocultar="d-md-none" />
    pregunta6=<Pregunta6 mostrarocultar="d-md-none" />
    pregunta7=<Pregunta7 mostrarocultar="d-md-block" respuesta7={respuesta7} guardarRespuesta7={guardarRespuesta7} guardarmensaje7={guardarmensaje7} guardarcolor7={guardarcolor7}/>
    pregunta8=<Pregunta8 mostrarocultar="d-md-none"/>
    pregunta9=<Pregunta9 mostrarocultar="d-md-none"/>
    pregunta10=<Pregunta10 mostrarocultar="d-md-none"/>
   }else if(contador===8){
    pregunta=<Pregunta1 mostrarocultar="d-md-none" />
    pregunta2=<Pregunta2 mostrarocultar="d-md-none"/>
    pregunta3=<Pregunta3 mostrarocultar="d-md-none"/>
    pregunta4=<Pregunta4 mostrarocultar="d-md-none"/>
    pregunta5=<Pregunta5 mostrarocultar="d-md-none" />
    pregunta6=<Pregunta6 mostrarocultar="d-md-none" />
    pregunta7=<Pregunta7 mostrarocultar="d-md-none" />
    pregunta8=<Pregunta8 mostrarocultar="d-md-block" respuesta8={respuesta8} guardarRespuesta8={guardarRespuesta8} guardarmensaje8={guardarmensaje8} guardarcolor8={guardarcolor8}/>
    pregunta9=<Pregunta9 mostrarocultar="d-md-none"/>
    pregunta10=<Pregunta10 mostrarocultar="d-md-none"/>

   }else if(contador===9){
    pregunta=<Pregunta1 mostrarocultar="d-md-none" />
    pregunta2=<Pregunta2 mostrarocultar="d-md-none"/>
    pregunta3=<Pregunta3 mostrarocultar="d-md-none"/>
    pregunta4=<Pregunta4 mostrarocultar="d-md-none"/>
    pregunta5=<Pregunta5 mostrarocultar="d-md-none" />
    pregunta6=<Pregunta6 mostrarocultar="d-md-none" />
    pregunta7=<Pregunta7 mostrarocultar="d-md-none" />
    pregunta8=<Pregunta8 mostrarocultar="d-md-none"/>
    pregunta9=<Pregunta9 mostrarocultar="d-md-block"  respuesta9={respuesta9} guardarRespuesta9={guardarRespuesta9} guardarmensaje9={guardarmensaje9} guardarcolor9={guardarcolor9}/>
    pregunta10=<Pregunta10 mostrarocultar="d-md-none"/>
   }else if(contador===10){
    pregunta=<Pregunta1 mostrarocultar="d-md-none" />
    pregunta2=<Pregunta2 mostrarocultar="d-md-none"/>
    pregunta3=<Pregunta3 mostrarocultar="d-md-none"/>
    pregunta4=<Pregunta4 mostrarocultar="d-md-none"/>
    pregunta5=<Pregunta5 mostrarocultar="d-md-none" />
    pregunta6=<Pregunta6 mostrarocultar="d-md-none" />
    pregunta7=<Pregunta7 mostrarocultar="d-md-none" />
    pregunta8=<Pregunta8 mostrarocultar="d-md-none"/>
    pregunta9=<Pregunta9 mostrarocultar="d-md-none"  />
    pregunta10=<Pregunta10 mostrarocultar="d-md-block" respuesta10={respuesta10} guardarRespuesta10={guardarRespuesta10} guardarmensaje10={guardarmensaje10} guardarcolor10={guardarcolor10}/>
    OcultarBntFin="d-md-block";
    ocultarBntSig="d-md-none";
   }else if(contador===11){

    pregunta=<Pregunta1 mostrarocultar= "d-md-block" clasesLabel="bg-success" mensaje1={mensaje1} color1={color1}/>
    pregunta2=<Pregunta2 mostrarocultar="d-md-block" clasesLabel="bg-success" mensaje2={mensaje2} color2={color2}/>
    pregunta3=<Pregunta3 mostrarocultar="d-md-block" clasesLabel="bg-success" mensaje3={mensaje3} color3={color3}/>
    pregunta4=<Pregunta4 mostrarocultar="d-md-block" clasesLabel="bg-success" mensaje4={mensaje4} color4={color4}/>
    pregunta5=<Pregunta5 mostrarocultar="d-md-block" clasesLabel="bg-success" mensaje5={mensaje5} color5={color5}/>
    pregunta6=<Pregunta6 mostrarocultar="d-md-block" clasesLabel="bg-success" mensaje6={mensaje6} color6={color6}/>
    pregunta7=<Pregunta7 mostrarocultar="d-md-block" clasesLabel="bg-success" mensaje7={mensaje7} color7={color7}/>
    pregunta8=<Pregunta8 mostrarocultar="d-md-block" clasesLabel="bg-success" mensaje8={mensaje8} color8={color8}/>
    pregunta9=<Pregunta9 mostrarocultar="d-md-block" clasesLabel="bg-success" mensaje9={mensaje9} color9={color9} />
    pregunta10=<Pregunta10 mostrarocultar="d-md-block" clasesLabel="bg-success" mensaje10={mensaje10} color10={color10} />
    NotaMostra = <Nota nota={nota} mensaje={mensaje} guardarMensaje={guardarMensaje}/>
    Ocultar="d-md-none";
    ocultarBntSig="d-md-none";
    ocultarPanel="d-md-none"
  }
   //obtenemos el numero de preguntas realizanas y se las mandamos a la  App.js 
   props.obtenercontador(contador);
    console.log(contador)
  
   
  

    let clase=`${Ocultar} btn`;
    let clase2=`${OcultarBntFin} btn`;
    let clase3=`${ocultarBntSig} btn`;
    
    return(

       <Fragment>
          {NotaMostra}
          {pregunta}
          {pregunta2}
          {pregunta3}
          {pregunta4}
          {pregunta5}
          {pregunta6}
          {pregunta7}
          {pregunta8}
          {pregunta9}
          {pregunta10}
          <Panel  guardarContador={guardarContador} ocultarPanel={ocultarPanel} />
          
         <div className="botones">

           <button type="button" onClick={anterior} id="btn-ante" className={clase} >Anterior</button>
           <button type="button" onClick={siguiente} id="btn-sig" className={clase3}>Siguiente</button>
           <button type="button" onClick={terminar} id="btn-sig" className={clase2}>terminar</button>
         
         </div>
       </Fragment>

    )
}
export default Container;