import React, {Component}  from 'react';
import $ from 'jquery';

class Footer extends Component {

    componentDidMount() {
        //envelope animation 
        $(document).ready(function() {
  
            // setTimeout(function() {
            //   $('.envelope').addClass('is-open');
            // }, 1500);
            setInterval(function(){
                $('.envelope').addClass('is-open');
            }, 4000);
            setInterval(function(){
                $('.envelope').removeClass('is-open');
            }, 8000);
          });
        ////////////////////////
        $("form").on("submit", e => {
            e.preventDefault();
    
            const email = $("#email")
            .val()
            .trim();
            const subject = $("#subject")
            .val()
            .trim();
            const text = $("#text")
            .val()
            .trim();
    
            const data = {
            email,
            subject,
            text
            };
    
            $.post("/email", data)
            .then(() => {
                window.location.href = "/email/sent";
            })
            .catch(() => {
                window.location.href = "/error";
            });
        })
    }

    render() {
        return (
            <div>
                <footer id="contact">
                    <h1>Contact me</h1>
                    <div className="background">
                        <div className="container">
                            <div className="screen">
                                <div className="screen-header">
                                    <div className="screen-header-left">
                                        <div className="screen-header-button close"></div>
                                        <div className="screen-header-button maximize"></div>
                                        <div className="screen-header-button minimize"></div>
                                    </div>
                                    <div className="screen-header-right">
                                        <div className="screen-header-ellipsis"></div>
                                        <div className="screen-header-ellipsis"></div>
                                        <div className="screen-header-ellipsis"></div>
                                    </div>
                                </div>
                                    <div className="screen-body">
                                        <div className="screen-body-item left">
                                            <div className="contact-me-banner">Conact me</div>
                                            <div className="contact-animation">
                                                <div className="envelope">
                                                    <div className="envelope__letter">
                                                        <div><span>Hi, dear Haykaz<br/><br/>You are awesome<br/></span></div>
                                                    </div>
                                                    <div className="envelope__triangle envelope__triangle--down"></div>
                                                    <div className="envelope__triangle envelope__triangle--right"></div>
                                                    <div className="envelope__triangle envelope__triangle--left"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="screen-body-item">
                                            <form className="app-form">
                                                    <div className="app-form-group">
                                                        <input className="app-form-control" id="subject" placeholder="NAME"  />
                                                    </div>
                                                    <div className="app-form-group">
                                                        <input className="app-form-control" id="email" placeholder="EMAIL" />
                                                    </div>
                                                    <div className="app-form-group message">
                                                        <textarea className="app-form-control" id="text" cols="10" rows="10" placeholder="MESSAGE" ></textarea>
                                                    </div>
                                                    <div className="app-form-group buttons">
                                                        <input className="app-form-button" type="submit" value="Submit" />
                                                    </div>
                                            </form>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="create_info">
                        <div class="first">&copy; 2020 Designed by <a href="https://nanekharatyan.com/" target="_blank">Nane Kharatyan</a> </div>
                        <div class="second">
                            Built by<a href="#about">Haykaz Bashoyan</a>
                        </div> 
                    </div>
                </footer>
            </div>
        )
    }
}
            
export default Footer
