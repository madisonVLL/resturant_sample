import React from 'react';

const AboutUs = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.header}>About Us</h2>
            <p style={styles.text}>Aloha Eats is a family-owned Hawaiian restaurant bringing the spirit of the islands to the mainland. Enjoy authentic dishes prepared with love and the freshest ingredients.</p>
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
        textAlign: 'center',
    },
    header: {
        fontSize: '36px',
        marginBottom: '20px',
        color: '#264653',
    },
    text: {
        fontSize: '18px',
    }
}

export default AboutUs;
