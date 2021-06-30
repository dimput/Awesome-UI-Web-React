import React, { Component } from 'react'
import googlePlay from './assets/images/google-play.png'
import logo from './assets/images/logo.png'
import appStore from './assets/images/app-store.png'

export class Footer extends Component {
    render() {
        return (
            <section className="Footer">
                <div className="wrapper">
                    <div className="row" style={{ padding: "70px 0px" }}>
                        <img src={logo} alt="DamoGO" />
                    </div>
                    <div className="content-right" style={{ padding: "0px 0px" }}>
                        <div className="content-footer">
                            <div className="title-footer">
                                Ikuti Kami
                            </div>
                            <ul style={{ marginTop: "20px", fontSize: "16px" }}>
                                <li><a href="https://github.com/dimput">Term of Use</a></li>
                                <li><a href="https://github.com/dimput">Privacy</a></li>
                                <li><a href="https://github.com/dimput">Careers</a></li>
                                <li><a href="https://github.com/dimput">About</a></li>
                                <li><a href="https://github.com/dimput">CA Supply Chains Act</a></li>
                                <li><a href="https://github.com/dimput">Affiliates</a></li>
                                <li><a href="https://github.com/dimput">Recall Info</a></li>
                                <li><a href="https://github.com/dimput">Inclusion and Diversity</a></li>
                            </ul>
                        </div>
                        <div className="content-footer" style={{ verticalAlign: "top" }}>
                            <div className="title-footer">
                                Hubungi Kami
                            </div>
                            <ul style={{ marginTop: "20px", fontSize: "16px" }}>

                                <li><strong>Alamat</strong></li>
                                <li>Jl. Prof. Herman Yohanes No.1212,
                                    Terban, Kec. Gondokusuman, Kota Yogyakarta,
                                    Daerah Istimewa Yogyakarta 55223</li>
                                <br />
                                <li><strong>Jam buka</strong></li>
                                <li>Mon - Fri 6:00 am - 8:00 pm</li>
                                <li>Sat & Sun 9:30 am - 6:00 pm</li>
                            </ul>
                        </div>
                    </div>
                    <div className="content-left">
                        <div className="row download">
                            <div className="title-footer" style={{ paddingLeft: "10px", marginBottom: "20px" }}>Download DamoGO App</div>
                            <img src={googlePlay} alt="googlePlay" />
                            <img src={appStore} alt="googlePlay" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Footer
