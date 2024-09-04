import React, {useState} from 'react';

/*Images */
import logo from './images/no_background.png';
import jerk_wrap from './images/jw.jpeg';
import salmon_bites from './images/sb.jpeg';
import chicken_hibachi_burrito from './images/chb.jpeg';
import cashdrop from './images/delivery_logos/cashdrop.png';
import doordash from './images/delivery_logos/doordash.png';
import uberEats from './images/delivery_logos/uber_eats.png';
import grubhub from './images/delivery_logos/grubhub.png';


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

const fullmenu = {
    "Signature Sandwiches": [{id: genId(), item: "The P Sandwich", description: "Italian beef melt, mild ghirardelli peppers, cheese, and mayo.", price: "14.99", image: jerk_wrap},
        {id: genId(), item: "Big Ben Sandwich", description: "Fried catfish, lettuce, tomato, and house-made sauce.", price: "12.99", image: jerk_wrap},
        {id: genId(), item: "Chicken Pita", description: "Grilled chicken pita served with cucumbers, red onions, and our signature sauce.", price: "12.99", image: jerk_wrap},
        {id: genId(), item: "Big Pun Sandwich", description: "Hand Patted Beef Burger and Gyro meat melt. Mild sauce and Tzatziki sauce Comes With Fries Or Chips (Plain Lays)", price: "15.99", image: jerk_wrap}
    ],
    "Philly Cheesesteak": [
        {id: genId(), item: "Salmon Cheesesteak", description: "Bell peppers, onions, mushrooms, mozzarella, and house-made mayo. Avaliable in either jerk or original flavor.", price: "15.00", image: logo},
        {id: genId(), item: "Veggie Cheesesteak", description: "Bell peppers, onions, mushrooms, mozzarella, and house-made mayo. Avaliable in either jerk or original flavor.", price: "15.00", image: logo},
        {id: genId(), item: "Chicken Cheesesteak", description: "Bell peppers, onions, mushrooms, mozzarella, and house-made mayo. Avaliable in either jerk or original flavor.", price: "13.00", image: logo}
    ], 
    "Fried Wings & Fish": [
        {id: genId(), item: "Fried Chicken Wings", description: "Crispy, southern fried chicken wings offered in 6, 10, and 20 count varieties.", price: "Varies", image: logo},
        {id: genId(), item: "Fried Catfish", description: "Crispy, southern fried catfish offered in 6, 10, and 20 count varieties.", price: "Varies", image: logo},
    ],
    "Salads & Wraps" : [
        {id: genId(), item: "Salmon", description: "Chips included with wraps and salad available garden or Caesar. Served with mixed greens, lettuce, tomatoes, red onions, cucumber, and ranch. Salmon is avaible in jerk or grilled varieties.", price: "$13.99", image: logo},
        {id: genId(), item: "Catfish", description: "Chips included with wraps and salad available garden or Caesar. Served with mixed greens, lettuce, tomatoes, red onions, cucumber, and ranch. Catfish comes either fried or blackened.", price: "$12.99", image: logo},
        {id: genId(), item: "Chicken", description: "Chips included with wraps and salad available garden or Caesar. Served with mixed greens, lettuce, tomatoes, red onions, cucumber, and ranch. Chicken is avaible in jerk or grilled varieties.", price: "$11.99", image: logo}
    ],
    "Hibachi Burritos": [
        {id: genId(), item: "Chicken Hibachi Burrito", description: "Hibachi fried rice and veggies, chicken, yum yum sauce packed into a burrito", price: "15.00", image: chicken_hibachi_burrito},
        {id: genId(), item: "Salmon Hibachi Burrito", description: "Hibachi fried rice and veggies, salmon, yum yum sauce packed into a burrito", price: "23.00", image: logo},
        {id: genId(), item: "Shrimp Hibachi Burrito", description: "Hibachi fried rice and veggies, shrimp, yum yum sauce packed into a burrito", price: "23.00", image: logo},
    ],
    "Passion Fried Rice": [
        {id: genId(), item: "Salmon Fried Rice", description: "Featuring savory salmon nestled within fried rice, available in both large and small sizes.", price: "Varies", image: logo},
        {id: genId(), item: "Combination Fried Rice", description: "Combination rice with choice of salmon, chicken or shrimp.", price: "25.00", image: logo},
        {id: genId(), item: "Shrimp Fried Rice", description: "Tender shrimp sautéed to perfection, then mingled with aromatic, fluffy rice, fried with a mix of Chinese inspired seasonings. Available in both large and small portions to satisfy your hunger.", price: "13.00", image: logo},
        {id: genId(), item: "Veggie Fried Rice", description: "A medley of assorted vegetables stir-fried with fragrant jasmine rice. Choose between a large or small portion.", price: "10.00", image: logo}

    ],
    "Mains": [
        {id: genId(), item: "Salmon Bites", description: "Crispy, southern fried salmon bites with a side of remoulade sauce", price: "13.00", image: salmon_bites},
        {id: genId(), item: "Salmon Bites Meal", description: "Fried salmon bites over our fried rice.", price: "30.00", image: salmon_bites},
        {id: genId(), item: "Salmon Sticks", description: "Grilled Salmon Sticks covered with sweet and spicy bang bang sauce.", price: "23.00", image: salmon_bites},
        {id: genId(), item: "Lemon Butter Potato Bowl", description: "Grilled or fried fish over garlic mashed and our house made creamy lemon sauce.", price: "30.00", image: salmon_bites},
    ], 
    "Drinks" : [
        {id: genId(), item: "Passion Punch Quart", description: "32 ounces of refreshing and fruity passion punch.", price: "$6.00", image: logo},
    ]
}
    


const MenuItem = ({item}) => {
    const [enlargeImage, setEnlargeImage] = useState(false)
    const [showOrdering, setShowOrdering] = useState(false)

    var img_size = styles.menuItemImage
    var ordering = styles.noShowOrder
    if (enlargeImage == true) {
        img_size = styles.menuItemImageZoom
    }

    if (showOrdering == true) {
        ordering = styles.showOrder
    }
    
    return (
        <div style={styles.container}>
            <div style={styles.menuItem}>
                <img src={item.image} alt={item.name} style={img_size} onClick={() => setEnlargeImage(!enlargeImage)}/>
                <div style={styles.menuItemDetails}>
                    <p style={{fontSize: "larger"}}>{item.item}</p>
                    <p>{item.description}</p>
                    <span className="menu-item-price">${item.price}    </span>
                    <button style={styles.menuButton} onClick={() => setShowOrdering(!showOrdering)} className="add-to-cart-button">
                        Order Now
                    </button>
                    <div id={item.id} style={ordering}>
                        <a href="https://www.grubhub.com/restaurant/passion-t-catering-llc-3412-w-79th-st-chicago/7394152" target='_blank' rel="noreferrer"><img src={grubhub} alt={"order grubhub"} style={styles.logo}/></a>
                        <a href="https://www.ubereats.com/store/passion-t/6ZEHz3RXTaCWhoqvERqwXQ?srsltid=AfmBOoo_C_dyJ7LRTDxFKxhigEM9MLIRB6bWwfmcExj7Ogdwt0dehUjT" target='_blank' rel="noreferrer"><img src={uberEats} alt={"order uber eats"} style={styles.logo}/></a>
                        <a href="https://www.doordash.com/store/passion-t-chicago-24802938/?srsltid=AfmBOoqdiwgzOgNB15wIriBHpYM768sVRXOlMODqel5VpPM1F_wZFk_9" target='_blank' rel="noreferrer"><img src={doordash} alt={"order doordash"} style={styles.logo}/></a>
                        <a href="https://cashdrop.com/passion-t/menu" target='_blank' rel="noreferrer"><img src={cashdrop} alt={"order cashdrop"} style={styles.logo}/></a>
                    </div>
            </div>
      </div>
        </div>
    );
}


const MenuCategory = ({category}) => {
    const [fullMenuItems] = useState(fullmenu)
    for (const [key, value] of Object.entries(fullMenuItems)) {
        console.log(value)

        return (
            <div class="category">
                <p style={{fontSize: "larger"}}><b>{key}</b></p>
            </div>
        )
    }
}

const Menu = () => {
    const [fullMenuItems] = useState(fullmenu)
    for (const [key, value] of Object.entries(fullMenuItems)) {
        return (
            <div className="menu">
                <p style={styles.menuCategoryTitle}>{key}</p>
              {value.map(item => (
                <MenuItem key={item.id} item={item}/>
              ))}
            </div>
          );
    }

}

/*
const Menu = () => {
    const [fullMenuItems] = useState(fullmenu)
    for (const [key, value] of Object.entries(fullMenuItems)) {
        return (
            <div className="menu">
                <p style={styles.menuCategoryTitle}>{key}</p>
              {value.map(item => (
                <MenuItem key={item.id} item={item}/>
              ))}
            </div>
          );
    }

}
*/




/*

const Menu = () => {
    const [menuItems] = useState(passiontmenu);
    const [fullMenuItems] = useState(fullmenu)
    for (const [key, value] of Object.entries(fullMenuItems)) {
        console.log(value)
    }
  
    return (
      <div className="menu">
        {menuItems.map(item => (
          <MenuItem key={item.id} item={item}/>
        ))}
      </div>
    );
  };
*/

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
        backgroundColor: "#FAC8C8",
        border: "1px solid #000000",
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

    menuItemImageZoom: {
        width: "200px",
        height: "200px",
        objectFit: "cover",
        borderRadius: "10px",
        marginRight: "20px",
    },

    menuItemDetails: {
        flex: "1",
    },
    menuButton: {
        color: "#ead7db",
        backgroundColor: "#000000",
        border: "1px solid #00000",
        borderRadius: "10px",
        fontFamily: "Baskervville, Times New Roman, Times, serif, sans-serif",
    },
    logo: {
        width: "75px",
        height: "75px",
        borderRadius: "25%",
        padding: "5px"
    },
    showOrder: {
        display: "block"
    },
    noShowOrder: {
        display: "none"
    },
    menuCategoryTitle: {
        textAlign: "center",
        fontSize: "2em", 
        fontWeight: "bold"
    }
}

export default Menu;
