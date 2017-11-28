import React, { Component } from 'react';
import {reset} from 'redux-form';
import EditarPostForm from '../forms/EditarPostForm';
import axios from 'axios';
import {connect} from 'react-redux';

class EditarPost extends Component {
    
    onSubmitForm = (data) => {
        console.log(this.props.userData);
    }

    render() {
        return (
            <div>
                <EditarPostForm  onSubmit={this.onSubmitForm} />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
       
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        

    };
}


export default connect(mapStateToProps,mapDispatchToProps)(EditarPost);