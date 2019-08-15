import React from 'react';
import '../css/our-vision.css';

import { faDraftingCompass, faUser } from "@fortawesome/free-solid-svg-icons";
import { faRecycle } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faPeopleCarry } from "@fortawesome/free-solid-svg-icons";

import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class OurVision extends React.Component {
    render() {
      return (

        <section className="our-vision">
        <div className="ov-separator">
            <h3>Lorem ipsum dolore amet</h3>
        </div>
        <div className="vision-1">
            <div className="container">
                <div className="row">
                    <div className="col-sm ov-content">
                    <FontAwesomeIcon icon={faDraftingCompass} size="3x"/>
                        <h3> Innovation</h3>
                    </div>
                    <div className="col-md">
                        <p>Polis is a cryptocurrency for communities.
                            People thrive when they can connect and
                            trade freely.</p>
                    </div>
                    <div className="col-sm ov-content">
                        <button className="btn vision-btn">
                            USE CASES
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="vision-2">
            <div className="container">
                <div className="row">
                    <div className="col-sm ov-content">
                        <button className="btn vision-btn">
                            GOVERNANCE
                        </button>
                    </div>
                    <div className="col-md">
                        <p>Polis is a cryptocurrency for communities.
                            People thrive when they can connect and
                            trade freely.</p>
                    </div>
                    <div className="col-sm ov-content">
                    <FontAwesomeIcon icon={faRecycle} size="3x"/>
                        <h3>DAO</h3>
                    </div>

                </div>
            </div>
        </div>
        <div className="vision-3">
            <div className="container">
                <div className="row">
                    <div className="col-sm ov-content">
                    <FontAwesomeIcon icon={faUsers} size="3x"/>
                        <h3> Social</h3>
                    </div>
                    <div className="col-md">
                        <p>Polis is a cryptocurrency for communities.
                            People thrive when they can connect and
                            trade freely.</p>
                    </div>
                    <div className="col-sm ov-content">
                        <button className="btn vision-btn">
                            POLIS MANIFESTO
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="vision-4">
            <div className="container">
                <div className="row">
                    <div className="col-sm ov-content">
                        <h3>Follow us!</h3>
                        <a href="https://discord.gg/5CuBnZB">
                        <FontAwesomeIcon  className="font-awesome-icon" icon={faDiscord} size="2x" />
                        </a>
                        <a href="https://t.me/PolisPayOfficial">
                        <FontAwesomeIcon className="font-awesome-icon" icon={faTelegram} size="2x" />
                        </a>
                        <a href="https://twitter.com/PolisBlockchain">
                        <FontAwesomeIcon className="font-awesome-icon" icon={faTwitter} size="2x" />
                        </a>
                        <a href="https://bitcointalk.org/index.php?topic=2627897.0">
                        <FontAwesomeIcon className="font-awesome-icon" icon={faBitcoin} size="2x" />
                        </a>
                    </div>
                    <div className="col-md">
                        <p>Polis is a cryptocurrency for communities.
                            People thrive when they can connect and
                            trade freely.</p>
                    </div>
                    <div className="col-sm ov-content">
                    <FontAwesomeIcon icon={faPeopleCarry} size="3x"/>
                        <h3>Community</h3>
                    </div>

                </div>
            </div>
        </div>
    </section>
      
      );
    }
}

export default OurVision;