import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class MisPosts extends Component {
    getIdUser(){
        const idUser = this.props.userData?this.props.userData.id:"";
        return idUser;
    }
    render() {
        return (
            <div>
                <Link to={`/${this.getIdUser()}/crear`}>Crear Posts</Link>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return({
        userData: state.userData
    });
};
const mapDispatchToProps = (dispatch)=>{
    return({
        
    });
}
export default connect(mapStateToProps,mapDispatchToProps)(MisPosts);