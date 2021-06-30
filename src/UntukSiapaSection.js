import React, { Component } from 'react'

export class UntukSiapaSection extends Component {
    render() {
        const {
            untukSiapa,
            colorBackground,
            content,
            position,
            imageApps
        } = this.props;
        return (
            <section style={{ backgroundColor: colorBackground,overflow:"hidden" }}>
                <div className="wrapper">
                    <div className="row">
                        <div className="content-left" style={{ float: position }}>
                            <div className="circle-3">
                                <img src={imageApps} alt="Damago-Apps" width="300" />
                            </div>
                        </div>
                        <div className="content-right">
                            <div style={{ paddingRight: position ? "70px" : "0px", paddingLeft: position ? "0px":"70px" }}>
                                <div className="sub-title-2">
                                    <div className="title-company-name-2">DAMOGO</div>
                                    <div className="title-content-2">{untukSiapa}</div>
                                </div>
                                <div className="content-2">{content}</div>
                                <button className="btn btn-primary-2">
                                    Pelajari selengkapnya
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default UntukSiapaSection
