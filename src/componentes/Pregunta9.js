import {React,Fragment} from 'react'


function Pregunta9(props){
    const leerPregunta9=(e)=>{
    
        if(e.target.value==='1'){
            props.guardarRespuesta9(0.5);
            props.guardarcolor9('bg-success');
            props.guardarmensaje9('Punto 0.5 de 0.5');
           
        }else{
            props.guardarRespuesta9(0);
            props.guardarcolor9('bg-danger');
            props.guardarmensaje9('Punto 0 de 0.5');
          
        }
      
    }

    let  clase1 =`p-3 mb-2 parrafo ${props.color9}`;
    let clase2=`${props.clasesLabel}`;
    return(
        <Fragment>
        <div  id="preguntaglobal" className={props.mostrarocultar} > 

            <p className={clase1}>9- En JavaScript  un ciclo seria?</p> <br/>
            <form action="#">
               <input type="radio" name="p9" id="opcion1" value="1"  onChange={ leerPregunta9 }/> <label for="1" className={clase2} >Un For</label> <br/><br/>
               <input type="radio" name="p9" id="opcion2" value="2"  onChange={ leerPregunta9 }/> <label for="2" id="label" >Una Funcion</label><br/><br/>
               <input type="radio" name="p9" id="opcion3" value="3"  onChange={ leerPregunta9 }/> <label for="3" >onClick</label>
              </form>
        
       
         <div id="resultado3">{props.mensaje9}</div>
        </div>

        </ Fragment>

    )
}

export default Pregunta9;