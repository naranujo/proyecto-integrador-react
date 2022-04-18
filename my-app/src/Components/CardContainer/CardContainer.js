import React, {Component} from 'react';
import Card from '../Card/Card';

class CardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: undefined,
            count: 0,
            grid: true,
        }
    }
    componentDidMount() {
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/2/tracks&top?limit=8')
            .then(response => response.json())
            .then(data => {
                this.setState({datos: data})
            })
            .catch(e => {console.log(e)})
    }
    componentDidUpdate() {
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/2/tracks&top?limit=${(this.state.count+1) * 8}`)
            .then( response => response.json() )
            .then( data => this.setState({
                datos: data
            }))
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
            <React.Fragment>
                {
                    this.state.grid ?
                    <React.Fragment>
                        <section className="section-cargarMas">
                            {/* poner boxShadow en el css y acceder a través de una toggle class */}
                            <button style={{boxShadow: "1px 1px 1px black"}} type="button" className="btn-grid" onClick={() => {this.vistaGrid()}} ><i className="fas fa-th"></i></button>
                            <button type="button" className="btn-list" onClick={() => {this.vistaLista()}} ><i className="fas fa-align-justify"></i></button>
                            <button type="button" className="btn-cargarMasTarjetas" onClick={() => {this.cargarMasTarjetas()}}>Cargar más tarjetas</button>
                        </section>
                        <section className="card-container-grid">
                            {
                                this.state.datos === undefined ?
                                <p>Cargando...</p> :
                                this.state.datos.data.map((data,idx) => {
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
                            {/* poner boxShadow en el css y acceder a través de una toggle class */}
                            <button style={{boxShadow: "1px 1px 1px black"}} type="button" className="btn-list" onClick={() => {this.vistaLista()}} ><i className="fas fa-align-justify"></i></button>
                            <button type="button" className="btn-cargarMasTarjetas" onClick={() => {this.cargarMasTarjetas()}}>Cargar más tarjetas</button>
                        </section>
                        <section className="card-container-lista">
                            {
                                this.state.datos === undefined ?
                                <img src="./images/carga.gif" alt="gif de carga" /> :
                                this.state.datos.data.map((data,idx) => {
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