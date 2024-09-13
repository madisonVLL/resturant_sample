import React from 'react';
import PhotoGallery from './Gallery';

const AboutUs = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.header}><i>About Us</i></h2>
            <p style={styles.text}>     Welcome to Passion T Plates, where culinary
                 artistry meets passion and tradition. As a proud Black 
                 woman-owned establishment, we are committed to offering an 
                 upscale dining experience that celebrates the rich diversity of
                  flavors in every bite. Our menu is a carefully crafted fusion 
                  of comfort food favorites and gourmet innovation, featuring 
                  dishes like our signature cheesesteaks, juicy burgers, 
                  succulent fish sandwiches, tender lamb chops, and perfectly 
                  seasoned chicken wings.<br></br><br></br>At Passion T Plates, we 
                  believe in the power of food to bring people together. 
                  Our dishes are prepared with love, using the freshest 
                  ingredients and bold flavors that pay homage to our heritage 
                  while pushing the boundaries of modern cuisine. Whether you're
                   here for a casual meal or a special occasion, we strive to 
                   make every visit a memorable one.<br></br><br></br>Come dine with us 
                   and experience the vibrant energy, warmth, and soul of 
                   Passion T Plates. We can't wait to serve you!</p>
                <br></br>
                <PhotoGallery />
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
        textAlign: "left"
    }
}

export default AboutUs;
