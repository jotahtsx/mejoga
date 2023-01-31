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
      <S.Wrapper
        style={{ backgroundImage: `url(./images/slider-bg-01.png)` }}
        className="sliderItem"
      >
        <div className="container">
          <div>
            <span>Popular</span>
            <h2>The last of US II</h2>
            <p>
              Vivencie a narrativa emocionante e os personagens
              <br /> inesquecíveis em The Last of Us™, vencedor de mais
              <br /> de 200 prêmios de Jogo do Ano.
            </p>
          </div>
        </div>
      </S.Wrapper>
    </SwiperSlide>
    <SwiperSlide>
      <S.Wrapper
        style={{ backgroundImage: `url(./images/slider-bg-01.png)` }}
        className="sliderItem"
      >
        <div className="container">
          <div>
            <span>Popular</span>
            <h2>The last of US II</h2>
            <p>
              Vivencie a narrativa emocionante e os personagens
              <br /> inesquecíveis em The Last of Us™, vencedor de mais
              <br /> de 200 prêmios de Jogo do Ano.
            </p>
          </div>
        </div>
      </S.Wrapper>
    </SwiperSlide>
    <SwiperSlide>
      <S.Wrapper
        style={{ backgroundImage: `url(./images/slider-bg-01.png)` }}
        className="sliderItem"
      >
        <div className="container">
          <div>
            <span>Popular</span>
            <h2>The last of US II</h2>
            <p>
              Vivencie a narrativa emocionante e os personagens
              <br /> inesquecíveis em The Last of Us™, vencedor de mais
              <br /> de 200 prêmios de Jogo do Ano.
            </p>
          </div>
        </div>
      </S.Wrapper>
    </SwiperSlide>
  </Swiper>
)
