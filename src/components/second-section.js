import React, { Component } from 'react';
import {TweenMax, Power4, TimelineMax} from "gsap";
import Typed from 'typed.js';

export class SecondSection extends Component {

  render() {

    return (
      <div className="Section-two" >
        <div className='AboutMe'><span id='about-title'>About me</span><br/><br/>Currently studying computer science and have learned modern javascript <br/> librairies such as Reactjs on my free time. I love the front end development field and <br/> especially towards the creation of animations.</div>
      </div>
    );
  }
}
