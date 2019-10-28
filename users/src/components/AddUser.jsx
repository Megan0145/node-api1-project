import React, { useRef } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

export function AddUser({addUser}){
    const name = useRef('');
    const bio = useRef('');
    return(
        <div>
           <form>
               <input placeholder='Name' ref={name}/>
               <input placeholder='Bio' ref={bio}/>
               <button onClick={(e) => {e.preventDefault(); addUser({name: name.current.value, bio: bio.current.value})}}>Add User</button>
           </form>
        </div>
    );
}
export default connect(state=>state, actionCreators)(AddUser)