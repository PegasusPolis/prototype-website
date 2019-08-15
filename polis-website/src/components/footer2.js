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
                        <div className="col-sm-4 polis-links">
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
                        <div className="col-sm-4 general-links">
                            <div>
                                <ul>
                                    <a href="#">
                                        <li>POLISPAY</li>
                                    </a>
                                    <a href="#">
                                        <li>POLISPAY SHIFT</li>
                                    </a>
                                    <a href="#">
                                        <li>POLIS NODES</li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-4 newsletter-sub">
                            <div>
                                <h4>Subscribe to our newsletter</h4>
                                <div className="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="E-mail goes here"
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
                    <p style={{marginRight: 100 + 'em'}}> © 2019, Kindynos</p>
                </div>
            </section>
        );
    }
}

export default Footer2;