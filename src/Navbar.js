import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from './images/no_background.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/fa0';
import { hover } from '@testing-library/user-event/dist/hover';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav style={styles.navbar}>
            <Link to="/" style={styles.link}><img alt={"Passion T Plates Logo"} 
            src={logo} style={styles.img}></img></Link>
            <div className="menu-icon" onClick={toggleMenu}>
                <FontAwesomeIcon icon="fa-solid fa-bars" />
            </div>
            <div style={styles.links}>
                <Link to="/menu" style={styles.link}><i>Menu</i></Link>
                <Link to="/reviews" style={styles.link}><i>Reviews</i></Link>
                <Link to="/order" style={styles.link}><i>Order</i></Link>
                <Link to="/hours" style={styles.link}><i>Hours</i></Link>
                <Link to="/about-us" style={styles.link}><i>About Us</i></Link>
            </div>
        </nav>
    );
}

const styles = {
    navbar: {
        backgroundColor: '#262626',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: "#ff48a5",
        boxShadow: "0 20px 40px rgba(38,38,38,.7)"
        
    },
    links: {
        display: 'flex',
        gap: '15px',
    },
    link: {
        color: "#ead7db",
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: "1.5em"
    },
    img: {
        minWidth: "100px",
        width: "33%",
    }
}

export default Navbar;
