import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

/* instagram links */
const instagramLinks = ["https://www.instagram.com/p/C3t6XMttPT3/?hl=en", "https://www.instagram.com/p/Ct3zdRQtBkM/?hl=en", "https://www.instagram.com/p/C6ymdvSrAfr/?hl=en"]

const Home = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Welcome to Passion T Plates</h1>
            <p style={styles.text}></p>
            <div style={{display: "inline-flex"}}>
                    {instagramLinks.map(item => (
                    <InstagramEmbed url={item} style={{paddingTop: "1em"}} width={300} height={800} captioned />
                ))}
            </div>

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
