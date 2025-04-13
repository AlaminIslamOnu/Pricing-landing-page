import { CircleCheckBig } from 'lucide-react';
import React from 'react';


const PricingFeature = ({feature}) => {
    console.log(feature);
    return (
        <div>
            <p className='flex gap-2'><CircleCheckBig> </CircleCheckBig> {feature}</p>
            
        </div>
    );
};

export default PricingFeature;