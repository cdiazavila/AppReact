import {React,Fragment} from 'react'


function Pregunta5(props){
    const leerPregunta5 =(e)=>{
    
        if(e.target.value==='1'){
            props.guardarRespuesta5(0.5);
            props.guardarcolor5('bg-success');
            props.guardarmensaje5('Punto 0.5 de 0.5');
           
        }else{
            props.guardarRespuesta5(0);
            props.guardarcolor5('bg-danger');
            props.guardarmensaje5('Punto 0 de 0.5');
          
        }
      
    }

    let  clase1 =`p-3 mb-2 parrafo ${props.color5}`;
    let clase2=`${props.clasesLabel}`;
    return(
        <Fragment>
        <div  id="preguntaglobal" className={props.mostrarocultar} > 

            <p className={clase1}>5- En CSS el comando que sirve para ponerle un color al texto es ?</p> <br/>
            <form action="#">
               <input type="radio" name="p5" id="opcion1" value="1"  onChange={ leerPregunta5 }/> <label for="1" className={clase2}>color</label> <br/><br/>
               <input type="radio" name="p5" id="opcion2" value="2"  onChange={ leerPregunta5 }/> <label for="2" id="label" >margin-left</label><br/><br/>
               <input type="radio" name="p5" id="opcion3" value="3"  onChange={ leerPregunta5 }/> <label for="3" >background-color</label>
              </form>
        
       
         <div id="resultado3">{props.mensaje5}</div>
        </div>

        </ Fragment>

    )
}

export default Pregunta5;