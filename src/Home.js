import React from 'react';

const Home = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Welcome to Passion T Plates</h2>
            <p style={styles.text}></p>
        </div>
    );
}

const styles = {
    container: {
        backgroundImage: 'url(https://example.com/beach.jpg)', /* Replace with an actual beach image URL */
        backgroundSize: 'cover',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textShadow: '2px 2px 4px #000',
    },
    header: {
        fontSize: '48px',
        marginBottom: '20px',
    },
    text: {
        fontSize: '24px',
    }
}

export default Home;
