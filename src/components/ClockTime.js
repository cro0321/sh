import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'

function ClockTime() {
    const [daysLeft, setDaysLeft] = useState('');
    useEffect(() => {
        const countDownDate = new Date('2023-11-24 11:30:00').getTime();
    
        const dDayInterval = setInterval(() => {
          const currentDate = new Date().getTime();
          let distanceInMillisecs= countDownDate - currentDate;
    
          if (distanceInMillisecs < 0) {
            clearInterval(dDayInterval);
            setDaysLeft('D-day Passed');
            return;
          }
    
         let daysLeftValue= Math.floor(distanceInMillisecs / (1000 * 60 * 60 *24));
         setDaysLeft(` ${daysLeftValue.toString()}`);
        },1000);
    
        return () => clearInterval(dDayInterval);
       }, []);
  return (
    <>
    <div className="pb-[50px] ">
    <FontAwesomeIcon icon={faHeart} color='#ff4e7f' className='mx-1' /><span>시훈이 생일까지</span><span className=" text-[#569AED]">{daysLeft}</span><span>일 전</span> <FontAwesomeIcon icon={faHeart} color='#ff4e7f' className='mx-1' />
    </div> 
  </>
  )
}

export default ClockTime