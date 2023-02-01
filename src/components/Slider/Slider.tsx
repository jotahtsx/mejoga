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
        <div className="pattern"></div>
        <div className="container">
          <div>
            <span>Popular</span>
            <h2>The last of US II</h2>
            <p>
              Vivencie a narrativa emocionante e os personagens
              <br /> inesquecíveis em The Last of Us™, vencedor de mais
              <br /> de 200 prêmios de Jogo do Ano.
            </p>
            <button>Compre Agora</button>
          </div>
        </div>
      </S.Wrapper>
    </SwiperSlide>
    <SwiperSlide>
      <S.Wrapper
        style={{ backgroundImage: `url(./images/slider-bg-02.jpg)` }}
        className="sliderItem"
      >
        <div className="pattern"></div>
        <div className="container">
          <div>
            <span>Popular</span>
            <h2>Red Dead Redemption 2</h2>
            <p>
              A épica aventura de mundo aberto da Rockstar Games aclamada
              <br /> pela crítica e o jogo mais bem avaliado desta geração
              <br /> de consoles, agora chega aprimorado para PC
            </p>
            <button>Compre Agora</button>
          </div>
        </div>
      </S.Wrapper>
    </SwiperSlide>
    <SwiperSlide>
      <S.Wrapper
        style={{ backgroundImage: `url(./images/slider-bg-03.jpg)` }}
        className="sliderItem"
      >
        <div className="pattern"></div>
        <div className="container">
          <div>
            <span>Promoção</span>
            <h2>Tom Clancy&apos;s Rainbow Six Siege</h2>
            <p>
              O Tom Clancy&apos;s Rainbow Six Siege é o próximo lançamento
              <br /> da aclamada franquia de FPS desenvolvida pelo
              <br /> renomado estúdio Ubisoft Montreal.
            </p>
            <button>Compre Agora</button>
          </div>
        </div>
      </S.Wrapper>
    </SwiperSlide>
  </Swiper>
)
