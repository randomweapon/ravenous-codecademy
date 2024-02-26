import './Business.css';

//src="" />

function Business({name, address, image, city, state, zipcode, category, rating, reviewCount}) {
    return (
        <div className='Business'>
            <img src={image} alt={name} />
            <div>
                <h2>{name}</h2>
                <div className='business-address'>
                    {address.length ? address + "," : ""} 
                    {city.length ? city + "," : ""} 
                    {state.length ? state + "," : ""} 
                    {zipcode.length ? zipcode + "," : ""}
                </div>
            </div>
            <ul>
                <li>Category: {category}</li>
                <li>Rating: {rating}</li>
                <li>Review Count: {reviewCount}</li>
            </ul>
        </div>
    );
}

export default Business;