import React, { Component } from 'react';
import QcxBanner from '../img/Feature graphics v2.png'
import McGillHack from '../img/mcgillhack.png'
import SaeConcordia from '../img/saeconcordia.png'
import Observer from '@researchgate/react-intersection-observer';
export class ProjectSection extends Component {

  constructor(){
    super();
    this.state={
      isQcxDisabled: false,
      isHackDisabled: false,
      isSaeDisabled: false,
    }
  }

  handleIntersection(event) {

    if(event.isIntersecting === true){
      document.querySelector('#Qcx-project').classList.add("fadeIn");
      this.setState({
        isQcxDisabled: true
      })
    }
  }
  handleIntersectionMcGillHack(event) {
  
    if(event.isIntersecting === true){
      document.querySelector('#McGillhack-project').classList.add("fadeIn");
      this.setState({
        isHackDisabled: true
      })
    }
  }
  handleIntersectionSaeWeb(event) {

    if(event.isIntersecting === true){
      document.querySelector('#SaeWeb-project').classList.add("fadeIn");
      this.setState({
        isSaeDisabled: true
      })
    }
  }
  

  render() {
    const optionsQcx = {
      onChange: this.handleIntersection.bind(this),
      rootMargin: "-25%"
  };
  const optionsMcgillHack = {
    onChange: this.handleIntersectionMcGillHack.bind(this),
    rootMargin: "0% 0% -25%"
};
  const optionsSaeWeb = {
    onChange: this.handleIntersectionSaeWeb.bind(this),
    rootMargin: "0% 0% -25%"
  };


    return (
      <div className="Project-section">
        <p className="project-section-title">Projects</p>
        <div className="projects">
        <Observer disabled={this.state.isQcxDisabled} {...optionsQcx}>
        <div className="animated project-card" id="Qcx-project" onClick={()=>{window.open("https://frodinm.github.io/qcx/")}}>
            <img src={QcxBanner} alt="Mobile App" className="Banner"/><br/>
            <div style={{padding:10}}>
            <span className="project-title" style={{fontFamily: 'Helvetica'}}>Mobile Application</span><br/>
            <p className="project-subtitle">Description</p>
            <p>I developed and built a mobile application with React-Native,Redux,Redux-persist and many other open source libraries</p>
            </div>
        </div>
        </Observer>
        <Observer disabled={this.state.isHackDisabled} {...optionsMcgillHack}>
        <div className="animated project-card" id="McGillhack-project" onClick={()=>{window.open("https://devpost.com/software/awsomehack")}}>
            <img src={McGillHack} alt="McGillHack" className="Banner"/><br/>
            <div style={{padding:10}}>
            <span className="project-title" style={{fontFamily: 'Helvetica'}}>McGill Hackathon</span><br/>
            <p className="project-subtitle">Description</p>
            <p>My team and I won the Nuance api challenge using Reactjs. I improved on my team communication, integrated the chat bot from cisco and built the news section of the web app</p>
            </div>
        </div>
        </Observer>
        <Observer disabled={this.state.isSaeDisabled} {...optionsSaeWeb}>
        <div className="animated project-card" id="SaeWeb-project" onClick={()=>{window.open("https://sae-concordia.firebaseapp.com")}}>
            <img src={SaeConcordia} alt="Mobile App" className="Banner"/><br/>
            <div style={{padding:10}}>
            <span className="project-title" style={{fontFamily: 'Helvetica'}}>Concordia Sae Website</span><br/>
            <p className="project-subtitle">Description</p>
            <p>I rebuilt from scratch the concordia sae website in order to improve the performance of the current web site.</p>
            </div>
        </div>
        </Observer>
        </div>
      </div>
    );
  }
}
