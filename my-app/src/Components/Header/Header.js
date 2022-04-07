import React, {Component} from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
    }
    vistaGrid() {
        alert("Vista grid activada")
    }
    vistaLista() {
        alert("Vista lista activada")
    }
    render() {
        return (
            <header>
                <h1>Título/ Nombre de la app</h1>
                <section>
                    <button type="button" className="btn-grid" onClick={() => {this.vistaGrid()}} ><i className="fas fa-th"></i></button>
                    <button type="button" className="btn-list" onClick={() => {this.vistaLista()}} ><i className="fas fa-align-justify"></i></button>
                    <form action="">
                        <input type="text" name="search" id="" placeholder="Search" />
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </form>
                </section>
            </header>
        )
    }
}

export default Header;
