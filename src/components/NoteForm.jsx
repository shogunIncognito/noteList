import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import CardList from './CardList';
import { useState, useContext } from 'react';
import { Context } from '../context/TaskContext';
import ModalForm from './ModalForm';
import SpinnerForm from './SpinnerForm';

export default function NoteForm() {
    const [title, setTitle] = useState('')
    const [descrip, setDescrip] = useState('')
    const [show, setShow] = useState(false);
    const { createTask, notes, loading } = useContext(Context)
    
    const handleForm = (e) => {
        e.preventDefault()

        if (title.trim().length == 0 || descrip.trim().length == 0) {
            return setShow(true)
        }

        createTask(title, descrip)
        setTitle('')
        setDescrip('')
        e.target.reset()
    }

    return (
        <>
            <Form className="mt-3" onSubmit={handleForm}>
                <Form.Group className="mb-3">
                    <Form.Label>Titulo de la nota</Form.Label>
                    <Form.Control onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Cena.." />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control onChange={(e) => setDescrip(e.target.value)} placeholder="Tomate, cebolla..." />
                </Form.Group>
                <Button className='mb-5' as="input" type="submit" value="Agregar" />
            </Form>            
            {loading ? <SpinnerForm /> : notes.length === 0 ? <h1 className='mt-5'>No hay notas</h1> : <CardList notes={notes} />} 
            {show && <ModalForm show={show} setShow={setShow}/>}
        </>
    );
}