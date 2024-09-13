import {useState, React} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faClock} from '@fortawesome/free-solid-svg-icons'

const resturantHours = {0: ["12:00", "19:00"], 1: ["23:59", "23:59"], 2: ["23:59", "23:59"], 3: ["12:00", "19:00"], 4: ["12:00", "19:00"], 5: ["12:00", "19:00"], 6: ["12:00", "19:00"]}
const daysOfWeek = {0: "Sunday",1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday" }
function convertToAMPM(time) {
    // Split the time string into hours and minutes
    let [hours, minutes] = time.split(':').map(Number);
    let ampm = hours >= 12 ? 'PM' : 'AM';
  
    // Convert 24-hour format to 12-hour format
    hours = hours % 12 || 12; // If hours is 0 or 12, show 12
  
    // Return the formatted time
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
  }


function CheckOpen() {
    var currTime = new Date()
    var [isOpen, setIsOpen] = useState(false)     
    var currMinute = currTime.getMinutes()
    var currHour = currTime.getHours()
    var currDay = currTime.getDay()

    if (currHour >= resturantHours[currDay][0].slice(0,2) && currHour <= resturantHours[currDay][1].slice(0,2) &&
    currMinute >= resturantHours[currDay][0].slice(3) && currMinute <= resturantHours[currDay][1].slice(3)) {
        setIsOpen(true)
    }

    if (isOpen) {
        return (
            <div>
                <p>Open Now Until <span>{convertToAMPM(resturantHours[currDay][1])}</span></p>
            </div>
        )
    }
    else {
        if (currDay == 6) {
            currDay = 0
        }
        else {
            currDay = currDay + 1
        }
        return (
            <div>
                <p>Closed Until <span>{convertToAMPM(resturantHours[currDay][0])}</span> on {daysOfWeek[currDay]}</p>
            </div>
        )
    }
}

const Hours = () => {
    console.log(new Date())
    return (
        <div>
            <div style={{display: 'inline-flex', alignItems: 'center', textAlign: "center", padding: "1em"}}>
                <div style={{padding: "1em",  minWidth: "300px"}}>
                <p><b>Trumbuli & 79th St.</b></p>
                <p>3412 W 79th St 
                <br></br>Chicago, IL 60652</p>
                <p><FontAwesomeIcon icon={faClock} />   12pm-7pm, Thurs-Mon</p>
                <CheckOpen />
                <a href="tel:+13125362166" title="phone number"><FontAwesomeIcon style={styles.icon} icon={faPhone} className='icon'/></a>
                <a href="mailto: passionteecatering@yahoo.com" title='email'><FontAwesomeIcon style={styles.icon}icon={faEnvelope} className='icon'/></a>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2976.6389022888993!2d-87.7103993884063!3d41.749880971136285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e30107bba4f33%3A0x70f32167a1e562b9!2s3412%20W%2079th%20St%2C%20Chicago%2C%20IL%2060652!5e0!3m2!1sen!2sus!4v1724814418742!5m2!1sen!2sus" min_width="400" min_height="400" width="500" height="500" style={{border:0}} allowfullscreen="" loading="lazy" title="79th and Trumbuli Location" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div style={{display: 'inline-flex', alignItems: 'center', textAlign: "center"}}>
                <div style={{padding: "1em", minWidth: "300px"}}>
                    <p><b>Martin Luther King Dr. & 69th St.</b></p>
                    <p>
                    400 E 69th St<br></br>Chicago, IL 60637
                    </p>
                    <p><FontAwesomeIcon icon={faClock} />   12pm-7pm, Thurs-Mon</p>
                    <CheckOpen />
                    <a href="tel:+17737893588" title="phone number"><FontAwesomeIcon icon={faPhone} style={styles.icon} className='icon'/></a>
                    <a href="mailto: passionteecatering@yahoo.com" title='email'><FontAwesomeIcon icon={faEnvelope} style={styles.icon} className='icon'/></a>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.7316330582175!2d-87.61778068854312!3d41.769443572090566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e28d3c00f0219%3A0x4c93fd240cda1851!2s400%20E%2069th%20St%2C%20Chicago%2C%20IL%2060637!5e0!3m2!1sen!2sus!4v1724814607964!5m2!1sen!2sus" title="69th and King Drive Location" min_width="400" min_height="400" width="500" height="500" style={{border:0}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <br></br>
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
        marginBottom: '10px',
    },
    icon: {
        borderRadius: "50%",
        padding: "1rem",
        backgroundColor: "#f52393",
        margin: "1rem",
        color: "black"
    }
}

export default Hours;
