import React from 'react';
import polished_diamond from '../assets/polished_diamond.png';
import '../css/style.css';
import '../css/overviewcards.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';
import { Swiper, SwiperSlide } from 'swiper/react'; // Correct import
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const diamondList = [
  { name: "0.5 ct, VVS1, D, No Fluorescence, Cut 3x Ex, Round" },
  { name: "1 ct, VVS1, D, No Fluorescence, Cut 3x Ex, Round" },
  { name: "0.5 ct, VS2, G, Cut 3x Ex, Round" },
  { name: "1 ct to 3 ct, VS2 Up, H Up, Cut 3x Ex, Any Shape" },
  { name: "3 ct Up, VS2 Up, H Up, Cut 3x Ex, Any Shape" },
  { name: "2 ct Up, VS2 Up, H Up, Cut 3x Ex, Round" },
];

const Overviewcards = () => {
  return (
    <div className="overview_cards">
      <div className="banner">
        <div className="overview_cards_body" data-scroll data-scroll-speed="0.5">
          <Swiper
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3} // Default 3 cards
            loop={true}
            centeredSlides={true}
            className="mySwiper"
            breakpoints={{
              // On small screens (e.g., mobile), show 1 card
              320: {
                slidesPerView: 1,
              },
              // On medium screens (e.g., tablets), show 2 cards
              768: {
                slidesPerView: 2,
              },
              // On large screens (e.g., desktop), show 3 cards
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {diamondList.map((diamond, index) => (
              <SwiperSlide key={index}>
                <div className="overview_cards_card">
                  <div className="overview_cards_card_img">
                    <img
                      src={polished_diamond}
                      alt="polished_diamond"
                    />
                  </div>
                  <p className="text_two">{diamond.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev">←</div>
          <div className="swiper-button-next">→</div>
        </div>
      </div>
    </div>
  );
};

export default Overviewcards;
