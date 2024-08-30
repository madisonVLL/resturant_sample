import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>&copy; 2024 Aloha Eats. All rights reserved.</p>
        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: '#f4a261', /* Sandy color */
        padding: '15px',
        textAlign: 'center',
        marginTop: 'auto',
    },
}

export default Footer;
