import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

export function AddUser(props){
    return(
        <div>
            AddUser
        </div>
    );
}
export default connect(state=>state, actionCreators)(AddUser)