import React from 'react';
import '../css/hero.css';
import NavBar from '../components/navbar';

import polisIsotype from '../assets/img/polis-isotype-slogan.png';

class Hero extends React.Component {
    render() {
        return (

            <section class="hero">
                <NavBar />
                <div class="hero-inner">
                    <div class="container">
                        <div class="hero-isotype">
                            <img class="center" src={polisIsotype} height='40px' alt='' />
                        </div>
                        <div class="hero-text">
                            <h1>Use Polis for instant payments with our open-source, community run network.</h1>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Hero;