import React, {Component} from "react";

class Buscador extends Component{
    constructor(props){
        super(props)
        this.state={
            value: '',
        }
    }
   
    obtenerDatos(datos){
        this.setState({
            value: datos.target.value
        }, () => this.props.filtrar(this.state.value))
        
    }
    preventDefault(event){
        event.preventDefault()

    }


    render(){
        return(
            <form onSubmit={(event)=>this.preventDefault(event)}>
                
            <input onChange={(cambios)=>this.obtenerDatos(cambios)} type="text" placeholder='search' value={this.state.value}/>  
            </form>
        )
    }

    
}

export default Buscador;

