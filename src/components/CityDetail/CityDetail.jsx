import React from 'react'
import './cityDetail.css'
import { LinkContainer } from 'react-router-bootstrap'
import { Form, Button } from "react-bootstrap"

const CityDetail = () => {
    return (
        <>
            <section className="fund_main col-sm-12">
                <div className='form-box'>
                    <h3 className="textsubtitle">City Detail</h3>
                    <p className='paragraph_main'>Collection of the most beautiful places and experience</p>
                    <Form className="d-flex">
                        <LinkContainer to="/cities">
                            <Button variant="outline-info">View Itiniraries!</Button>
                        </LinkContainer>
                    </Form>
                </div>
            </section>
            <div className="container-fluid row row-cols-1 row-cols-md-3 g-4">

            </div>
        </>
    )
}

export default CityDetail