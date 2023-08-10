import Card from 'react-bootstrap/Card';

const CardsTravelMain = (props) => {
    return (
        <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src={props.imageUrl} alt="City" />
            <Card.Body>
                <Card.Title>{props.city}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default CardsTravelMain
