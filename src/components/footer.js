import React, { PureComponent } from 'react';
import linkedin from '../img/linkedin.png'
import github from '../img/GitHub.png'
import gmail from '../img/gmail.png'

export class Footer extends PureComponent {
  render() {
    return (
        <div className="App-footer" id="footer">
         <div className="footer-sections" id="footer-contact">
              <span style={{fontSize:20,margin:10}}>Contact Information</span>
              <div style={{display:'flex',flexDirection:'row',}}>
                <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/fabrizio-rodin-miron"><img alt="linkedinLogo" style={{height:40,width:40,margin:20, cursor:'pointer'}} src={linkedin}/></a>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/frodinm"><img alt="githubLogo" style={{height:40,width:40,borderRadius:100,margin:20, cursor:'pointer'}} src={github}/></a>
                <a href="mailto:frodinmdev@gmail.com"><img alt="gamilLogo" style={{height:40,width:40,margin:20, cursor:'pointer'}} src={gmail}/></a>
              </div>
          </div>
        </div>
    );
  }
}
