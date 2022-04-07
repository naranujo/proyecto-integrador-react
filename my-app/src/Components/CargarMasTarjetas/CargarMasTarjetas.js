import React, {Component} from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
    }
    cargarMasTarjetas() {
        
    }
    render() {
        return (
            <button type="button" className="btn-cargarMasTarjetas" onClick={() => {this.cargarMasTarjetas()}}>Cargar más tarjetas</button>
        )
    }
}

export default Header;
