const asyncCount = (count = 1) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ date: count })
    }, Math.random(1000 * Math.random()))
  })
}

export { asyncCount }
