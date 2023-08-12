import React from 'react'
import { Form, Button} from "react-bootstrap"
import './heroMain.css'

const HeroMain = () => {
  return (
    <section className="fund_main col-sm-12">
    <h3 className="textsubtitle">Find your perfect trip, designed by insiders who know and love their cities!</h3>
    <p className='paragraph_main'>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
    <Form className="d-flex">
      <Button variant="outline-info">View More</Button>
    </Form>
  </section>
  )
}

export default HeroMain