import React from 'react'
import "./Features.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import phoneFeatures from "../../assets/phone-features.png";
import Feature from './Feature';
import { featureList } from "./data.js";

const Features = () => {
  return (
    <section id="features">
       <div className="container features">
        <div className="u-title">
          <BsFillBookmarkStarFill color="orangered" size={30} />
          <h2>Core Features</h2>
          <p className="u-text-small u-text-dark"> 
           Socialx app has Lorem ipsum dolor sit amet consectetur adipiscing elit. DSeui labore, harum officiis error quia cupidtate?
          </p>
        
        </div>
        <div className="features-content">
          <div className="features-left">
           <img src={phoneFeatures} alt="phone" />
          </div>
          <div className="features-right">
           {
            featureList.map((feature) => (
            <Feature key={feature.id} icon={feature.icon} heading={feature.heading} text={feature.text} />
            ))
           }
           
          </div>
        </div>
       </div>
    </section>
  );
};

export default Features;