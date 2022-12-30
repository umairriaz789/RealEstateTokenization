import React, { Component } from 'react'

export class CardFrontend extends Component {
    render() {
        return (
            <div>
                {/* <div className="fs-1 fw-bold m-3 text-Capitalize"
                    style={{ fontFamily: 'NHaasGroteskDSPro-65Md', marginTop: '3px !important', marginBottom: '0px !important' }}>
                    {this.props.coinName}
                </div> */}
                <div>
                    {/* <div className="text-white text-center"
                        style={{ fontFamily: 'NHaasGroteskDSPro-65Md', overflow: 'visible', height: '2px', marginTop: "1%" }}> Current
                        Price</div> */}
                    <div style={{
                        fontFamily: 'NHaasGroteskDSPro-65Md', fontSize: '90px',
                        fontWeight: '700', color: "#b7bdb7", textDecoration: 'none solid rgb(255, 255, 255)',
                        textAlign: 'center'
                    }}>
                        ${this.props.currentPrice}
                        <span>-BUSD</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardFrontend