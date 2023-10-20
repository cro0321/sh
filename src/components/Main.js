import { faHeart, faEllipsis, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import Calendar from './Calendar'
import Album from './Album'
import Loccation from './Loccation'
import ClockTime from './ClockTime'
import Footer from './Footer'
import WOW from 'wowjs';
import 'animate.css/animate.min.css';


function Main() {

    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
      }, []);

    return (

        <div className='max-w-full h-full '>
            <div className="w-[380px] h-full mx-auto my-0 bg-white">
                <img className='w-full block ' src="./../Images/main.png" alt="시훈" />
                <div className=" text-center">
                    <div className="py-[40px]">
                        <p className='text-lg inline-block border-b-2 border-[#888]'>시훈이의 첫 생일</p>
                    </div>
                    <div className="pb-[30px]">
                        <span>아빠 김종준</span>
                        <FontAwesomeIcon icon={faHeart} color='#ff4e7f' className='mx-1' /><span>엄마 남보배</span>
                        <p>2023년 11월 24일(금) AM 11:30</p>
                        <p>본페뜨 파티하우스 일산점</p>
                    </div>
                    <div className="px-[16%] py-[40px] wow animate__animated animate__fadeInUp ">
                        <span className=' mb-[40px] tracking-wide inline-block border-b-2 border-[#888]'>초대합니다</span>
                        <p>첫눈의 축복을 받으며 태어나</p>
                        <p className='  mb-[10px] '>어느덧 1년이라는 시간이 흘렀습니다.</p>
                        <p>저희 부부에게 더 큰 행복과</p>
                        <p>사랑을 알게 해준 시훈이의 </p>
                        <p className='mb-[10px]'>첫 번째 생일을 함께 축복해 주세요.</p>
                        <p>시훈이의 삼촌 이모 누나 형들을</p>
                        <p>생일파티에 초대합니다.</p>
                    </div>

                    <div className="py-[40px] wow animate__animated animate__fadeInUp">
                        <div className="">
                            <span>김종준</span><FontAwesomeIcon icon={faEllipsis} className='mx-2' /><button onClick="document.location.href='tel:010-4150-8117'"><a href="tel:010-4150-8117"><FontAwesomeIcon icon={faPhone} /></a></button><button onClick="document.location.href='tel:010-4150-8117'"><a href="sms:010-4150-8117"><FontAwesomeIcon icon={faEnvelope} className='mx-3' /></a></button>

                        </div>
                        <div className="wow animate__animated animate__fadeInUp">
                            <span>남보배</span><FontAwesomeIcon icon={faEllipsis} className='mx-2' /><button onClick="document.location.href='tel:010-4337-7237'"><a href="tel:010-4337-7237"><FontAwesomeIcon icon={faPhone} /></a></button><button onClick="document.location.href='tel:010-4337-7237'"><a href="sms:010-4337-7237"><FontAwesomeIcon icon={faEnvelope} className='mx-3' /></a></button>
                        </div>
                    </div>
                    <Calendar/>
                    <ClockTime />
                    <Album />
                    <Loccation />
                    <Footer/>
                </div>


            </div>
        </div>
    )
}

export default Main