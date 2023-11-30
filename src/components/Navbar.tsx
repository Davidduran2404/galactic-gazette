import /*React,*/ { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import '../styles/Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        setButton(window.innerWidth > 960);
    }

    window.addEventListener('resize', showButton);

    useEffect(() => {
        showButton();
    }, [showButton])

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <i className="fa-solid fa-user-astronaut"></i>
                        GALACTIC GAZETTE
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/magazines' className='nav-links' onClick={closeMobileMenu}>
                                Magazines
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/log-in' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Log in
                            </Link>
                        </li>
                    </ul>
                    {button && <Button style='btn-outlined'>LOG IN</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;