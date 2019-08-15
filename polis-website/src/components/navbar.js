import React from 'react';
import '../css/navbar.css';

import polisLogo from '../assets/img/polis-logo.png';
import polisLogoAlt from '../assets/img/Polis1-1.png';

class NavBar extends React.Component {
    render() {
        return (

            <nav class="navbar navbar-expand-lg navbar-dark">
            <a class="navbar-brand" href="#">
                <div class="brand-img">
                    <img class="brand1" src={polisLogo} height="40" alt="" />
                    <img class="brand2" src={polisLogoAlt} height="40" alt="" />
                </div>
            </a>
            <div class="collapse-button">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div id="navbarNavDropdown" class="navbar-collapse collapse">
                <ul class="navbar-nav mr-auto">
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">INTRODUCTION</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">COMMUNITY</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">INDIVIDUALS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">BUSINESS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">DEVELOPERS</a>
                    </li>
                </ul>
            </div>
        </nav>

            );
        }
    }
    
    export default NavBar;