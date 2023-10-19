import React from 'react'

function Loading() {
  return (

    <>
      <div className="fixed inset-0 flex items-center justify-center z-10">
        <div className="max-w-[380px] h-[100vh] bg-white flex justify-center mx-auto items-center flex-col">
          <img src="./../Images/loading.gif" className='w-[30%]' alt="loading" />
          <p className='animate__animated animate__fadeInUp -mt-[5px] text-xl loadingB'>시훈이의 첫 생일</p>
          <p className='animate__animated animate__fadeInUp -mt-[4px] text-xl mb-28 loadingB animate__delay-1s 1s'>초대합니다</p>
        </div>
      </div>
      <div className="max-w-[380px] h-[100vh]">


      </div>
    </>

  )
}

export default Loading