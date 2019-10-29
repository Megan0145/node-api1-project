import React from "react";
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import AddUser from './AddUser';
import UpdateUser from './UpdateUser';

export function Navbar() {
  return (
    <div>
      <nav>
          <Link to='/'>Home</Link>
          <Link to='/adduser'>Add User</Link>
      </nav>
      <main>
          <Route exact path='/' component={Home} />
          <Route exact path='/adduser' component={AddUser} />
          <Route exact path='/updateuser:id' component={UpdateUser} />
      </main>
    </div>
  );
}
export default connect(state=>state, {})(Navbar)