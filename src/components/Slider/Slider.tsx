import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import * as S from './styles'

import { Pagination, Navigation } from 'swiper'

export const Slider = () => (
  <Swiper
    pagination={{
      type: 'fraction',
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
    className="mySwiper"
  >
    <SwiperSlide>
      <S.Wrapper>
        <div className="container">slider</div>
      </S.Wrapper>
    </SwiperSlide>
    <SwiperSlide>
      <S.Wrapper>
        <div className="container">slider</div>
      </S.Wrapper>
    </SwiperSlide>
    <SwiperSlide>
      <S.Wrapper>
        <div className="container">slider</div>
      </S.Wrapper>
    </SwiperSlide>
  </Swiper>
)
