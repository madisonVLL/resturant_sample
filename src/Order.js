import React from 'react';
import cashdrop from './images/delivery_logos/cashdrop.png';
import doordash from './images/delivery_logos/doordash.png';
import uberEats from './images/delivery_logos/uber_eats.png';
import grubhub from './images/delivery_logos/grubhub.png';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';

const Order = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Order Online</h2>
            <p style={styles.text}>Place your order for pickup or delivery at either of our two locations!</p>
            <div style={styles.locations}>
                <div>
                    <p>3412 W 79th St<br></br>Pickup & Delivery</p>
                    <div>
                        <a href="https://www.grubhub.com/restaurant/passion-t-catering-llc-3412-w-79th-st-chicago/7394152" target='_blank' rel="noreferrer"><img src={grubhub} alt={"order grubhub"} style={styles.logo}/></a>
                        <a href="https://www.ubereats.com/store/passion-t/6ZEHz3RXTaCWhoqvERqwXQ?srsltid=AfmBOoo_C_dyJ7LRTDxFKxhigEM9MLIRB6bWwfmcExj7Ogdwt0dehUjT" target='_blank' rel="noreferrer"><img src={uberEats} alt={"order uber eats"} style={styles.logo}/></a>
                        <a href="https://www.doordash.com/store/passion-t-chicago-24802938/?srsltid=AfmBOoqdiwgzOgNB15wIriBHpYM768sVRXOlMODqel5VpPM1F_wZFk_9" target='_blank' rel="noreferrer"><img src={doordash} alt={"order doordash"} style={styles.logo}/></a>
                        <a href="https://cashdrop.com/passion-t/menu" target='_blank' rel="noreferrer"><img src={cashdrop} alt={"order cashdrop"} style={styles.logo}/></a>

                    </div>
                </div>
                <div>
                    <p>400 E 69th St<br></br>Pickup & Delivery</p>

                </div>
            </div>
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
    },
    locations: {
        display: "inline-flex",
        padding: "1rem"
    },
    logo: {
        width: "75px",
        height: "75px",
        borderRadius: "25%",
        padding: "5px"
    }
}

export default Order;
