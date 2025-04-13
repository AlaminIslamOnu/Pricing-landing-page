import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOption = ({pricingPromise}) => {
    const pricingData =use(pricingPromise)
    
    return (
        <div>
            <h2 className='text-7xl mt-8 text-center my-3'>Get Our Membership</h2>
            <div className='grid md:grid-cols-3'>
                {pricingData.map((pricing,index)=> <PricingCard pricing={pricing} key={index}> </PricingCard>) }
                  
            </div>
        </div>
    );
};

export default PricingOption;