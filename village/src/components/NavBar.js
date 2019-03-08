import React from 'react';
import { NavLink } from 'react-router-dom';
import 'tachyons';

class NavBar extends React.Component {
    render() {
        return (
            <header>
                <NavLink className='mr2' to="/">Home</NavLink>
                <NavLink to="/smurf-form">Add</NavLink>
            </header>
        )
    }
}

export default NavBar;