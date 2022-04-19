import React, {Component} from 'react';
import Card from '../Card/Card';

class CardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            count: 0,
            grid: true
        }
    }
    componentDidMount() {
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/2/tracks&top?limit=8')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    datos: data.data,
                    count: 8
                })
            })
            .catch(e => {console.log(e)})
    }
    cargarMasTarjetas() {
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/2/tracks&top?limit=${(this.state.count) + 8}`)
            .then( response => response.json() )
            .then( data => {
                let nuevos = data.data
                for(let i = 0; i < data.data.total; i++) {
                    for(let j = this.state.datos.total; j > 0; i--) {
                        if(data.data[i].id === this.state.datos[j].id) {
                            nuevos.slice(data.data[i],1)
                        }
                    }
                }
                this.setState({
                    datos: nuevos,
                    count: this.state.count + 8
                })
            })
            .catch( error => console.log(error) )
    }
    vistaGrid() {
        this.setState({
            grid: true,
        })
    }
    vistaLista() {
        this.setState({
            grid: false,
        })
    }
    eliminarTarjeta(id) {
        let cancionesFiltradas = [];
        cancionesFiltradas = this.state.datos.filter(unaCancion => unaCancion.id !== id);
        console.log(cancionesFiltradas)
        this.setState ({
            datos: cancionesFiltradas
        })
    }
    render() {
        return (
            <React.Fragment>
                {
                    this.state.grid ?
                    <React.Fragment>
                        <section className="section-cargarMas">
                            <button type="button" className="btn-grid selected" onClick={() => {this.vistaGrid()}} ><i className="fas fa-th"></i></button>
                            <button type="button" className="btn-list" onClick={() => {this.vistaLista()}} ><i className="fas fa-align-justify"></i></button>
                            <button type="button" className="btn-cargarMasTarjetas" onClick={() => {this.cargarMasTarjetas()}}>Cargar más tarjetas</button>
                        </section>
                        <section className="card-container-grid">
                            {
                                this.state.datos.length === 0 ?
                                <img className="gif-carga" src="./images/carga.gif" alt="gif de carga" /> :
                                this.state.datos.map((data,idx) => {
                                    return(
                                        <Card className="grid" image={data.md5_image} title={data.title_short} artist={data.artist.name} album={data.album.title} duration={data.duration} rank={data.rank} id={data.id} eliminarTarjeta={(id) => {this.eliminarTarjeta(id)}} key={data.id+idx} />
                                    )
                                })
                            }
                        </section>
                    </React.Fragment> :
                    <React.Fragment>
                        <section className="section-cargarMas">                            
                            <button type="button" className="btn-grid" onClick={() => {this.vistaGrid()}} ><i className="fas fa-th"></i></button>
                            <button type="button" className="btn-list selected" onClick={() => {this.vistaLista()}} ><i className="fas fa-align-justify"></i></button>
                            <button type="button" className="btn-cargarMasTarjetas" onClick={() => {this.cargarMasTarjetas()}}>Cargar más tarjetas</button>
                        </section>
                        <section className="card-container-lista">
                            {
                                this.state.datos.length === 0 ?
                                <img className="gif-carga" src="./images/carga.gif" alt="gif de carga" /> :
                                this.state.datos.map((data,idx) => {
                                    return(
                                        <Card className="lista" image={data.md5_image} title={data.title_short} artist={data.artist.name} album={data.album.title} duration={data.duration} rank={data.rank} id={data.id} eliminarTarjeta={(id) => {this.eliminarTarjeta(id)}} key={data.id+idx} />
                                    )
                                })
                            }
                        </section>
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }
}

export default CardContainer;