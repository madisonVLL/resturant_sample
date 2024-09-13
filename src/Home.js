import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import "./gallery.css"
import video1 from "./videos/Passion_T_1.mp4"
import video2 from "./videos/Passion_T_2.mp4"
import video3 from "./videos/Passion_T_3.mp4"
import HoverVideo from './VideoHover';
import "./HoverVideo.css"

/* instagram links */
const instagramLinks = ["https://www.instagram.com/p/C3t6XMttPT3", "https://www.instagram.com/p/Ct3zdRQtBkM", "https://www.instagram.com/p/C6ymdvSrAfr"]

const instagramVideos = [{id: 0, src: video1, link: instagramLinks[0]},
{id: 0, src: video2, link: instagramLinks[1]},
{id: 2, src: video3, link: instagramLinks[2]}]
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

const VideoGallery = () => {
    return (
            <div className="video-gallery">
              {instagramVideos.map((video) => (
                <HoverVideo key={video.id} videoSrc={video.src} />
              ))}
            </div>
    )

}

const HomeTitle = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Welcome to Passion T Plates</h1>
            <p style={styles.tagline}>Where Heritage & Love Meets Flavor</p>
        </div>  
    )
}
const Home = () => {
    return (
        <div>
            <HomeTitle />
            <VideoGallery />
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
        marginBottom: "100px"
    },
    tagline: {
        fontSize: "36px",
        fontStyle: "italic"
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


