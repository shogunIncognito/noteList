import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import { useContext } from 'react';
import { Context } from '../context/TaskContext';

export default function CardGen({ data }) {
    const {title, description} = data
    const { deleteTask } = useContext(Context)
    
    return (
        <Col lg="auto">
            <Card className='mb-4' border="primary" text="dark" style={{ width: '18rem' }}>
                <Card.Body>
                    <div>
                        <button className="delBoton" onClick={() => deleteTask(data.id)}>X</button>
                    </div>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}