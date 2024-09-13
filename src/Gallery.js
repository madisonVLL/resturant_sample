import React, { useState, useEffect } from 'react';
import './gallery.css';


/*Images*/
import jerk_wrap from './images/jw.jpeg';
import salmon_bites from './images/sb.jpeg';
import chicken_hibachi_burrito from './images/chb.jpeg'
import big_ben from "./images/menu_item/big_ben.png";
import chicken_pita from "./images/menu_item/chicken_pita.png";
import passion_punch from "./images/menu_item/passion_punch.png";
import salmon_sticks from "./images/menu_item/salmon_sticks.png";
import salmon_salad from "./images/menu_item/salmon_salad.png";
import salmon_wrap from "./images/menu_item/salmon_wrap.png";
import salmon_rice from "./images/menu_item/salmon_rice.png";
import wings from "./images/menu_item/wings.png";
import combo_rice from "./images/menu_item/combination_rice.png";
import founder from "./images/founder.png"
import philly from "./images/menu_item/philly.png"
import logo from "./images/no_background.png"

function genId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}


const PhotoGallery = () => {
  const [photos] = useState([
    { id: genId(), src: founder, alt: "Passion T Plates Founder and Head Chef"},
    { id: genId(), src: salmon_bites, alt: 'Succulent Salmon Bites' },
    { id: genId(), src: wings, alt: 'Juicy Chicken Wings' },
    { id: genId(), src: passion_punch, alt: 'Pleasing Passion Punch' },
    { id: genId(), src: big_ben, alt: 'Big Ben' },
    { id: genId(), src: salmon_sticks, alt: 'Sweet and Spicy Salmon Sticks' },
    { id: genId(), src: combo_rice, alt: 'Combination Fried Rice With Chicken, Shrimp, and Steak' },
    { id: genId(), src: jerk_wrap, alt: 'Jerk Salmon Wrap' },
    { id: genId(), src: chicken_hibachi_burrito, alt: "Chicken Hibatchi Burrito" }

    // Add more images as needed
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [photos.length]);

  return (
 
        <div className="gallery-container">
          {photos.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
  );
};

export default PhotoGallery;
