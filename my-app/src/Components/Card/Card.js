import React, {Component} from 'react';

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: props
        }
    }
    eliminarTarjeta(){
        alert("Tarjeta eliminada")
    }
    render() {
        return (
            <article>
                <main>
                    <button type="button" className="btn-eliminarTarjeta" onClick={() => {this.eliminarTarjeta()}}><i className="fas fa-times"></i></button>
                    <img src={`https://e-cdns-images.dzcdn.net/images/cover/${this.state.status.image}/500x500-000000-80-0-0.jpg`} alt="" />
                    <h3>{this.state.status.title}</h3>
                    <p className="description">{`${this.state.status.artist} - ${this.state.status.album}`}</p>
                    <section className="aditional-info">
                        <p>{`Duración: ${this.state.status.duration} Rank: ${this.state.status.rank}`}</p>                    
                    </section>
                    <a href="*">Ver más</a>
                </main>
            </article>
        )
    }
}

export default Card
