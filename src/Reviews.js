import React from 'react';
import { ElfsightWidget } from 'react-elfsight-widget';
import { InstagramEmbed } from 'react-social-media-embed';
import "./gallery.css"


const instagramLinks = ["https://www.instagram.com/p/C3t6XMttPT3/?hl=en", "https://www.instagram.com/p/Ct3zdRQtBkM/?hl=en", "https://www.instagram.com/p/C6ymdvSrAfr/?hl=en", "https://www.instagram.com/p/C-8daTFvaBl/?hl=en",
    "https://www.instagram.com/p/C-4FI9hN0xH/?hl=en", "https://www.instagram.com/p/C-lpqtYPtj8/?hl=en", "https://www.instagram.com/p/C6oyBnCPvg8/?hl=en", "https://www.instagram.com/p/C9XVwkRRMkI/?hl=en", "https://www.instagram.com/p/C9DVt8zvWH5/?hl=en",
    "https://www.instagram.com/p/C9ArahPvfc3/?hl=en", "https://www.instagram.com/p/C80IoqOv-Ra/?hl=en", "https://www.instagram.com/p/C8us_Ixv98Y/?hl=en"
 ]


const Reviews = () => {
    return (
        <div style={styles.container}>
            <h2>Instagram Reviews</h2>
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
            <h2>Google Reviews</h2>
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