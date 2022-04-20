import React, {Component} from 'react';
import Card from '../Card/Card';
import Buscador from '../Buscador/Buscador';

class CardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            count: 0,
            grid: true,
            busqueda: false
        }
    }
    componentDidMount() {
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=8')
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
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=${(this.state.count) + 8}`)
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
                    count: this.state.count + 8,
                    busqueda: false
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
            datos: cancionesFiltradas,
        })
    }

    filtrar(datos){
        let musicaFiltrada = []
        musicaFiltrada = this.state.datos.filter(Musica=>Musica.title_short.toLowerCase().includes(datos.toLowerCase()))
        this.setState({
            datos: musicaFiltrada,
            busqueda: true
        })
    }
    render() {
        return (
            <React.Fragment>
                {
                    this.state.grid ?
                    <React.Fragment>
                        <section className="section-cargarMas">
                            {
                                !this.state.busqueda && this.state.datos.length !== 0 ?
                                <Buscador filtrar={(datos)=>this.filtrar(datos)}/> :
                                <React.Fragment></React.Fragment>
                            }
                            <div>
                                <button type="button" className="btn-grid selected" onClick={() => {this.vistaGrid()}} ><i className="fas fa-th"></i></button>
                                <button type="button" className="btn-list" onClick={() => {this.vistaLista()}} ><i className="fas fa-align-justify"></i></button>
                                <button type="button" className="btn-cargarMasTarjetas" onClick={() => {this.cargarMasTarjetas()}}>Cargar más tarjetas</button>
                            </div>
                        </section>
                        <section className="card-container-grid">
                            {
                                this.state.datos.length === 0 && this.state.busqueda === false ?
                                <img className="gif-carga" src="./images/carga.gif" alt="gif de carga" /> :
                                this.state.datos.length !== 0 ?
                                this.state.datos.map((data,idx) => {
                                    return(
                                        <Card className="grid" image={data.md5_image} title={data.title_short} artist={data.artist.name} album={data.album.title} duration={data.duration} rank={data.rank} id={data.id} eliminarTarjeta={(id) => {this.eliminarTarjeta(id)}} key={data.id+idx} />
                                    )
                                }):
                                <p>No hay resultados para tu busqueda</p>                           
                            }
                        </section>
                    </React.Fragment> :
                    <React.Fragment>
                        <section className="section-cargarMas">                            
                            {
                                !this.state.busqueda && this.state.datos.length !== 0 ?
                                <Buscador filtrar={(datos)=>this.filtrar(datos)}/> :
                                <React.Fragment></React.Fragment>
                            }
                            <div>
                                <button type="button" className="btn-grid" onClick={() => {this.vistaGrid()}} ><i className="fas fa-th"></i></button>
                                <button type="button" className="btn-list selected" onClick={() => {this.vistaLista()}} ><i className="fas fa-align-justify"></i></button>
                                <button type="button" className="btn-cargarMasTarjetas" onClick={() => {this.cargarMasTarjetas()}}>Cargar más tarjetas</button>
                            </div>
                        </section>
                        <section className="card-container-lista">
                            {
                                this.state.datos.length === 0 && !this.state.busqueda ?
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