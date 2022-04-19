import React, {Component} from 'react';

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: props,
            ver_mas: false
        }
    }
    verMas() {
        this.setState({
            ver_mas: true
        })
    }
    verMenos() {
        this.setState({
            ver_mas: false
        })
    }
    render() {
        return (
            <article className={this.props.className}>
                <main>
                    {
                        this.props.className === 'grid'?
                        <React.Fragment>
                            <button type="button" className="btn-eliminarTarjeta" onClick={() => {this.props.eliminarTarjeta(this.props.id)}}><i className="fas fa-times"></i></button>
                            <img src={`https://e-cdns-images.dzcdn.net/images/cover/${this.state.status.image}/500x500-000000-80-0-0.jpg`} alt="" />
                            <section>
                                <h3>{this.state.status.title}</h3>
                                <p className="description">{`${this.state.status.artist}`}</p>
                            </section>
                            {
                                this.state.ver_mas === false ?
                                <React.Fragment>
                                    <section className="aditional-info" style={{display:'none'}}>
                                        <p>{`Album: ${this.state.status.album}`}</p>                                        
                                        <p>{`Duración: ${this.state.status.duration} Rank: ${this.state.status.rank}`}</p>                    
                                    </section>
                                    <button type="button" className="btn-verMas" onClick={() => {this.verMas()}}>Ver más</button>
                                </React.Fragment> :
                                <React.Fragment>
                                    <section className="aditional-info" style={{display:'block'}}>
                                        <p>{`${this.state.status.album}`}</p>                                        
                                        <p>{`Duración: ${this.state.status.duration} Rank: ${this.state.status.rank}`}</p>                    
                                    </section>
                                    <button type="button" className="btn-verMenos" onClick={() => {this.verMenos()}}>Ver menos</button>
                                </React.Fragment>
                            }
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <img src={`https://e-cdns-images.dzcdn.net/images/cover/${this.state.status.image}/500x500-000000-80-0-0.jpg`} alt="" />
                            <section className="description-fragment">
                                <h3>{this.state.status.title}</h3>
                                <p className="description">{`${this.state.status.artist}`}</p>
                            </section>
                            {
                                this.state.ver_mas === false ?
                                <React.Fragment>
                                    <section className="aditional-info" style={{display:'none'}}>
                                        <p>{`${this.state.status.album}`}</p>                                        
                                        <p>{`Duración: ${this.state.status.duration} Rank: ${this.state.status.rank}`}</p>                    
                                    </section>
                                    <section className="card-buttons">
                                    <button type="button" className="btn-eliminarTarjeta" onClick={() => {this.props.eliminarTarjeta(this.props.id)}}><i className="fas fa-times"></i></button>
                                            <button type="button" className="btn-verMas" onClick={() => {this.verMas()}}>Ver más</button>
                                    </section>
                                </React.Fragment> :
                                <React.Fragment>
                                    <section className="aditional-info" style={{display:'block'}}>
                                        <p>{`${this.state.status.album}`}</p>                                        
                                        <p>{`Duración: ${this.state.status.duration} Rank: ${this.state.status.rank}`}</p>                    
                                    </section>
                                    <section className="card-buttons">
                                    <button type="button" className="btn-eliminarTarjeta" onClick={() => {this.props.eliminarTarjeta(this.props.id)}}><i className="fas fa-times"></i></button>
                                        <button type="button" className="btn-verMenos" onClick={() => {this.verMenos()}}>Ver menos</button>
                                    </section>
                                </React.Fragment>
                            }
                        </React.Fragment>
                    }
                </main>
            </article>
        )
    }
}

export default Card;
