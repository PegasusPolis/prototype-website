import React from 'react';
import '../css/our-vision.css';

import compass from '../assets/img/drafting-compass.svg';
import DAO from '../assets/img/recycle.svg';
import Social from '../assets/img/users.svg';
import community from '../assets/img/people-carry.svg';

import discord from '../assets/img/discord.svg';
import telegram from '../assets/img/telegram.svg';
import twitter from '../assets/img/twitter.svg';
import bitcoin from '../assets/img/bitcoin.svg';


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
                        <img className="font-awesome-img" src={compass} height="50px" alt="" />
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
                        <img className="font-awesome-img" src={DAO} height="50px" alt="" />
                        <h3>DAO</h3>
                    </div>

                </div>
            </div>
        </div>
        <div className="vision-3">
            <div className="container">
                <div className="row">
                    <div className="col-sm ov-content">
                        <img className="font-awesome-img" src={Social} height="50px" alt="" />
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
                        <a href="#">
                            <img className="font-awesome-img" src={discord} height="30px" alt="" />
                        </a>
                        <a href="#">
                            <img className="font-awesome-img" src={telegram} height="30px" alt="" />
                        </a>
                        <a href="#">
                            <img className="font-awesome-img" src={twitter} height="30px" alt="" />
                        </a>
                        <a href="#">
                            <img className="font-awesome-img" src={bitcoin} height="30px" alt="" />
                        </a>
                    </div>
                    <div className="col-md">
                        <p>Polis is a cryptocurrency for communities.
                            People thrive when they can connect and
                            trade freely.</p>
                    </div>
                    <div className="col-sm ov-content">
                        <img className="font-awesome-img" src={community} height="50px" alt="" />
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