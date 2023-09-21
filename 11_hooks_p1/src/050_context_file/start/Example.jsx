import { useState } from 'react'
import './Example.css'
import { createContext } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import { ThemeProvider } from './context/UseTheme'
import Footer from './components/Footer'

const Example = () => {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Example
