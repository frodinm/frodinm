import React, { Component } from 'react';
import Observer from '@researchgate/react-intersection-observer';

export class SecondSection extends Component {
  constructor(){
    super();
    this.state={
      isAboutDisabled: false
    }
  }

  handleIntersection(event) {
    if(event.isIntersecting === true){
      document.querySelector('.Section-two').classList.add("fadeIn");
      this.setState({
        isAboutDisabled: true
      })
    }
}
  render() {
    const options = {
      onChange: this.handleIntersection.bind(this),
      root: document.querySelector('.Project-section'),
      rootMargin: "0% 0% -25%"
  };
    return (
      <Observer disabled={this.state.isAboutDisabled} {...options}>
      <div className="animated Section-two" id="section-two" >
        <div className='AboutMe'><span id='about-title'>About me</span><br/><br/>Currently studying computer science and have learned modern javascript <br/> librairies such as Reactjs on my free time. I love the front end development field and <br/> especially towards the creation of animations.</div>
      </div>
      </Observer>
    );
  }
}
