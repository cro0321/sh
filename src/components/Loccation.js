import { faBus, faCar, faSquareParking, faTrainSubway } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useEffect } from 'react';


const { kakao } = window;
function Loccation() {
  useEffect(() => {

    //지도생성
    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션

      // https://address.dawul.co.kr/index.php 서 주소 검색후 y좌표가 앞 x좌표가 뒤
      center: new kakao.maps.LatLng(37.6403761, 126.785510), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    };
    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴


    //마커생성
    // 마커가 표시될 위치입니다 
    var markerPosition = new kakao.maps.LatLng(37.6403761, 126.785510);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다styled
    marker.setMap(map);

  }, [])

  return (
    <>

      <div className="text-lg pt-[80px] inline-block border-b-2 border-[#888] wow animate__animated animate__fadeInUp">Location</div>
      <p className=' text-[#333] mt-[40px] wow animate__animated animate__fadeInUp '>디아뜨크리스탈 2층</p>
      <p className=' text-[#333] pb-[30px] wow animate__animated animate__fadeInUp'>경기도 고양시 일산동구 일산로 16</p>
      <div className='mx-auto max-w-[380px] h-[298px] wow animate__animated animate__fadeInUp' id="map"></div>
      <div className="px-[30px] pt-[40px] text-left wow animate__animated animate__fadeInUp animate__delay-0.5s">
        <p className='text-[#141c2f] mb-[10px] text-[15px]'><FontAwesomeIcon icon={faBus} className='mr-1' />버스</p>
        <p className='text-[14px] text-[#777]'>흰돌5단지, 서안아파트 정류장 하차</p>
        <p className='text-[14px] text-[#777]'>일반 150, 88A, 광역 9707</p>
        <p className='text-[14px] text-[#777]'>좌석 921, 마을 68, 82A, 82B</p>
        <p className='text-[#141c2f] mt-[30px] mb-[10px] text-[15px]'><FontAwesomeIcon icon={faTrainSubway} className='mr-1' />지하철</p>
        <p className='text-[14px] text-[#777]'>3호선 백석역</p>
        <p className='text-[14px] text-[#777]'>백석역 3번출구에서 직진 후 </p>
        <p className='text-[14px] text-[#777]'>버스정류장 지나 횡단보도 건너 도보 5분</p>
        <p className='text-[#141c2f]  mt-[30px] mb-[10px] text-[15px]'><FontAwesomeIcon icon={faCar} className='mr-1' />자동차</p>
        <p className='text-[14px] text-[#777]'>서울 → 강변북로, 자유로 IC → 서울외곽순환고속도로 일산 IC → 중앙로 백석역 좌회전 250m</p>
        <p className='text-[#141c2f]  mt-[30px] mb-[10px] text-[15px]'><FontAwesomeIcon icon={faSquareParking} className='mr-1' />주차</p>
        <p className='text-[14px] text-pink-600 pb-[50px]'>본건물 (2시간) 및 백석 제1 공영주차장 (3시간)</p>
      </div>
    </>
  )
}

export default Loccation