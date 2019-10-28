import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

export function Home({getUsers}){
    return(
        <div>
            Home
        </div>
    )
}

export default connect(state=>state, actionCreators)(Home)