import React from 'react';
import '../css/use-cases.css';

import polispay from '../assets/img/PolisPay1-1.png';
import polisnodes from '../assets/img/PolisNodes1-1.png';

class UseCases extends React.Component {
    render() {
        return (

            <section className="use-cases">
                <div className="container">
                    <div className="row">
                        <div className="col-md uc-separator">
                            <h3>Use Polis with</h3>
                            <a href="https://www.polispay.com/home">
                                <img className="use-case-img" src={polispay} height="70" alt="" />
                            </a>
                        </div>
                        <div className="col-md">
                            <h3>Host your Masternode on</h3>
                            <a href="https://www.polisnodes.io">
                                <img className="use-case-img" src={polisnodes} height="70" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default UseCases;