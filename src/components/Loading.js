import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Loading() {

  return (

    <>
 
        <div className=" max-w-full fixed inset-0 flex items-center justify-center z-10">
          <div className=" h-[100vh] bg-white flex justify-center mx-auto items-center flex-col gradient">
            <img src="./../Images/loading.gif" className='w-[30%]' alt="loading" />
            <p className='animate__animated animate__fadeInUp -mt-[5px] text-xl loading'>시훈이의 첫 생일</p>
            <p className='animate__animated animate__fadeInUp -mt-[4px] text-xl mb-28 loading animate__delay-1s 1s'>초대합니다</p>
            <p className='-mt-[115px] animate__animated animate__fadeInUp animate__delay-2s 1s'><FontAwesomeIcon icon={faHeart} color='#bbd5f5' className='mx-1 text-lg ' /></p>
          </div>
        </div>
    </>

  )
}

export default Loading