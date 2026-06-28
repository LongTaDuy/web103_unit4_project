import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../App.css'
import '../css/CarForm.css'
import { getCar } from '../services/CarsAPI'

const CarDetails = () => {
  const { id } = useParams()
  const [car, setCar] = useState(null)

  useEffect(() => {
    const loadCar = async () => {
      const data = await getCar(id)
      setCar(data)
    }

    loadCar()
  }, [id])

  if (!car) {
    return (
      <main className="page">
        <section className="card">
          <p>Loading...</p>
        </section>
      </main>
    )
  }

  return (
    <main className="page">
      <section className="card">
        <h2>{car.name}</h2>

        <div className="preview">
          <div className={`car-preview ${car.body_color}`}>
            <div className="car-window"></div>
            <div className="wheel left"></div>
            <div className="wheel right"></div>
          </div>
        </div>

        <p><strong>Exterior:</strong> {car.body_color}</p>
        <p><strong>Wheels:</strong> {car.wheels}</p>
        <p><strong>Interior:</strong> {car.interior}</p>
        <p><strong>Engine:</strong> {car.engine}</p>
        <p><strong>Package:</strong> {car.package}</p>
        <h3>Total Price: ${car.total_price.toLocaleString()}</h3>

        <Link to={`/edit/${car.id}`} role="button">Edit Car</Link>
      </section>
    </main>
  )
}

export default CarDetails