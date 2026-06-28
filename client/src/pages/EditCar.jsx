import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../App.css'
import '../css/CarForm.css'
import { getCar, updateCar } from '../services/CarsAPI'
import { calculatePrice, options, validateCar } from '../utilities/carUtils'

const EditCar = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [car, setCar] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadCar = async () => {
      const data = await getCar(id)
      setCar(data)
    }

    loadCar()
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target

    setCar((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const validationError = validateCar(car)

    if (validationError) {
      setError(validationError)
      return
    }

    try {
      const updatedCar = {
        ...car,
        total_price: calculatePrice(car)
      }

      await updateCar(id, updatedCar)
      navigate('/customcars')
    } catch (err) {
      setError(err.message)
    }
  }

  if (!car) {
    return (
      <main className="page">
        <section className="card">
          <p>Loading...</p>
        </section>
      </main>
    )
  }

  const totalPrice = calculatePrice(car)

  return (
    <main className="page">
      <section className="card">
        <h2>Edit Custom Car</h2>

        {error && <p className="error">{error}</p>}

        <div className="preview">
          <div className={`car-preview ${car.body_color}`}>
            <div className="car-window"></div>
            <div className="wheel left"></div>
            <div className="wheel right"></div>
          </div>
          <h3>Total Price: ${totalPrice.toLocaleString()}</h3>
        </div>

        <form onSubmit={handleSubmit}>
          <label>
            Build Name
            <input
              type="text"
              name="name"
              value={car.name}
              onChange={handleChange}
            />
          </label>

          <label>
            Exterior Color
            <select name="body_color" value={car.body_color} onChange={handleChange}>
              {options.body_color.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label} (+${option.price})
                </option>
              ))}
            </select>
          </label>

          <label>
            Wheels
            <select name="wheels" value={car.wheels} onChange={handleChange}>
              {options.wheels.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label} (+${option.price})
                </option>
              ))}
            </select>
          </label>

          <label>
            Interior
            <select name="interior" value={car.interior} onChange={handleChange}>
              {options.interior.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label} (+${option.price})
                </option>
              ))}
            </select>
          </label>

          <label>
            Engine
            <select name="engine" value={car.engine} onChange={handleChange}>
              {options.engine.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label} (+${option.price})
                </option>
              ))}
            </select>
          </label>

          <label>
            Package
            <select name="package" value={car.package} onChange={handleChange}>
              {options.package.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label} (+${option.price})
                </option>
              ))}
            </select>
          </label>

          <button type="submit">Update Car</button>
        </form>
      </section>
    </main>
  )
}

export default EditCar