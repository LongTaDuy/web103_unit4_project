const API_URL = '/api/cars'

export const getAllCars = async () => {
  const response = await fetch(API_URL)
  return await response.json()
}

export const getCar = async (id) => {
  const response = await fetch(`${API_URL}/${id}`)
  return await response.json()
}

export const createCar = async (car) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car)
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error || 'Failed to create car')
  }

  return data
}

export const updateCar = async (id, car) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car)
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error || 'Failed to update car')
  }

  return data
}

export const deleteCar = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  })

  return await response.json()
}