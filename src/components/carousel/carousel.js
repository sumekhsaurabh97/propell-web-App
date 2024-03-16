import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css"
import { Carousel } from 'react-responsive-carousel';

//styles
import { ctaPrimary, headingTwo } from "../../styles/typography/typography"
import Carousel_1 from '../../assets/img/carsousel-1.svg'
import Carousel_2 from '../../assets/img/carsousel-2.svg'
import Carousel_3 from '../../assets/img/carsousel-3.svg'

export default function LoginCarousel() {
  return (
    <div className="h-48 py-4 w-96">
      <Carousel
        autoPlay
        interval={4000}
        infiniteLoop={true}
        swipeable={true}
        showStatus={false}
        showThumbs={false}
        stopOnHover={true}
      >
        <div className=''>
          <p className={`${ctaPrimary} text-blackOne`}>Get an instant credit line</p>
          <p className={`${headingTwo} text-grayOne mt-[9px]`}>on your Mutual Fund portfolio</p>
          <div className='pb-[60px] pt-[30px]'>
            <img src={Carousel_1} alt="instant credit" width={"50%"} />
          </div>
        </div>
        <div>
          <p className={`${ctaPrimary} text-blackOne`}>Quick & Hassle free process</p>
          <p className={`${headingTwo} text-grayOne mt-[9px]`}>completely online and paper-free</p>
          <div className='pb-[60px] pt-[30px'>
            <img src={Carousel_2} alt="Quick & Hassle free process" width={"50%"} />
          </div>
        </div>
        <div>
          <p className={`${ctaPrimary} text-blackOne`}>Convenient Repayments</p>
          <p className={`${headingTwo} text-grayOne mt-[9px]`}>no monthly EMIs</p>
          <div className='pb-[60px] pt-[30px'>
            <img src={Carousel_3} alt="Convenient Repayments" width={"50%"} />
          </div>
        </div>
      </Carousel>
    </div>
  )
}
