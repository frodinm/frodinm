import React, { Component } from 'react'
import { FirstSection, SecondSection,ProjectSection, Footer } from './components'

import './App.scss'

class App extends Component {

  componentDidMount () {
   
  }
  render () {
    return (
      <div className="App">
        <FirstSection/>
        <SecondSection/>
        <ProjectSection/>
        <Footer/>
      </div>
    )
  }
}

export default App
