import React, { Component } from 'react'
import wa from './assets/images/wa.png';

export class FloatingButton extends Component {
    render() {
        return (
            <button className="Fab">
                <img src={wa} alt="whatsapp" />
            </button>
        )
    }
}

export default FloatingButton
