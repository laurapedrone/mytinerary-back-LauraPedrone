import './cityDerail.css'
import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Form, Button } from "react-bootstrap"

const CityDetail = () => {
    return (
        <>
            <section className="fund_main2 col-sm-12">
                <div className='form-box2'>
                    <h3 className="textsubtitle2">City Detail</h3>
                    <p className='paragraph_main2'>Collection of the most beautiful places and experience</p>
                    <Form className="d-flex">
                        <LinkContainer to="/">
                            <Button variant="outline-info">View Itiniraries!</Button>
                        </LinkContainer>
                    </Form>
                </div>
            </section>
            <div className="container card bg-dark text-white">
                <img src="./public/Assets/images/itineriaries.jpeg" className="card-img" alt="Stony Beach" />
                <div className="card-img-overlay">
                    <h5 className="card-title" style={{
                        textAlign: "center",
                        maxWidth: "950px",
                        margin: "0 auto",
                        padding: "40px 25px",
                        marginTop: "50px",        
                        fontSize: "3rem"
                    }}>THERE ARE NO ITINERARIES</h5>
                </div>
            </div>
        </>
    )
}

export default CityDetail
