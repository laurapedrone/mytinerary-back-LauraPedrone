import React, { useEffect, useState } from 'react'
import CardCities from '../../components/CardCities/CardCities'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './cities.css'

const Cities = () => {
  const params = useParams()
  console.log(params)
  const [cities, setCities] = useState([])

  useEffect(() => {
    axios('http://localhost:3000/api/cities')
      .then(res => setCities(res.data.response))
  }, [])

  return (
    <>
      <section className="fund_main col-sm-12">

        <div className='form-box'>
          <h3 className="textsubtitle">Cities</h3>
          <p className='paragraph_main'>Collection of the most beautiful places and experience</p>
        </div>
      </section>
      <div className="container-fluid row row-cols-1 row-cols-md-3 g-4">
        {
          cities.map(c => <CardCities key={c._id} data={c} />)
        }
      </div>
    </>
  )
}

export default Cities