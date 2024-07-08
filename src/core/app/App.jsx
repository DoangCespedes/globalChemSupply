import React from 'react'
import AppRouter from '../../router/AppRouter'
import Footer from '../components/footer/Footer'
import { Nav } from '../components/navbar/Nav'


const App = () => {
  return (
    <>

      <div style={{marginBottom:"14vh"}}>
        <Nav/>
      </div>
      <AppRouter/>
      <Footer/>
    </>
  )
}

export default App