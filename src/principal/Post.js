import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { dataPostActual, errorDataPostActual, clearDataPostActual, errorBorrarPost, postBorrado } from '../acciones';

class Post extends Component {
    
    componentWillMount() {
        this.props.getPost();
    }
    
    componentWillUnmount() {
        this.props.clearPost();
    }
    
    btnEditar(){
        const idPost = this.props.dataPost?this.props.dataPost.id : "";
        if(this.props.routerProps && this.props.routerProps.match.params.user && idPost){            
            return (<Link key='btnEditar' className="btn btn-sm btn-primary" to={`/${this.props.userData.id}/post/${idPost}/editar`}>Editar</Link>);
        }
    }

    btnBorrar(){
        const idPost = this.props.dataPost?this.props.dataPost.id : "";
        if(this.props.routerProps && this.props.routerProps.match.params.user && idPost){ 
            return (<button key='btnBorrar' className="btn btn-sm btn-danger" onClick={()=>{ this.props.eliminarPost(idPost,this.props.userData)}}>Borrar</button> );
        }
    }

    msgEliminacion(){
        if(this.props.mensajeEliminacionPost){
            return <div key='msgEliminacion'>{this.props.mensajeEliminacionPost}</div>
        }
    }

    render() {
        return (
            <div>
                <h4>{this.props.dataPost?this.props.dataPost.title:""}</h4>
                <div className="cuerpo-post">
                {this.props.dataPost?this.props.dataPost.body:""}
                </div>
                {this.msgEliminacion()}
                {this.btnEditar()} {this.btnBorrar()}
            </div>
        );
    }
}

const mapStateToProps = (state,ownProps)=>{
    return({
        userData: state.userData,
        dataPost: state.dataPost,
        routerProps: ownProps,
        mensajeEliminacionPost: state.mensajeEliminacionPost
    });
}
const mapDispatchToProps = (dispatch, ownProps)=>{
    return({
        getPost : ()=>{
            axios.get("https://blog-api-u.herokuapp.com/v1/posts/"+ownProps.match.params.id)
            .then((resp)=>{
                dispatch(dataPostActual(resp.data));
            })
            .catch((data)=>{
                dispatch(errorDataPostActual());
            });
        },
        clearPost :()=>{
            dispatch(clearDataPostActual());
        },
        eliminarPost: (idPost,userData)=>{
            axios.delete(`https://blog-api-u.herokuapp.com/v1/posts/${idPost}`,
            { headers: {'Authorization':'Bearer'+userData.jwt} })
            .then((resp)=>{
                dispatch(postBorrado("Post Borrado Correctamente"));
                setTimeout(()=>{
                    ownProps.history.push(`/${userData.id}/posts`);
                },2000)
            })
            .catch((data)=>{
                dispatch(errorBorrarPost("Error al intentar borrar el post"));
            });
        }
    });
}


export default connect(mapStateToProps,mapDispatchToProps)(Post);