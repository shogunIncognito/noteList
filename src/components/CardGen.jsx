import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'

export default function CardGen({ data }) {
    const {title, description} = data

    return (
        <Col lg="auto">
            <Card className='mb-4' border="primary" text="dark" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}