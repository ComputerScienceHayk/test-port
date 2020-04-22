import React from 'react';
import Typewriter from 'typewriter-effect';

//images 
import me from '../images/me.png';


function  About() {
  const info = [
    ">> Hi I'm Haikaz <br/>",
    ">> I'm software engineer <br/>",
    ">> My passion is to create something from scratch. <br/>",
    ">> I study continuously. <br/>",
    ">> If you want to know more, contact me, I will answer. ",
  ]
    return (
        <div>
          <div id="about" className="abt">
            <h1>About</h1>
            <div className="about_wrapper">
              <div className="about_left">
                <div className="my_pic">
                  <img src={me} id="me" alt="Me" />
                </div>
              </div>
              <div className="about_right">
                <div className="terminal">
                  <div className="term_top">software@engineer#hayk:~$</div>
                  <div className="term_body" id="term_body">
                  <Typewriter
                    onInit={(typewriter) => {
                      for(let i = 0; i < info.length; i++){
                        typewriter.typeString(info[i])
                            .pauseFor(2500)
                            .start();
                      }
                    }}
                  />
                  </div>
                </div>  
              </div>
            </div>
          </div>
        </div>
    )
}
            
export default About;
