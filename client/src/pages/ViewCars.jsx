import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import '../css/CarForm.css'
import { deleteCar, getAllCars } from '../services/CarsAPI'

const ViewCars = () => {
  const [cars, setCars] = useState([])

  const loadCars = async () => {
    const data = await getAllCars()
    setCars(data)
  }

  useEffect(() => {
    loadCars()
  }, [])

  const handleDelete = async (id) => {
    await deleteCar(id)
    loadCars()
  }

  return (
    <main className="page">
      <section className="card">
        <h2>Saved Custom Cars</h2>

        {cars.length === 0 ? (
          <p>No custom cars yet. Create one first!</p>
        ) : (
          <div className="cars-grid">
            {cars.map((car) => (
              <article key={car.id} className="car-card">
                <div className={`mini-car ${car.body_color}`}></div>

                <h3>{car.name}</h3>
                <p><strong>Color:</strong> {car.body_color}</p>
                <p><strong>Engine:</strong> {car.engine}</p>
                <p><strong>Package:</strong> {car.package}</p>
                <p><strong>Total:</strong> ${car.total_price.toLocaleString()}</p>

                <div className="actions">
                  <Link to={`/customcars/${car.id}`} role="button">View</Link>
                  <Link to={`/edit/${car.id}`} role="button" className="secondary">Edit</Link>
                  <button className="contrast" onClick={() => handleDelete(car.id)}>
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default ViewCars