import React from "react";
import derek from '../../images/derek.jpg'
import { Redirect, NavLink } from "react-router-dom";


import "./About.css";

const About = () => {
  return (
    <div className="about_container">

      <div className="about_container-header">

        {/* TOP SECTION 1 */}
        <div className="about_container-header-2">
          <div className="about_container-header-2-top">
            <div className="about_container-header-profilePhoto">
              <div>
                <img src={derek} />
              </div>
              <div className="aboutname">
                <h2>Derek Roode</h2>
              </div>
            </div>
            {/* TOP SECTION 2 */}
            <div className="about_container-header-aboutStats">
              <div className="about_container-header-ContentBox">
                <div id="AboutoverallRank">
                  <div>
                    <i className="fas fa-trophy"></i>
                  </div>
                  <div>
                    <h3>Full Stack Software Engineer</h3>
                  </div>
 
                </div>

                <div id="AboutworkoutsCompleted">
                  <div>
                    <i className="fas fa-dumbbell"></i>
                  </div>
                  <div>
                    <h3>Written In React / Redux / Flask</h3>
                  </div>

                </div>

                <div id="AbouthoursCompleted">
                  <div>
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h3>Completed in 2021</h3>
                  </div>

                </div>

                <div id="AboutcurrentLevel">
                  <div>
                    <i className="fas fa-sliders-h"></i>
                  </div>
                  <div>
                    <h3>Open to Offers</h3>
                  </div>
                  <div>
                    <div id='currentLevel-text'>Yes</div>
                  </div>
                </div>
                <div id="AboutstartWorkout">
                  <a href={'http://derekroode.com'}
                                      activeClassName="active"
                                      className="links-each"
                  >
                  View My Portfolip Page

                  </a>

                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default About;
