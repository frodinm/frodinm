import React, { Component } from 'react';
import {TweenMax, Power4, TimelineMax} from "gsap";
import Typed from 'typed.js';

export class FirstSection extends Component {
  componentDidMount(){
    let typed = new Typed('#typed', {
      strings: ["become a front end developer.", " eventually be full stack web developer."],
      typeSpeed: 50,
      backSpeed:30,
      startDelay:2000,
    });
    typed.start();
    let intro = document.getElementById('introduction');
    let text = document.getElementById('credit');
    let circle = document.getElementById('circle');
    let tl = new TimelineMax({repeat:-1});
    tl.add(TweenMax.to(circle,2,{opacity:1}));
    tl.add(TweenMax.to(circle,2,{opacity:0}));
    tl.play();
    TweenMax.from(text,2,{x:-60});
    TweenMax.from(intro,2,{y:-50,ease:Power4.easeOut});
    TweenMax.to(text,2,{opacity:1,ease:Power4.easeOut});
    TweenMax.to(intro,2,{opacity:1,ease:Power4.easeOut});

  }
  render() {
    return (
      <div className="Section-One">
        <div className='layer'/>
        <span id='introduction'><span id='name'>Hey,I'm Fabrizio.</span><br/> I am currently a student and would<br/> love to  <span id='typed'/> </span>
        <span id='credit' >Photo by <a id='credit-link' href='https://unsplash.com/@dillanchoiniere' target='_blank'> Dillan Choiniere</a> on Unsplash</span>
        <span id='continue'>&#8964;</span>
        <svg style={{zIndex:2}} height="80" width="80">
          <circle id='circle' cx="40" cy="40" r="30"   />
        </svg>
      </div>
    );
  }
}
