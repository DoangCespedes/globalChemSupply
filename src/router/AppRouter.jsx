import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Contact } from '../views/contact/Contact'
import { Homee } from '../views/home/Homee'

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Homee/>} />
        {/* <Route path="/gallery" element={<Gallery/>} /> */}
        <Route path="/contact" element={<Contact/>} />
        {/* <Route path="/about" element={<About/>} /> */}
        {/* <Route path="/auto-detailing" element={<AutoDetailing/>} />
        <Route path="/ceramic-coatings" element={<CeramicCoatings/>} />
        <Route path="/hail-dent-repair" element={<HailDentRepair/>} />
        <Route path="/paint-corrections" element={<PaintCorrections/>} />
        <Route path="/vehicle-restoration" element={<VehicleRestoration/>} />
        <Route path="/window-tinting" element={<WindowTinting/>} /> */}
    </Routes>
  )
}

export default AppRouter