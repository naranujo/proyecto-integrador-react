import React, {Component} from 'react';
import Card from '../Card/Card';

class CardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: undefined,
            count: 0
        }
    }
    componentDidMount() {
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/2/tracks&top?limit=10')
            .then(response => response.json())
            .then(data => {
                this.setState({datos: data})
            })
            .catch(e => {console.log(e)})
    }
    componentDidUpdate() {
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/2/tracks&top?limit=${(this.state.count+1) * 10}`)
            .then( response => response.json() )
            .then( data => this.setState({
                datos: data
            }))
            .catch( error => console.log(error) )
    }
    cargarMasTarjetas() {
        this.setState({
            count: this.state.count + 1
        })
    }
    eliminarTarjeta(id) {
        let cancionesFiltradas = [];
        cancionesFiltradas = this.state.datos.data.filter(unaCancion => unaCancion.id !== id);
        this.setState ({
            datos: cancionesFiltradas
        })
    }
    render() {
        return (
            <>
                <button type="button" className="btn-cargarMasTarjetas" onClick={() => {this.cargarMasTarjetas()}}>Cargar más tarjetas</button>
                <section className="card-container">
                    {
                        this.state.datos === undefined?

                        <img src="./images/carga.gif" />:

                        this.state.datos.data.map((data,idx) => {
                            return(
                                <Card image={data.md5_image} title={data.title_short} artist={data.artist.name} album={data.album.title} duration={data.duration} rank={data.rank} id={data.id} eliminarTarjeta={(id) => {this.eliminarTarjeta(id)}} />
                            )
                        })
                    }
                </section>
            </>
        )
    }
}

export default CardContainer;