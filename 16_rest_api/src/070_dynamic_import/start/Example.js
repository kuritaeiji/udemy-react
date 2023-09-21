const Example = () => {
  const dynamicImport = async () => {
    const module = await import('./add.js')
    console.log(module)
  }
  dynamicImport()
}

export default Example
