import { pool } from './database.js'

const createCarsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS custom_cars;

    CREATE TABLE IF NOT EXISTS custom_cars (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      body_color TEXT NOT NULL,
      wheels TEXT NOT NULL,
      interior TEXT NOT NULL,
      engine TEXT NOT NULL,
      package TEXT NOT NULL,
      total_price INTEGER NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `

  try {
    await pool.query(createTableQuery)
    console.log('custom_cars table created successfully')
  } catch (error) {
    console.error('Error creating custom_cars table:', error)
  } finally {
    await pool.end()
  }
}

createCarsTable()