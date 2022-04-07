import React, {Component} from 'react';
import Card from '../Card/Card';

class CardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: undefined
        }
    }
    componentDidMount() {
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/2/tracks&top?limit=12')
            .then(response => response.json())
            .then(data => {
                this.setState({datos: data})
            })
            .catch(e => {console.log(e)})
    }
    componentDidUpdate() {

    }
    render() {
        return (
            <section className="card-container">
                {
                    this.state.datos === undefined?
                    <p>Cargando...</p>:
                    this.state.datos.data.map((data,idx) => {
                        return(
                            <Card image={data.md5_image} title={data.title_short} artist={data.artist.name} album={data.album.title} duration={data.duration} rank={data.rank} />
                        )
                    })
                }
            </section>
        )
    }
}

export default CardContainer;