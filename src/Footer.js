import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>&copy; 2024 Passion T Plates LLC. All rights reserved.</p>
        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: '#262626',
        padding: '15px',
        textAlign: 'center',
        marginTop: 'auto',
        color: "#ead7db",
        boxShadow: "0px -40x 20px -20px #262626",
    },
}

export default Footer;
