import { pool } from '../config/database.js'

export const getCars = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM custom_cars ORDER BY id ASC')
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

export const getCar = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const results = await pool.query('SELECT * FROM custom_cars WHERE id = $1', [id])

    if (results.rows.length === 0) {
      return res.status(404).json({ error: 'Car not found' })
    }

    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

export const createCar = async (req, res) => {
  try {
    const {
      name,
      body_color,
      wheels,
      interior,
      engine,
      package: carPackage,
      total_price
    } = req.body

    if (body_color === 'black' && engine === 'eco') {
      return res.status(400).json({
        error: 'Impossible combo: black exterior cannot be paired with eco engine.'
      })
    }

    const results = await pool.query(
      `INSERT INTO custom_cars 
      (name, body_color, wheels, interior, engine, package, total_price)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *`,
      [name, body_color, wheels, interior, engine, carPackage, total_price]
    )

    res.status(201).json(results.rows[0])
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

export const updateCar = async (req, res) => {
  try {
    const id = parseInt(req.params.id)

    const {
      name,
      body_color,
      wheels,
      interior,
      engine,
      package: carPackage,
      total_price
    } = req.body

    if (body_color === 'black' && engine === 'eco') {
      return res.status(400).json({
        error: 'Impossible combo: black exterior cannot be paired with eco engine.'
      })
    }

    const results = await pool.query(
      `UPDATE custom_cars
       SET name = $1,
           body_color = $2,
           wheels = $3,
           interior = $4,
           engine = $5,
           package = $6,
           total_price = $7
       WHERE id = $8
       RETURNING *`,
      [name, body_color, wheels, interior, engine, carPackage, total_price, id]
    )

    if (results.rows.length === 0) {
      return res.status(404).json({ error: 'Car not found' })
    }

    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

export const deleteCar = async (req, res) => {
  try {
    const id = parseInt(req.params.id)

    const results = await pool.query(
      'DELETE FROM custom_cars WHERE id = $1 RETURNING *',
      [id]
    )

    if (results.rows.length === 0) {
      return res.status(404).json({ error: 'Car not found' })
    }

    res.status(200).json({ message: 'Car deleted successfully' })
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}