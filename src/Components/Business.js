import React from 'react';


//src="" />

function Business({name, address, image, city, state, zipcode, category, rating, reviewCount}) {
    return (
        <div>
            <img src={image} alt="" />
            <ul>
                <li>{name}</li>
                <li>{address}, {city}, {state}, {zipcode}</li>
                <li>Category: {category}</li>
                <li>Rating: {rating}</li>
                <li>Review Count: {reviewCount}</li>
            </ul>
        </div>
    );
}

export default Business;