import { faHeart,faEllipsis,faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Calendar from './Calendar'
import Album from './Album'
import Loccation from './Loccation'


function Main() {
    
   
    return (
        <div className='h-full' >
            <div className="max-w-[380px] h-full mx-auto my-0 bg-white">
                <img className='w-full block' src="./../Images/main.jpg" alt="시훈" />
                {/* <div className="gradient"></div> */}
                <div className=" text-center">
                    <div className="py-[40px]">
                        <p className='text-base inline-block border-b-2 border-[#888]'>시훈이의 첫 생일</p>
                    </div>
                    <div className="pb-[30px] ">
                        <span>아빠 김종준</span>
                        <FontAwesomeIcon icon={faHeart} color='#ff4e7f' className='mx-1' /><span>엄마 남보배</span>
                        <p>2023년 11월 24일 AM 11시 00분</p>
                        <p>본페뜨 파티하우스 일산점</p>
                    </div>
                    <div className="px-[16%] py-[40px] ">
                        <span className='mb-[20px] tracking-wide'>초대합니다</span>
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem, ipsum dolor.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="px-[16%] py-[40px]">
                        <span className='mb-[20px] tracking-wide'>초대합니다</span>
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem, ipsum dolor.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="py-[40px] ">
              <div className="">
              <span>김종준</span><FontAwesomeIcon icon={faEllipsis} className='mx-2' /><button onClick="document.location.href='tel:010-4150-8117'"><a href="tel:010-4150-8117"><FontAwesomeIcon icon={faPhone} /></a></button>
              </div>
              <div className="">
              <span>남보배</span><FontAwesomeIcon icon={faEllipsis} className='mx-2' /><button onClick="document.location.href='tel:010-4337-7237'"><a href="tel:010-4337-7237"><FontAwesomeIcon icon={faPhone} /></a></button>
              </div>
          </div>
          <Calendar/>
          <Album/>
          <Loccation/>
                </div>
         
                  
            </div>
        </div>
    )
}

export default Main