import React, { Component } from 'react'
import { TweenMax, Power2, TimelineMax } from 'gsap'
import { FirstSection, SecondSection } from './components'

import './App.scss'

class App extends Component {

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll (event) {
    window.ScrollTop = document.getElementsByTagName('html')[0].scrollTop
    let aboutme = document.getElementsByClassName('AboutMe')
    let credit = document.getElementById('credit')
    let creditLink = document.getElementById('credit-link')
    if (window.ScrollTop >= 191) {
      TweenMax.to(aboutme, 2, {opacity: 1})
      TweenMax.to(aboutme, 2, {y: 50})
    }
    if (window.ScrollTop >= 382) {
      TweenMax.to([credit, creditLink], 1, {color: '#000'})
    }
    else if (window.ScrollTop < 382) {
        TweenMax.to([credit, creditLink], 1, {color: '#fff'})
      }
    }

  render () {
    return (
      <div className="App">
        <FirstSection/>
        <SecondSection/>
      </div>
    )
  }
}

export default App
