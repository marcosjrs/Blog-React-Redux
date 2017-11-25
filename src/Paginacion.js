import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import { postTotales, paginaActual } from './acciones';

class Paginacion extends Component {
    paginas(){
        //El objetivo es mostrar el enlace a 4 paginas anteriores y 5 enlaces a las paginas posteriores. En caso  de que sea posible.
        var numPostsTotales = this.props.paginacion.postTotales;
        var numeroDePostPorPagina = 3;
        var numeroDePaginasTotales = Math.ceil(numPostsTotales/numeroDePostPorPagina);

        var primerNumDePaginaActual = 1;
        var ultimoNumDePaginaActual = 10; //ultimo numero de pagina que mostraría actualmente (al que el usuario puede ir en la paginacion actual)

        if(numeroDePaginasTotales<=10){
            ultimoNumDePaginaActual = numeroDePaginasTotales; //como hay menos de diez "paginas", cogemos la ultima
        }else{
            if(this.props.paginacion.paginaActual >= (numeroDePaginasTotales - 4) ){ // si sobrepasamos mostramos solo los últimos 10
                primerNumDePaginaActual = numeroDePaginasTotales -9;
                ultimoNumDePaginaActual = numeroDePaginasTotales;
            }else if (this.props.paginacion.paginaActual - 4 <= 0 ) {// si intentamos retroceder demasiado, mostamos solo las primeras 10
                primerNumDePaginaActual = 1;
                ultimoNumDePaginaActual = 10;
            }else{
                primerNumDePaginaActual = this.props.paginacion.paginaActual - 4;
                ultimoNumDePaginaActual = this.props.paginacion.paginaActual + 5;
            }
        }


        var listaLi = [];

        for(var n=primerNumDePaginaActual;n<=ultimoNumDePaginaActual;n++){
            listaLi.push(
            <li key={"li"+n} className={this.props.paginacion.paginaActual===n?'active':''}><a id={n} key={n} onClick={(e)=>{ this.props.setPaginaActual(e.target.id)}}>{n}</a></li>
            );
        }
        
        return ( <ul className="pagination">{listaLi}</ul> );

    };
    componentDidMount() {
        this.props.getNumPostsTotales(); //lo obtiene de un servicio, que en respuesta, seteará en el store el numero...
    }
    
    render () {
        return (
            <div>
                {this.paginas()}
            </div>
        );
    }
}

var mapStateToProps = (state) => {
    return({
        paginacion: state.paginacion
    });

}

var mapDispatchToProps = (dispatch) => {
    return({
        getNumPostsTotales:()=>{
            axios.get("https://blog-api-u.herokuapp.com/v1/totalposts")
            .then(function(resp){
                dispatch(postTotales(resp.data))
            })
            .catch(function(e){
                console.log(e)
            });
        },
        setPaginaActual: (numPagina)=>{
            dispatch( paginaActual(numPagina) );
        }
    });
}

export default connect(mapStateToProps,mapDispatchToProps)(Paginacion);