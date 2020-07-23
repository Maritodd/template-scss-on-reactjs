import React from 'react';
import binance from "../../../images/binance.png";
import okex from "../../../images/okex.png";
import huobi from "../../../images/huobi.png";
import hit from "../../../images/hit.png";
import kraken from "../../../images/kraken.png";
import gate from "../../../images/gate.png";
import bittrex from "../../../images/bittrex.png";
import polo from "../../../images/polo.png";
import coinex from "../../../images/coinex.png";
import kucoin from "../../../images/kucoin.png";
import exmo from "../../../images/exmo.png";
import yobit from "../../../images/yobit.png";
import lbank from "../../../images/lbank.png";
import bit from "../../../images/bit.png";
import bkex from "../../../images/bkex.png";
import bitforex from "../../../images/bitforex.png";
import digi from "../../../images/digi.png";
import bw from "../../../images/bw.png";

const Partner = () => {
    return (
        <section className="partner" id={6}>
            <div className="partner-text">
                <span className="partner-text__title">Наши партнеры</span>
            </div>
            <div className="partner-blocks">
                <div className="partner-block"><img className="partner-block__item" src={binance}
                                                    alt="partner"/></div>
                <div className="partner-block"><img className="partner-block__item" src={okex} alt="partner"/>
                </div>
                <div className="partner-block"><img className="partner-block__item" src={huobi} alt="partner"/>
                </div>
                <div className="partner-block"><img className="partner-block__item" src={hit} alt="partner"/>
                </div>
                <div className="partner-block"><img className="partner-block__item" src={kraken} alt="partner"/>
                </div>
                <div className="partner-block"><img className="partner-block__item" src={gate} alt="partner"/>
                </div>
                <div className="partner-block"><img className="partner-block__item" src={bittrex}
                                                    alt="partner"/></div>
                <div className="partner-block"><img className="partner-block__item" src={polo} alt="partner"/>
                </div>
                <div className="partner-block"><img className="partner-block__item" src={coinex} alt="partner"/>
                </div>
                <div className="partner-block"><img className="partner-block__item" src={kucoin} alt="partner"/>
                </div>
                <div className="partner-block"><img className="partner-block__item" src={exmo} alt="partner"/>
                </div>
                <div className="partner-block"><img className="partner-block__item" src={yobit} alt="partner"/>
                </div>
                <div className="partner-block"><img className="partner-block__item" src={lbank} alt="partner"/>
                </div>
                <div className="partner-block"><img className="partner-block__item" src={bit} alt="partner"/>
                </div>
                <div className="partner-block"><img className="partner-block__item" src={bkex} alt="partner"/>
                </div>
                <div className="partner-block"><img className="partner-block__item" src={bitforex}
                                                    alt="partner"/></div>
                <div className="partner-block"><img className="partner-block__item" src={digi} alt="partner"/>
                </div>
                <div className="partner-block"><img className="partner-block__item" src={bw} alt="partner"/>
                </div>
            </div>
        </section>
    );
}

export default Partner;
