import React, { Fragment } from 'react';
function Nota(props){
    return(
      <Fragment>
          <div>
              Su nota es de {props.nota}
          </div>
      </Fragment>
    )
}
export default Nota;