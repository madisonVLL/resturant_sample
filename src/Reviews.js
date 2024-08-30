import React from 'react';
import { ElfsightWidget } from 'react-elfsight-widget';

const Reviews = () => {
    return (
        <div style={styles.container}>
            <iframe src='https://widgets.sociablekit.com/instagram-feed/iframe/25456133' frameborder='0' width='100%' height='1000'></iframe>
            <iframe src='https://cd579cf77c8b43d4bab0c7818c9925d2.elf.site' width='100%' height='1000' frameborder='0'></iframe>
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

export default Reviews;