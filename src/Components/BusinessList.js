import Business from './Business'

//src="" />
const businesses = [
    {
        name: "Cookie Mania",
        address: "3 Tree Street",
        image: "https://placehold.co/600x400",
        city: "",
        state: "",
        zipcode: "",
        category: "Monsters",
        rating: "3.5",
        reviewCount: "45"
    }
]

function BusinessList() {
    const businessList = [];
    for (const pos in businesses) {
        let business = businesses[pos];
        let newBusiness = (
            <Business 
                name={business.name}
                address={business.address}
                image={business.image}
                city={business.city}
                state={business.state}
                zipcode={business.zipcode}
                category={business.category}
                rating={business.rating} 
                reviewCount={business.reviewCount} />
        );
        businessList.push(newBusiness);
    }
    
    return businessList;
}

export default BusinessList;