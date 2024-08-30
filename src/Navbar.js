import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from './images/no_background.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/fa0';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav style={styles.navbar}>
            <Link to="/" style={styles.link}><img src={logo} style={styles.img}></img></Link>
            <div className="menu-icon" onClick={toggleMenu}>
                <FontAwesomeIcon icon="fa-solid fa-bars" />
            </div>
            <div style={styles.links}>
                <Link to="/menu" style={styles.link}>Menu</Link>
                <Link to="/reviews" style={styles.link}>Reviews</Link>
                <Link to="/order" style={styles.link}>Order</Link>
                <Link to="/hours" style={styles.link}>Hours</Link>
                <Link to="/about-us" style={styles.link}>About Us</Link>
            </div>
        </nav>
    );
}

const styles = {
    navbar: {
        backgroundColor: '#f4a261', /* Sandy color */
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: '#2a9d8f',
        fontSize: '24px',
        fontWeight: 'bold',
    },
    links: {
        display: 'flex',
        gap: '15px',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
    img: {
        minWidth: "150px",
        width: "33%",
    }
}

export default Navbar;
