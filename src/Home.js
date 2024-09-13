import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import "./gallery.css"

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  

/* instagram links */
const instagramLinks = ["https://www.instagram.com/p/C3t6XMttPT3", "https://www.instagram.com/p/Ct3zdRQtBkM", "https://www.instagram.com/p/C6ymdvSrAfr"]

const Insta = () => {
    return (
        <div className="instagram-gallery">
            {instagramLinks.map((url, index) => (
                <div className="instagram-item" key={index}>
                <iframe
                    src={`https://www.instagram.com/p/${url.split("/p/")[1].split("/")[0]}/embed`}
                    width="320"
                    height="400"
                    frameBorder="0"
                    scrolling="no"
                    allowtransparency="true"
                    allow="encrypted-media"
                ></iframe>
                </div>
            ))}
         </div>
    )
}

const HomeTitle = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Welcome to Passion T Plates</h1>
            <p style={styles.text}></p>
        </div>  
    )
}
const Home = () => {
    return (
        <div>
            <HomeTitle />
            <Insta />
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
        fontSize: '70px',
        marginBottom: '20px',
        marginTop: '100px',

    },
    text: {
        fontSize: '24px',
    },
    instagramlink: {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textShadow: '2px 2px 4px #000',
        maxWidth: "fit-content",
        marginLeft: "auto",
        marginRight: "auto",
    }
}

export default Home;

/*
   <div style={styles.instagramlink}>
                {instagramLinks.map(item => (
                <InstagramEmbed url={item} style={{padding: "1rem"}} width={curr_width} height={600}/>
            ))}
        </div> 
 */
