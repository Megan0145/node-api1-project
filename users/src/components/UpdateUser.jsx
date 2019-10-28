import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import axios from 'axios';

export function UpdateUser(props){
const [user, setUser] = useState({});
    useEffect(()=>{
        console.log(props)
        axios.get(`http://localhost:5000/api/users${props.match.params.id}`)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    return(
        <div>
            UpdateUser
        </div>
    );
}
export default connect(state=>state, actionCreators)(UpdateUser)