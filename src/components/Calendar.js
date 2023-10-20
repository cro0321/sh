
function Calendar() {
  const year = 2023;
  const month = 10; // November (Note: January is 0, February is 1, etc.)

  // Get the first and last day of the month
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  // Create an array to hold all the days in the month
  let datesArray = [];

  for (let i = firstDay.getDay(); i > 0; i--) {
    datesArray.push(<div key={`before-${i}`} className=" h-10  "></div>);
  }

  for (let i = 1; i <= lastDay.getDate(); i++) {

    let dateInWeek = new Date(year, month, i).getDay();
    if (i === 24) {
      datesArray.push(<div key={i} className="-my-[11px] ml-1  h-10 "><img className='
         w-14 h-14 block mx-auto'  src="./../Images/calendar.gif" alt="시훈" /></div>);
      // <img  src="./../Images/1.jpg" alt="시훈" />
      //<FontAwesomeIcon icon={faCakeCandles} className='text-yellow-400 text-2xl' />
    } else if (dateInWeek === 0) {
      datesArray.push(<div key={i} className=" text-red-500 py-2 h-10">{i}</div>);
    } else {
      datesArray.push(<div key={i} className="h-10 py-2 ">{i}</div>);
    }
  }

  while (datesArray.length % 7 !== 0) {
    let fillerIndex = datesArray.length + 1;
    datesArray.push(<div key={`after-${fillerIndex}`} className="calendar-day empty"></div>);
  }



  return (
    <>
      <div className="px-3 pt-[40px] pb-[50px]  h-full wow animate__animated animate__fadeInUp">
        <div className="mx-auto aline">
          <h2 className='mb-[40px]'>{year}년 {month + 1}월</h2>
          <div className="">
            <div className='grid grid-cols-7  '>
              {['일', '월', '화', '수', '목', '금', '토'].map((dayName, index) => <strong className='mb-4 text-cetner ' key={index}>{dayName}</strong>)}
              {datesArray}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Calendar