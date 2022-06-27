import React, {useState} from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

import MainContent from '../components/MainContent'
// Test
const Home = () => {

  const [darkMode , setDarkMode] = useState(true);
  return (
    <div>
      <Header setDarkMode = {(val) => setDarkMode(val)}/>
        <MainContent/>
      <Footer/>
    </div>
  )
}

export default Home