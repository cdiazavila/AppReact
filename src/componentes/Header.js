import React, {Fragment } from 'react';

function Header(props){
    return(
        <Fragment>
            <header>
              <h4>{props.titulo}</h4>
            </header>
       
        </Fragment>
    )
}
export default Header;