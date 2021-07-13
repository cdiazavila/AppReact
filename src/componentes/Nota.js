import React, { Fragment} from 'react';
function Nota(props){
  
    if(props.nota>=3){
      props.guardarMensaje('Aprobo el test')
    }else{
        props.guardarMensaje('Reprobo el test')
    }

    return(
      <Fragment>
          <div>
              Su nota es de {props.nota}, {props.mensaje}
          </div>
      </Fragment>
    )
}
export default Nota;