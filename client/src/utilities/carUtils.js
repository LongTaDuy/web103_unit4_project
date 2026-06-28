export const options = {
  body_color: [
    { label: 'Red', value: 'red', price: 500 },
    { label: 'Blue', value: 'blue', price: 400 },
    { label: 'Black', value: 'black', price: 700 },
    { label: 'White', value: 'white', price: 300 }
  ],
  wheels: [
    { label: 'Standard Wheels', value: 'standard', price: 0 },
    { label: 'Sport Wheels', value: 'sport', price: 1200 },
    { label: 'Off-road Wheels', value: 'offroad', price: 1500 }
  ],
  interior: [
    { label: 'Cloth', value: 'cloth', price: 0 },
    { label: 'Leather', value: 'leather', price: 1800 },
    { label: 'Carbon Fiber', value: 'carbon', price: 2500 }
  ],
  engine: [
    { label: 'Eco', value: 'eco', price: 0 },
    { label: 'Sport', value: 'sport', price: 3000 },
    { label: 'Electric', value: 'electric', price: 4500 }
  ],
  package: [
    { label: 'Basic', value: 'basic', price: 0 },
    { label: 'Premium', value: 'premium', price: 3500 },
    { label: 'Luxury', value: 'luxury', price: 6000 }
  ]
}

export const basePrice = 25000

export const calculatePrice = (car) => {
  let total = basePrice

  Object.keys(options).forEach((feature) => {
    const selected = options[feature].find((option) => option.value === car[feature])
    if (selected) {
      total += selected.price
    }
  })

  return total
}

export const validateCar = (car) => {
  if (!car.name.trim()) {
    return 'Please enter a name for your custom car.'
  }

  if (car.body_color === 'black' && car.engine === 'eco') {
    return 'Impossible combo: black exterior cannot be paired with eco engine.'
  }

  if (car.wheels === 'offroad' && car.package === 'luxury') {
    return 'Impossible combo: off-road wheels do not work with luxury package.'
  }

  return ''
}