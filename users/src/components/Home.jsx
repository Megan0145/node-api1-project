import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import { Link } from 'react-router-dom';

export function Home({getUsers,users, deleteUser}){

    useEffect(() => {
        getUsers()
    },[getUsers])


    if(!users){
        return <p>Loading...</p>
    }
    return(
        <div>
            <h1>All Users</h1>
            {users.map(user => {
                return(
                    <div key={user.id}>
                        <h3>{user.name}</h3>
                        <p>{user.bio}</p>
                        {console.log(user)}
                        <button onClick={() => deleteUser(user.id)}>Delete User</button>
                        <Link to={`updateuser/${user.id}`}>Update User</Link>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
      users: state.users.users
    };
  };

export default connect(mapStateToProps, actionCreators)(Home)