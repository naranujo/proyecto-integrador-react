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
        })
        
    }
    preventDefault(event){
        event.preventDefault();
        if(this.state.value !== '') {
            this.props.filtrar(this.state.value)
        }
    }
    render(){
        return(
            <form onSubmit={(event)=>this.preventDefault(event)} className="formulario-filtrado"> 
                <input onInput={(cambios)=>this.obtenerDatos(cambios)} type="text" placeholder='Filtrar' value={this.state.value}/>
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
        )
    }

    
}

export default Buscador;


