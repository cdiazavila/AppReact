import {React,Fragment} from 'react'


function Pregunta4(props){
    const leerPregunta4 =(e)=>{
    
        if(e.target.value==='3'){
            props.guardarRespuesta4(0.5);
            props.guardarcolor4('bg-success');
            props.guardarmensaje4('Punto 0.5 de 0.5');
           
        }else{
            props.guardarRespuesta4(0);
            props.guardarcolor4('bg-danger');
            props.guardarmensaje4  ('Punto 0 de 0.5');
          
        }
      
    }

    let  clase1 =`p-3 mb-2 parrafo ${props.color4}`;
    let clase2=`${props.clasesLabel}`;
    return(
        <Fragment>
        <div  id="preguntaglobal" className={props.mostrarocultar} > 

            <p className={clase1}>4- Un input de Type = number sirve para  ?</p> <br/>
            <form action="#">
               <input type="radio" name="p4" id="opcion1" value="1"  onChange={ leerPregunta4 }/> <label for="1" >Fechas</label> <br/><br/>
               <input type="radio" name="p4" id="opcion2" value="2"  onChange={ leerPregunta4 }/> <label for="2" id="label" >Taxtos</label><br/><br/>
               <input type="radio" name="p4" id="opcion3" value="3"  onChange={ leerPregunta4 }/> <label for="3" className={clase2}>Numeros</label>
              </form>
        
       
         <div id="resultado3">{props.mensaje4}</div>
        </div>

        </ Fragment>

    )
}

export default Pregunta4;