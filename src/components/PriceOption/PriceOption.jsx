import React from 'react';
import SinglePrice from '../SinglePrice/SinglePrice';

const PriceOption = () => {

    const gymMemberships = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 30,
          "features": [
            "Access to cardio area",
            "Access to weightlifting area",
            "Locker room access",
            "Access to group fitness classes",
            "Discounts on personal training sessions"
          ]
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "price": 50,
          "features": [
            "Access to all gym areas",
            "Personal trainer sessions",
            "Sauna and spa access",
            "Access to group fitness classes",
            "Nutritional counseling sessions"
          ]
        },
        {
          "id": 3,
          "name": "Student Membership",
          "price": 20,
          "features": [
            "Access to cardio area",
            "Access to weightlifting area",
            "Student ID required",
            "Access to group fitness classes",
            "Discounts on smoothies at the gym cafe"
          ]
        },
        {
          "id": 4,
          "name": "Family Membership",
          "price": 80,
          "features": [
            "Access for two adults and two children",
            "Access to all gym areas",
            "Discounts on classes",
            "Access to group fitness classes for all family members",
            "Free childcare services during workout sessions"
          ]
        },
        {
          "id": 5,
          "name": "Senior Membership",
          "price": 25,
          "features": [
            "Access to all gym areas",
            "Seniors aged 65+",
            "Discounts on additional services",
            "Access to senior-specific fitness classes",
            "Social events and activities for seniors"
          ]
        },
        {
          "id": 6,
          "name": "Corporate Membership",
          "price": 40,
          "features": [
            "Discounts for company employees",
            "Access to all gym areas",
            "Customized group classes",
            "Access to company wellness programs",
            "Priority booking for gym facilities for corporate events"
          ]
        }
      ]
      
      

    return (
        <div>
            <h2 className='text-5xl'>Best Prices in the town</h2>
           <div className='grid grid-cols-3 gap-6'>
            {
                gymMemberships.map(option => <SinglePrice key={option.id} option={option}></SinglePrice>)
            }
           </div>
        </div>
    );
};

export default PriceOption;