import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , Pagination ,Scrollbar,A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Slider() {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={2}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    <div className='swiper'>
    <SwiperSlide >
       <img  style ={{width: "70%",height:"400px"}} src="https://media.istockphoto.com/id/1222526211/vector/artificial-lung-ventilation-for-covid-patient-intensive-care-in-hospital-woman-infected-by.jpg?s=612x612&w=0&k=20&c=fuSv3YuU-Q2pWisvxCCf_KD2d3O3qMZF-hzoIS8KoZM=" alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img style ={{width: "70%",height:"400px"}} src="https://media.istockphoto.com/id/1249490779/vector/medical-service-concept.jpg?s=612x612&w=0&k=20&c=aCzyqY9W2DxRvBOBZpg8bTHORvTRbkKPoX31cKlu7nI=" alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img  style ={{width: "70%",height:"400px"}}src="https://media.istockphoto.com/id/532049626/photo/doctor-and-patient-in-operating-theatre.jpg?s=612x612&w=0&k=20&c=J7o603CM4PWunB2DM8GU2GAJCMA-4qZgsXOsN6Pz11c=" alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img style ={{width: "70%",height:"400px"}} src="https://media.istockphoto.com/id/1277102512/photo/monitoring-equipment-in-hospital-ward.jpg?s=612x612&w=0&k=20&c=bI2xxkJ7G3QrZUxpyZW6tP9UXQkdxhSYvUSYcZqSjT4=" alt="" />
        </SwiperSlide>
        </div>
  </Swiper>
  
  )
}
