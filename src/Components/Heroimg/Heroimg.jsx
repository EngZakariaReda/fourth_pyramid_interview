import './Heroimg.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Heroimg() {
    const swipers = [
        {
            headtext:"talk to us",
            paratext:"Tooplate is one of the best HTML CSS template websites for everyone",
            btntext:"WORK WITH US",
        },
        {
            headtext:"talk to us",
            paratext:"Tooplate is one of the best HTML CSS template websites for everyone",
            btntext:"WORK WITH US",
        },
        {
            headtext:"talk to us",
            paratext:"Tooplate is one of the best HTML CSS template websites for everyone",
            btntext:"WORK WITH US",
        },
    ]
  return (
    <>
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        touchMoveStopPropagation={false}
        className="mySwiper"
      >
        {
            swipers.map((el , index)=>{
                return <SwiperSlide 
                    className='myswiper-one'
                    key={index}
                >
                    <div className="container h-100">
                        <div className="h-100 d-flex flex-column justify-content-center text-white">
                            <h2 className='hero_text text-capitalize'>{el.headtext}</h2>
                            <p className='hero-parag text-capitalize'>{el.paratext}</p>
                            <button className='p-2 text-white text-uppercase work-btn'>
                                {el.btntext}
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            })
        }
        
      </Swiper>
    </>
  );
}
