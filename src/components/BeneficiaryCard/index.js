import React, {useState, useEffect} from 'react';
import './styles.scss'
export default function BeneficiaryCard({ name, country, card }) {
  const [shortName, setShortName] = useState(name);
    return (
    <div className="beneficiary-card">
        <div className="name-location-wrap">
            <div className="short-name">
                {/* Get first alphabet of each word  */}
                <h1>{name.match(/\b(\w)/g).join('')}</h1>
            </div>
            <div className="name-location">
                <div className="full-name">
                    <h2>{name}</h2>
                </div>
                <div className="location">
                    <div className="flag">
                        <img src={'../images/pkr.png'} />
                    </div>
                    <h3 className="country-name">{country}</h3>
                </div>
            </div>
        </div>
        <div className="bank-card-wrap">
            <h4 className="card-number"> XXXX_XXXX_XXXX_XXXX </h4>
            <div className="card-wrap">
                <h5 className="card-name">
                    {card}
                </h5>
                <div className= "card-img-wrap">
                     <img src = '../images/card.png' />
                </div>
            </div>

        </div>
    </div>
  )
}
