import React, { Component } from 'react'
import alfamidi from './assets/images/Logo_Alfamidi 1.png';
import plazaamabrukmo from './assets/images/Plaza_Ambarrukmo.png';
import maskobis from './assets/images/maskobis.png';
import hakata from './assets/images/hakata.png';

export class Kerjasama extends Component {
    render() {
        return (
            <section>
                <div className="wrapper" style={{padding:"80px"}}>
                    <div className="sub-title">
                        <div className="title-company-name">DAMOGO</div>
                        <div className="title-content">Kerjasama</div>
                    </div>
                    <div className="row">
                        <div className="dimput-4">
                            <div className="img-dimput-4">
                                <img src={alfamidi} alt="alfamidi" />
                            </div>
                        </div>
                        <div className="dimput-4">
                            <div className="img-dimput-4">
                                <img src={plazaamabrukmo} alt="plazaamabrukmo" />
                            </div>
                        </div>
                        <div className="dimput-4">
                            <div className="img-dimput-4">
                                <img src={maskobis} alt="maskobis" />
                            </div>
                        </div>
                        <div className="dimput-4">
                            <div className="img-dimput-4">
                                <img src={hakata} alt="hakata" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Kerjasama
