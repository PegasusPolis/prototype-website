import React from 'react';
import '../css/footer2.css';

import polislogo from '../assets/img/Polis1-1.png';
import devByKindynos from '../assets/img/developed_by.png';

class Footer2 extends React.Component {
    render() {
        return (
            <section className="footer2">
                <div>
                    <img src={polislogo} height="60" alt="" />
                </div>
                <div className="container">
                    <div className="footer2-links row">
                        <div className="col-md-4 footer-links">
                            <div>
                                <ul>
                                    <a href="#">
                                        <li>HOME</li>
                                    </a>
                                    <a href="#">
                                        <li>DOWNLOAD</li>
                                    </a>
                                    <a href="#">
                                        <li>BLOCK EXPLORER</li>
                                    </a>
                                    <a href="#">
                                        <li>LEGAL AND DISCLAIMER</li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 footer-links">
                            <div>
                                <ul>
                                    <a href="https://polispay.com/home">
                                        <li>POLISPAY</li>
                                    </a>
                                    <a href="https://polispay.com/home">
                                        <li>POLISPAY SHIFT</li>
                                    </a>
                                    <a href="https://www.polisnodes.io">
                                        <li>POLIS NODES</li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 newsletter-sub">
                            <div>
                                <h4>Subscribe to our newsletter</h4>
                                <div className="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="E-mail"
                                        aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div class="input-group-append">
                                        <button class="btn action-btn" type="button">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="footer2-info">
                    <img src={devByKindynos} height="60" alt="" />
                    <p> © 2019, Kindynos</p>
                </div>
            </section>
        );
    }
}

export default Footer2;