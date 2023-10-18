import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dayjs from 'dayjs';
import React, { useState } from 'react'
import "react-datepicker/dist/react-datepicker.css";

function Calendar() {
  const year = 2023;
  const month = 10; // November (Note: January is 0, February is 1, etc.)
  
  // Get the first and last day of the month
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  // Create an array to hold all the days in the month
  let datesArray = [];

  for(let i=firstDay.getDay(); i>0; i--){
      datesArray.push(<div key={`before-${i}`} className="calendar-day empty h-10"></div>);
    }

    for(let i=1; i<=lastDay.getDate(); i++){

      let dateInWeek = new Date(year, month, i).getDay();
      if (i === 24) {
        datesArray.push(<div key={i} className="calendar-day special border-b border-red-500  h-10 ">{i}</div>);
      } else if(dateInWeek === 0) {
        datesArray.push(<div key={i} className="calendar-day text-red-500  h-10">{i}</div>);
      }else{
        datesArray.push(<div key={i} className="calendar-day   h-10">{i}</div>);
      }
    }

    while(datesArray.length %7 !==0){
      let fillerIndex=datesArray.length+1;
      datesArray.push(<div key={`after-${fillerIndex}`} className="calendar-day empty"></div>);
    }



  return (
   <>
   <div className="mx-3  h-full">
<div className="container mx-auto ">
           <h2 className='mb-4 '>{year}년 {month+1}월</h2>
           <div className='grid grid-cols-7'>
               {['일', '월', '화', '수', '목', '금', '토'].map((dayName,index)=><strong className='mb-4 flex items-center justify-center' key={index}>{dayName}</strong>)}
               {datesArray}
           </div>
       </div>
       </div>
   </>
  )
}

export default Calendar