import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { dataPostActual, errorDataPostActual, clearDataPostActual } from '../acciones';

class Post extends Component {
    
    componentWillMount() {
        this.props.getPost();
    }
    
    componentWillUnmount() {
        this.props.clearPost();
    }
    
    editar(){
        if(this.props.routerProps && this.props.routerProps.match && this.props.routerProps.match.params.user){
            const idPost = this.props.dataPost?this.props.dataPost.id : "";
            return (<Link key='btnEditar' to={`/${this.props.userData.id}/post/${idPost}/editar`}>Editar</Link>);
        }
    }

    render() {
        return (
            <div>
                <h4>{this.props.dataPost?this.props.dataPost.title:""}</h4>
                <div>
                {this.props.dataPost?this.props.dataPost.body:""}
                </div>
                {this.editar()}
            </div>
        );
    }
}

const mapStateToProps = (state,ownProps)=>{
    return({
        userData: state.userData,
        dataPost: state.dataPost,
        routerProps: ownProps
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
        }
    });
}


export default connect(mapStateToProps,mapDispatchToProps)(Post);