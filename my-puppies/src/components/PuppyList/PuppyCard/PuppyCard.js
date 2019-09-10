import React from 'react';
import './PuppyCard.scss';

const PuppyCard = ({name, age, weight, price, imageUrl}) => {
    return (
        <div className="PuppyCard">
            <div className="PuppyCard-image-wrapper">
                <img src={imageUrl} alt="Puppy" />
            </div>
            <div className="PuppyCard-details">
                <h4>{ name } - ${ price }</h4>
                <p>Age: { age }</p>
                <p>Weight: { weight }</p>
            </div>
        </div>
    )
}

export default PuppyCard;