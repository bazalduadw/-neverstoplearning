import React from 'react';

const Titulo = ({color, fontSize, texto, textAlign}) => {
    return ( 
        <h1 className='titulo' style={{color: color, fontSize: fontSize, textAlign: textAlign}}>{texto}</h1>
     );
}

const Titulo2 = ({color, fontSize, texto, textAlign}) => {
    return ( 

        <h2 className='titulo2' style={{color: color, fontSize: fontSize, textAlign: textAlign}}>{texto}</h2>

     );
}

const Parrafo = ({color, fontSize, texto, textAlign}) => {
    return(
        <p  className='titulo3' style={{color: color, fontSize: fontSize, textAlign: textAlign}}>{texto}</p>
    );
}
 
export {Titulo, Titulo2, Parrafo};