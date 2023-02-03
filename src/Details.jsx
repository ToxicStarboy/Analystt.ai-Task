import React, { useState } from 'react';
import DetailsCard from './DetailsCard';
import "./details.css";
import { Pagination } from '@mui/material';

const Details = ({data, pageSize}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];
  
  const startIndex= (currentPage -1)* pageSize;
  const endIndex= startIndex + pageSize;

  for(let i = 1; i<=Math.ceil(data.length/pageSize);i++){
    pageNumbers.push(i);
  }

  const handleChange = (e,value) =>{
      setCurrentPage(value);
      console.log(value);
  }
    return (
    < >
        {data.slice(startIndex, endIndex).map((data)=> (
            <DetailsCard key={data.id} data={data} />
        ))}

        <div className='page'>
        <Pagination
          count={pageSize+1}
          page={currentPage}
          onChange={handleChange}
          shape='rounded'
          color='primary'
          size='large'
        />
        </div>
    </>
        
  )
}

export default Details;