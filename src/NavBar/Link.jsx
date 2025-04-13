import React from 'react';

const Link = ({route}) => {
    
    return (
        <li className='mr-12 font-bold'>
            {<a href={route.path}>{route.name}</a> }
        </li>
    );
};
   
export default Link;