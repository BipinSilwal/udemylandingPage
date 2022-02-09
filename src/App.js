import React from 'react'
import Footer from './Component/Footer/Footer'
import InstructorSection from './Component/MainSection/InstructorSection'
import MainSection from './Component/MainSection/MainSection'
import Navsection from './Component/MainSection/Navsection'
import Navbar from './Component/Navbar/Navbar'

const App = () => {
  return (<>
  
      <Navbar/>
      <MainSection/>
      <Navsection/>
      <InstructorSection/>
      <Footer/>

      </>
  )
}

export default App