import React, {useState} from 'react';
import logo from './images/no_background.png';
import jerk_wrap from './images/jw.jpeg';
import salmon_bites from './images/sb.jpeg';
import chicken_hibachi_burrito from './images/chb.jpeg';


function genId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}

const passiontmenu = [
    {id: genId(), item: "Jerk Chicken Wrap w/ Chips", description: "Lettuce, tomatoes, red onions, cheese, jerk ranch", price: "11.00", image: jerk_wrap},
    {id: genId(), item: "Crab Fried Rice", description: "Contains Mushrooms", price: "21.00", image: logo},
    {id: genId(), item: "Salmon Bites", description: "Crispy, southern fried salmon bites with a side of remoulade sauce", price: "13.00", image: salmon_bites},
    {id: genId(), item: "Chicken Hibachi Burrito", description: "Hibachi fried rice and veggies, meat choice, yum yum sauce packed into a burrito", price: "15.00", image: chicken_hibachi_burrito}
]

const MenuItem = ({ item, addToCart }) => {
    return (
        <div style={styles.container}>
            <div style={styles.menuItem}>
                <img src={item.image} alt={item.name} style={styles.menuItemImage} />
                <div style={styles.menuItemDetails}>
                    <p style={{fontSize: "larger"}}>{item.item}</p>
                    <p>{item.description}</p>
                    <span className="menu-item-price">${item.price}    </span>
                    <button onClick={() => addToCart(item)} className="add-to-cart-button">
                        Add to Cart
                    </button>
            </div>
      </div>
        </div>
    );
}

const Menu = ({ addToCart }) => {
    const [menuItems] = useState(passiontmenu);
  
    return (
      <div className="menu">
        {menuItems.map(item => (
          <MenuItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    );
  };

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

    menuList: {
        listStyleType: 'none',
        padding: 0,
    },


    menuItem: {
        display: "inline-flex",
        alignItems: "center",
        marginBottom: "1rem",
        padding: "10px",
        backgroundColor: "#ead7db",
        border: "1px solid #dddddd",
        borderRadius: "5px",
        width: "50%",
    },
      
    menuItemImage: {
        width: "100px",
        height: "100px",
        objectFit: "cover",
        borderRadius: "5px",
        marginRight: "20px",
    },
    menuItemDetails: {
        flex: "1",
    }
      
}

export default Menu;
