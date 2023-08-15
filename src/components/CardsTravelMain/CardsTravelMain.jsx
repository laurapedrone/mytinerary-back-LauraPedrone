import Card from 'react-bootstrap/Card';
import './cardsTravelMain.css'

const CardsTravelMain = (props) => {
    return (
        <Card style={{ width: '12rem' }}>
            <Card.Img className='card-image'  variant="top" src={props.imageUrl} alt="City" />
            <Card.Body>
                <Card.Title>{props.city}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default CardsTravelMain
