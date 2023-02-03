import React, { useState } from 'react';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DetailsCard from './DetailsCard';
import "./details.css";
import { Pagination } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";

const Details = ({data, pageSize}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];
  
  const startIndex= (currentPage -1)* pageSize;
  const endIndex= startIndex + pageSize;

  for(let i = 1; i<=Math.ceil(data.length/pageSize);i++){
    pageNumbers.push(i);
  }

  const handlePrevClick= ()=> {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
   }
  }

  const handleNextClick= ()=> {
    if (currentPage !== Math.ceil(data.length / pageSize)) {
      setCurrentPage(currentPage + 1);
   }
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
      
        {/* <div className='Arrows'>
            <ArrowBackIosIcon onClick={handlePrevClick} />
            {pageNumbers.map((number)=>(
              <button
              // className={style}
                  key={number}
                  onClick={() => setCurrentPage(number)}
                  className={`btn ${currentPage === number ? 'focus' : 'btn'}`}>
                  {number}
               </button>
            ))}
            <ArrowForwardIosIcon onClick={handleNextClick}/>
        </div> */}
        <div className='page'>
        <Pagination
          count={pageSize+1}
          page={currentPage}
          onChange={handleChange}
          // variant="outlined"
        //   classes={{
        //   root: classes.color
        // }}
        // backIconButtonProps={{ className: classes.leftIconButton }}
        // nextIconButtonProps={{ className: classes.rightIconButton }}
          shape='rounded'
          color='primary'
          size='large'
        />
        </div>
    </>
        
  )
}

export default Details;