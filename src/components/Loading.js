import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 여기에서 필요한 작업을 수행하고, 모든 리소스가 로드되면 setIsLoading(false)로 설정합니다.
    // 예시로 setTimeout을 사용하여 3초 후에 isLoading 값을 false로 변경하는 것으로 가정합니다.
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (

    <>
    {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="max-w-[380px] h-[100vh] bg-white flex justify-center mx-auto items-center flex-col gradient">
            <img src="./../Images/loading.gif" className='w-[30%]' alt="loading" />
            <p className='animate__animated animate__fadeInUp -mt-[5px] text-xl loadingB'>시훈이의 첫 생일</p>
            <p className='animate__animated animate__fadeInUp -mt-[4px] text-xl mb-28 loadingB animate__delay-1s 1s'>초대합니다</p>
            <p className='-mt-[115px] animate__animated animate__fadeInUp animate__delay-2s 1s'><FontAwesomeIcon icon={faHeart} color='#bbd5f5' className='mx-1 text-lg ' /></p>
          </div>
        </div>
      ) : (
        <div className="max-w-[380px] h-[100vh]"></div>
      )}
    </>

  )
}

export default Loading