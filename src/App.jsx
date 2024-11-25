import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ProjectList from './components/ProjectList'
import { useState } from 'react'
import data from "./data"


function App() {

  const [projectsData, setProjectsData] = useState(data)

  return (
    <>
      <Header />
      <ProjectList projectsData = {projectsData}/>
      <Footer />
    </>
  )
}

export default App
