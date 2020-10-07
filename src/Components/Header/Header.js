import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../Images/Logo.png'
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div className = "header" >
            <nav className="nav">
                <ul>
                    <li>
                        <img  className="logo" src={logo} alt=""/>
                    </li>
                    <li>
                        <input className="input" type="text" placeholder = "Search you destination" />
                    </li>
                    <li>
                        <Link to="/home">News</Link>
                    </li>
                    <li>
                        <Link to="/destination">Destination</Link>
                    </li>
                    <li>
                        <Link to="/searchingArea">Blog</Link>
                    </li>
                    <li>
                        <Link to="/searchingArea">Contact</Link>
                    </li>
                    <li>
                        <Link> {loggedInUser.name} </Link>
                    </li>
                    <li>
                        <Button href = "/login" > Login</Button> 
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;