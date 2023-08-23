import React from 'react';
import { Form, Button } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const CardCities = ({ data }) => {
    const { name, country, flag, image, description, excursion_price } = data

    return (
        <div className="col">
            <div className="card h-100">
                <img src={image} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title"> {name}</h5>
                    <p className="card-text">
                    <FontAwesomeIcon icon={faLocationDot}/> {country}
                    </p>
                    <Form className="d-flex">
                        <LinkContainer to="/citydetail">
                            <Button variant="outline-info">View More</Button>
                        </LinkContainer>
                    </Form>
                </div>

            </div>
        </div>
    )
}

export default CardCities


