import Row from 'react-bootstrap/Row'
import CardGen from './CardGen';

export default function CardList({ notes }) {
    return (
        <Row sm="auto" className="cajaNote">
            {notes.map(note => {
                return <CardGen key={note.id} data={note}/>
            })}
        </Row>
    );
}