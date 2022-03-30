import React, { useEffect, useState } from 'react';
import db from '../firebase/firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';
import {Titulo} from '../components/Titulo';

const Requests = () => {

    const [solicitudes, cambiarSolicitudes] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, 'publica-tu-curso'), 
        (snapshot) => {
            const requests = snapshot.docs.map((request) => {
                return {...request.data(), id: request.id}
            });
            cambiarSolicitudes(requests);
        }
        );
    }, []);

    return ( 
        <>     
            <Titulo texto="Requests" color="white" textAlign="center"/>
            <div className='div-table'>       
                <table>
                    <tr>
                        <th>Id: </th>
                        <th>Categoria</th>
                        <th>Nombre</th>
                        <th>Url</th>
                    </tr>
                    {solicitudes.map( (solicitud) => { return(
                        <tr  >
                            <th>
                                {solicitud.id}
                            </th>
                            <th>
                                {solicitud.categoria}
                            </th>
                            <th>
                                {solicitud.nombre}
                            </th>
                            <th>
                                <a className='enlace-table' href={solicitud.url} target="_blank" >{solicitud.url}</a>
                            </th>
                        </tr>
                    )})}        
                </table>       
            </div>
        </>
     );
}
 
export default Requests;