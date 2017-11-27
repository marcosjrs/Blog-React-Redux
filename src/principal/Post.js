import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { dataPostActual, errorDataPostActual, clearDataPostActual } from '../acciones';

class Post extends Component {
    
    componentWillMount() {
        this.props.getPost();
    }
    
    componentWillUnmount() {
        this.props.clearPost();
    }
    
    render() {
        return (
            <div>
                <h4>{this.props.dataPost.title}</h4>
                <div>
                {this.props.dataPost.body}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return({
        dataPost: state.dataPost
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