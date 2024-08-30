import React from 'react';

const Order = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Order Online</h2>
            <p style={styles.text}>Place your order for pickup or delivery and enjoy our Hawaiian delights at home!</p>
            <button style={styles.button}>Order Now</button>
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
        marginBottom: '20px',
    },
    button: {
        backgroundColor: '#2a9d8f',
        color: '#fff',
        padding: '10px 20px',
        fontSize: '18px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    }
}

export default Order;
