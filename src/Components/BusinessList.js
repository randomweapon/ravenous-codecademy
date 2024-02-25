import React from 'react';
import Business from './Business'

//src="" />
const businesses = [1,2]

function BusinessList() {
    const businessList = [];
    for (const business in businesses) {
        let newBusiness = (
            <Business 
                name="Cookie Mania"
                address=""
                image="https://placehold.co/600x400"
                city="" 
                state=""
                zipcode="" 
                category="" 
                rating="" 
                reviewCount="" />
        );
        businessList.push(newBusiness);
    }
    
    return businessList;
}

export default BusinessList;