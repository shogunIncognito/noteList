import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import CardList from './CardList';
import { useState } from 'react';

export default function NoteForm() {
    const [title, setTitle] = useState('')
    const [descrip, setDescrip] = useState('')
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
    
    const handleForm = (e) => {
        e.preventDefault()

        if (title.trim().length == 0 || descrip.trim().length == 0) {
            return alert('Hay campos vacios')
        }

        const notas = [...notes, {
            title: title,
            description: descrip
        }]

        localStorage.setItem('notes', JSON.stringify(notas))
        setNotes(notas)
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
            {notes.length === 0 ? <h1>Aun no hay tareas</h1> : <CardList notes={notes} />} 
        </>
    );
}
