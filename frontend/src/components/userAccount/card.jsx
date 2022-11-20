import React, { Component } from 'react'

export class CardSection extends Component {
    render() {
        return (
            <div>
                <section className="row m-3 mb-0" style={{ marginTop: ' 2px !important' }}>
                <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(48, 51, 78)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Current Account Value</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
                                {/* ${this.props.atl} */}
                                $450.59
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(48, 51, 78)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Total Property Value</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
                                {/* ${this.props.ath} */}
                                $450.42
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(48, 51, 78)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Total Rent Earn</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
                                {/* ${this.props.atl} */}
                                $1.54
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default CardSection