import './heroMain.css'
import React from 'react'
import { Form, Button } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'

const HeroMain = () => {
  return (
    <section className="fund_main1 col-sm-12">

      <div className='form-box1'>
        <h3 className="textsubtitle1">Find your perfect trip, designed by insiders who know and love their cities!</h3>
        <p className='paragraph_main1'>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
        <Form className="d-flex">
          <LinkContainer to="/cities">
            <Button variant="outline-info">View More</Button>
          </LinkContainer>
        </Form>

      </div>
    </section>
  )
}

export default HeroMain