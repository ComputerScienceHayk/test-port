import React, {Component} from 'react';

//images
import HtmlLogo from '../images/skills/html5.png';
import CssLogo from '../images/skills/css.svg';
import LessLogo from '../images/skills/less.svg';
import JsLogo from '../images/skills/js.png';
import ReactLogo from '../images/skills/react.png';
import NodeLogo from '../images/skills/node.png';
import ExpressLogo from '../images/skills/express.jpg';
import MongoLogo from '../images/skills/mongo.png';
import LearnLogo from '../images/skills/learn.svg';
import RespLogo from '../images/skills/respons.svg';
import EmathyLogo from '../images/skills/emathy.svg';
import EnthusLogo from '../images/skills/enthus.svg';
import TeamWorkLogo from '../images/skills/teamwork.svg';
import SolveLogo from '../images/skills/solve.svg';


import $ from "jquery";

class Skills extends Component {


    componentDidMount() {
        $('.ba-slider').each(function () {
            let cur = $(this);
            // Adjust the slider
            let width = cur.width() + 'px';
            cur.find('.resize > div').css('width', width);
            // Bind dragging events
            drags(cur.find('.handle'), cur.find('.resize'), cur);
        })


        $(window).resize(function () {
            $('.ba-slider').each(function () {
                let cur = $(this);
                let width = cur.width() + 'px';
                cur.find('.resize > div ').css('width', width);
            });
        });


        function drags(dragElement, resizeElement, container) {

            // Initialize the dragging event on mousedown.
            dragElement.on('mousedown touchstart', function (e) {

                dragElement.addClass('draggable');
                resizeElement.addClass('resizable');

                // Check if it's a mouse or touch event and pass along the correct value
                let startX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;


                // Get the initial position
                let dragWidth = dragElement.outerWidth(),
                    posX = dragElement.offset().left + dragWidth - startX,
                    containerOffset = container.offset().left,
                    containerWidth = container.outerWidth();

                // Set limits
                let minLeft = containerOffset;
                let maxLeft = containerOffset + containerWidth - dragWidth;

                // Calculate the dragging distance on mousemove.
                dragElement.parents().on("mousemove touchmove", function (e) {

                    // Check if it's a mouse or touch event and pass along the correct value
                    let moveX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;

                    let leftValue = moveX + posX - dragWidth;

                    // Prevent going off limits
                    if (leftValue < minLeft) {
                        leftValue = minLeft;
                    } else if (leftValue > maxLeft) {
                        leftValue = maxLeft;
                    }

                    // Translate the handle's left value to masked divs width.
                    let widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + '%';

                    // Set the new values for the slider and the handle.
                    // Bind mouseup events to stop dragging.
                    $('.draggable').css('left', widthValue).on('mouseup touchend touchcancel', function () {
                        $(this).removeClass('draggable');
                        resizeElement.removeClass('resizable');
                    });
                    $('.resizable').css('width', widthValue);
                }).on('mouseup touchend touchcancel', function () {
                    dragElement.removeClass('draggable');
                    resizeElement.removeClass('resizable');
                });
                e.preventDefault();
            }).on('mouseup touchend touchcancel', function () {
                dragElement.removeClass('draggable');
                resizeElement.removeClass('resizable');
            });
        }

    }

    render() {
        return (
            <div>
                <section className="skills ba-slider" id="skills">
                    <div className="skills_body">
                        <div className="hard_skills">
                            <div className="skills_top">
                                <div className="flex_center_center">
                                    <div className="skill_type_wrapper">
                                        <h3>HARD <pre> </pre> SKILLS</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="skills_bottom">

                                <div className="skills_bottom_line hards">
                                    <div className="skill_item">
                                        <div className="front">
                                            <img src={HtmlLogo} alt="HTML5"/>
                                        </div>
                                        <div className="back">
                                            <p>HTML5</p>
                                        </div>
                                    </div>
                                    <div className="skill_item">
                                        <div className="front">
                                            <img src={CssLogo} alt="CSS3"/>
                                        </div>
                                        <div className="back">
                                            <p>CSS3</p>
                                        </div>
                                    </div>
                                    <div className="skill_item">
                                        <div className="front">
                                            <img src={LessLogo} alt="Less"/>
                                        </div>
                                        <div className="back">
                                            <p>Less</p>
                                        </div>
                                    </div>

                                    <div className="skill_item">
                                        <div className="front">
                                            <img src={JsLogo} alt="JS"/>
                                        </div>
                                        <div className="back">
                                            <p>JS</p>
                                        </div>
                                    </div>
                                    <div className="skill_item">
                                        <div className="front">
                                            <img src={ReactLogo} alt="React JS"/>
                                        </div>
                                        <div className="back">
                                            <p>React JS</p>
                                        </div>
                                    </div>

                                    <div className="skill_item">
                                        <div className="front">
                                            <img src={NodeLogo} alt="Node JS"/>
                                        </div>
                                        <div className="back">
                                            <p>Node JS</p>
                                        </div>
                                    </div>
                                    <div className="skill_item">
                                        <div className="front">
                                            <img src={ExpressLogo} alt="Express"/>
                                        </div>
                                        <div className="back">
                                            <p>Express</p>
                                        </div>
                                    </div>
                                    <div className="skill_item">
                                        <div className="front">
                                            <img src={MongoLogo} alt="Mongo DB"/>
                                        </div>
                                        <div className="back">
                                            <p>Mongo DB</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="skills_body resize">
                        <div className="soft_skills">
                            <div className="skills_top">
                                <div className="flex_center_center">
                                    <div className="skill_type_wrapper">
                                        <h3>SOFT <pre> </pre> SKILLS</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="skills_bottom">
                                <div className="skills_bottom_line">
                                    <div className="skill_item">
                                        <div className="front">
                                            <img src={LearnLogo} alt="Learnability"/>
                                        </div>
                                        <div className="back">
                                            <p>Learnability</p>
                                        </div>
                                    </div>
                                    <div className="skill_item">
                                        <div className="front">
                                            <img src={RespLogo} alt="Responsability"/>
                                        </div>
                                        <div className="back">
                                            <p>Responsability</p>
                                        </div>
                                    </div>
                                    <div className="skill_item">
                                        <div className="front">
                                            <img src={EmathyLogo} alt="Empathy"/>
                                        </div>
                                        <div className="back">
                                            <p>Empathy</p>
                                        </div>
                                    </div>
                                    <div className="skill_item">
                                        <div className="front">
                                            <img src={EnthusLogo} alt="Enthusiasm"/>
                                        </div>
                                        <div className="back">
                                            <p>Enthusiasm</p>
                                        </div>
                                    </div>
                                    <div className="skill_item">
                                        <div className="front">
                                            <img src={TeamWorkLogo} alt="Teamwork"/>
                                        </div>
                                        <div className="back">
                                            <p>Teamwork</p>
                                        </div>
                                    </div>
                                    <div className="skill_item">
                                        <div className="front">
                                            <img src={SolveLogo} alt="Problem Solving"/>
                                        </div>
                                        <div className="back">
                                            <p>Problem Solving</p>
                                        </div>
                                    </div>
                                    <div className="skill_item">
                                        <div className="front">
                                            <img src={TeamWorkLogo} alt="Teamwork"/>
                                        </div>
                                        <div className="back">
                                            <p>Teamwork</p>
                                        </div>
                                    </div>
                                    <div className="skill_item">
                                        <div className="front">
                                            <img src={SolveLogo} alt="Problem Solving"/>
                                        </div>
                                        <div className="back">
                                            <p>Problem Solving</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="skills_partition handle">
                        <svg style={{height: "100%", width: "100%"}}>
                            <line x1="50" y1="0" x2="100" y2="60" style={{stroke: "#818181", strokeWidth: "1"}}/>
                            <line x1="100" y1="60" x2="0" y2="330" style={{stroke: "#818181", strokeWidth: "1"}}/>
                            <line x1="0" y1="330" x2="50" y2="500" style={{stroke: "#818181", strokeWidth: "1"}}/>
                        </svg>
                    </div>
                </ section>
            </div>
        )
    }
}

export default Skills
