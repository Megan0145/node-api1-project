import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

export function UpdateUser(props){
    return(
        <div>
            UpdateUser
        </div>
    );
}
export default connect(state=>state, actionCreators)(UpdateUser)