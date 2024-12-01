import React from 'react';
import "./Destination.css";
import DestinationData from './DestinationData';
import n1 from "../../assets/nature1.jpg";
import n2 from "../../assets/nature2.jpg";
import n3 from "../../assets/nature3.jpg"

function Destination() {
  return (
    <div className='destination'>
      <h1>Popular Destination</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <DestinationData
        className= "first-des"
        heading="Majestic Grand Canyon"
        text="The Grand Canyon is a breathtaking natural wonder carved by the Colorado River over millions of years. Its immense size and vibrant layers of red rock offer a stunning landscape that attracts adventurers and nature enthusiasts alike. Whether you're hiking along the rim, descending into its depths, or simply gazing at the vast expanse, the Grand Canyon's beauty is truly unparalleled."
        n1={n1}
        n2={n2}
        
      />
       <DestinationData
       className="first-des-reverse"
        heading="Machu Picchu, Peru"
        text="Machu Picchu, the ancient Incan citadel nestled in the Andes Mountains, is a symbol of Peru's rich cultural heritage. Often shrouded in mist, this UNESCO World Heritage site offers a glimpse into the past with its well-preserved ruins and terraces. Trekking the Inca Trail to reach Machu Picchu is a once-in-a-lifetime experience, rewarding travelers with awe-inspiring views and a deep connection to history."
        n1={n3}
        n2={n2}
        
      />
    </div>
  );
}

export default Destination;
