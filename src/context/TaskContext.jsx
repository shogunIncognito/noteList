import { createContext, useEffect, useState } from 'react'
import { db } from '../config/db'
import { addDoc, deleteDoc, collection, query, onSnapshot, doc } from 'firebase/firestore'

export const Context = createContext()

export function TaskContext(props) {
    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const q = query(collection(db, "tareas"));
        onSnapshot(q, (querySnapshot) => {
            const taskdb = [];
            querySnapshot.forEach((doc) => {
                taskdb.push({ ...doc.data(), id: doc.id });
            });
            setNotes(taskdb)
            setLoading(false)
        });
    }, [])

    const createTask = async (title, descrip) => {
        try {
            await addDoc(collection(db, 'tareas'), {
              title: title,
              description: descrip
            })
        } catch (error) {
            console.log(error);
        }
    }

    const deleteTask = (noteId) => {
        const docRef = doc(db, "tareas", noteId);
        deleteDoc(docRef)
    }

    return (
        <Context.Provider value={{
            notes,
            createTask,
            deleteTask,
            loading
        }}>
            {props.children}
        </Context.Provider>
    )
}