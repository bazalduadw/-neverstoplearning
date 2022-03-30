import React, {useState} from 'react';
import db from '../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import styled from 'styled-components';

const Form = () => {
    const [nombre, cambiarNombre] = useState('');
    const [url, cambiarUrl] = useState('');
    const [categoria, cambiarCategoria] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        if(nombre && url && categoria){
            try{
                await addDoc(collection(db, 'publica-tu-curso'), {
                    nombre: nombre,
                    url: url,
                    categoria: categoria
                });
            } catch(error) {
                alert('Hubo un error al intenter enviar el curso')
                console.log(error)
            }
        } else {
            alert('datos incorrectos')
        }
        

        cambiarNombre('');
        cambiarUrl('');
        cambiarCategoria('');

    }

    return ( 
        
        <Container>
            <ContainerForm onSubmit={onSubmit}>
                <InputText type="text" name="nombre de curso" value={nombre} onChange={(e) => cambiarNombre(e.target.value)} placeholder="nombre del curso"/>
                <InputText type="text" name="url del curso" value={url} onChange={(e) => cambiarUrl(e.target.value)} placeholder="url del curso"/>
                <Select placeholder='categoria' value={categoria} onChange={(e) => cambiarCategoria(e.target.value)} >
                    <option value="" disabled="disabled">Categoria</option>
                    <option value="programacion">Programacion</option>
                    <option value="marketing">Marketing</option>
                    <option value="diseño">Diseño</option>
                </Select>
                <button type='submit'>Enviar</button>
            </ContainerForm> 

        </Container>

     );
}

const Container = styled.div`
    height: 68.8vh;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
`;

const ContainerForm = styled.form`
    width: 100%;
    max-width: 600px;
    margin: 50px;
    display: flex;
    flex-wrap: wrap;
    padding: 30px;
    background: #1a2027;
`;

const InputText = styled.input.attrs({ type: 'text' })`
  width: 100%;
`;

const Select = styled.select`
    width: 100%
`;
 
export default Form;

