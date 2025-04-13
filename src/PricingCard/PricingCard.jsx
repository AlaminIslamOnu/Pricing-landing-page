import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    const {name,price,description,features}=pricing
    return (
        <div className='border-2 bg-amber-300 rounded-xl gap-4 mx-3 mt-2 flex flex-col'>
            {/* Card Header */}
            <div className='p-5 '>
                <h2 className='text-6xl'>{name}</h2>
                <h2 className='text-3xl'>{price}</h2>
            </div>

            {/* card body */}
          <div className='bg-amber-600 p-3 rounded-xl mt-1 mx-2 flex-1'>
            <p>{description}</p>

            {features.map ((feature,index)=> <PricingFeature key={index} feature={feature}> </PricingFeature>)}
          </div>
           <button className='btn w-full rounded-2xl bg-amber-600 p-2'>Subscribe</button>
        </div>
    );
};

export default PricingCard;