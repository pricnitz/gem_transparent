import React from 'react';
import polished_diamond from '../assets/polished_diamond.png';
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';
import { Swiper, SwiperSlide } from 'swiper/react'; // Correct import
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const Grilled = () => {

    // Diamond data
    const diamonds = [
        {
            name: "The Smart Diamond",
            clarity: "VS1",
            color: "G or even F",
            cut: "Definitely Excellent for both cut and polish, with the option to consider Very Good symmetry.",
            fluorescence: "None or Faint",
        },
        {
            name: "The Excellence",
            clarity: "VVS1 or even Flawless",
            color: "D - E",
            cut: "Triple Excellent",
            fluorescence: "None",
        },
        {
            name: "I Really Want a Big Diamond But Have Limited Funds",
            clarity: "SI1",
            color: "H",
            cut: "Triple Very Good",
            fluorescence: "Medium, or even Strong if really necessary.",
        }
    ];

    return (
        <div className='grilled gray_banner'>
            <div className="banner">
                <div className="grilled_body">
                    <div className="grilled_body_heading">
                        <h3>Girdle Thickness:</h3>
                        <p>Be careful with a thick girdle; it will make the diamond appear smaller for its actual weight. </p>
                    </div>
                    <p><strong>Three examples</strong> of Diamond grade recommendations by Transparent Gems </p>
                    <div className="swiper_container">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            pagination={{ clickable: true }}  // Enable clickable pagination
                            spaceBetween={0}
                            slidesPerView={1} // Default 1 card
                            loop={true}
                            centeredSlides={true} 
                            className="mySwiper"
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 1,
                                },
                                1024: {
                                    slidesPerView: 1,
                                },
                            }}
                        >
                            {diamonds.map((diamond, index) => (
                                <SwiperSlide key={index}>
                                    <div className="grilled_cards_card">
                                        <div className="grilled_cards_card_left">
                                            <h2>{diamond.name}</h2>
                                            <p><strong>Clarity:</strong> {diamond.clarity}</p>
                                            <p><strong>Color:</strong> {diamond.color}</p>
                                            <p><strong>Cut:</strong> {diamond.cut}</p>
                                            <p><strong>Fluorescence:</strong> {diamond.fluorescence}</p>
                                        </div>
                                        <span className='line'></span>
                                        <div className="grilled_cards_card_img">
                                            <img src={polished_diamond} alt="polished_diamond" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Grilled;
