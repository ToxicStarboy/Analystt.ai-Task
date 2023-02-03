import React from 'react';
import "./detailsHeading.css";

const DetailsHeading = ({data}) => {
  return (
    <div className='Details-heading'>
        <div className='Details-name'>
            {data.company.name}
        </div>
        <div className='Details-contact'>
            <h3 >CONTACT</h3>
            <p>{data.name}</p>
        </div>
        <div className='Details-city'>
            <h3>CITY</h3>
            <p>{data.address.city}</p>
        </div>
    </div>
  )
}

export default DetailsHeading