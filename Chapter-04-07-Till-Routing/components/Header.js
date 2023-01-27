import { useState } from 'react';
import { Link } from 'react-router-dom';


import Logo from '../assets/images/foodvilla.png';

const AppTitle = () => {
    return <a href='/'>
        <img src={Logo} className='logo' alt='Logo' />
    </a>
}

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLogIn = () => {
        setIsLoggedIn(
            previousState => !previousState,
        );
    }

    const loginButton = <button onClick={toggleLogIn}>Log In</button>
    const logoutButton = <button onClick={toggleLogIn}>Log Out</button>

    const toggledButton = isLoggedIn ? logoutButton : loginButton;

    return <div className='header'>
        <AppTitle />
        <div className='nav-items'>
            <ul>
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/about'>
                        About Us
                    </Link>
                </li>
                <li>
                    <Link to='/contact'>
                        Contact Us
                    </Link>
                </li>
                <li>Cart</li>
            </ul>
        </div>
        { toggledButton }
    </div>
}

export default Header;
