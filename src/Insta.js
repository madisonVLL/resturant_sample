import React from "react";
import "./gallery.css";

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

export default Insta