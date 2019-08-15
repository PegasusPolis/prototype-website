import React from 'react';
import '../css/trade-polis.css';
import '../App.css';

import polisPayShift from '../assets/img/exchanges/PolisPay2-1.png';

import southXchange from '../assets/img/exchanges/southxchange.png';
import cryptobridge from '../assets/img/exchanges/cryptobridge.png';
import dynx from '../assets/img/exchanges/dynx.jpg';
import crex24 from '../assets/img/exchanges/crex24.jpg';
import freiExchange from '../assets/img/exchanges/freiexchange.png';
import txbit from '../assets/img/exchanges/txbitio.jpg';

class TradePolis extends React.Component {
    render() {
      return (

        <section className="trade-polis">
        <div className="container">
            <div className="row">
                <div className="col-md-5  polis-shift-img">
                    <div>
                        <img src={polisPayShift} height="70" alt="" />
                        <a href="https://polispay.com/home">
                            <h3> Trade Polis through PolisPay Shift </h3>
                        </a>
                    </div>
                </div>

                <div className="col-md-7 exchanges-list">
                    <div className="row">
                        <div className="col-sm">
                            <a href="https://www.southxchange.com/Market/Book/POLIS/BTC">
                                <img src={southXchange} height="70" alt="" />
                                <h3> SouthXchange </h3>
                            </a>
                            <h5>POLIS/BTC</h5>
                        </div>
                        <div className="col-sm">
                            <a href="https://wallet.crypto-bridge.org/market/BRIDGE.POLIS_BRIDGE.BTC">
                                <img src={cryptobridge} height="70" alt="" />
                                <h3> Cryptobridge </h3>
                            </a>
                            <h5>POLIS/BTC</h5>
                        </div>
                        <div className="col-sm">
                            <a href="https://www.dynx.io/">
                                <img src={dynx} height="70" alt="" />
                                <h3> DynX </h3>
                            </a>
                            <h5>POLIS/BTC</h5>
                        </div>
                        <div className="col-sm">
                            <a href="https://crex24.com/es/exchange/POLIS-BTC">
                                <img src={crex24} height="70" alt="" />
                                <h3> Crex24 </h3>
                            </a>
                            <h5>POLIS/BTC</h5>
                        </div>
                        <div className="col-sm">
                            <a href="https://freiexchange.com/market/POLIS/BTC">
                                <img src={freiExchange} height="70" alt="" />
                                <h3> FreiExchange </h3>
                            </a>
                            <h5>POLIS/BTC</h5>
                        </div>
                        <div className="col-sm">
                            <a href="https://txbit.io/Trade/POLIS/BTC">
                                <img src={txbit} height="70" alt="" />
                                <h3> txbit.io </h3>
                            </a>
                            <h5>POLIS/BTC</h5>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

        );
    }
}

export default TradePolis;