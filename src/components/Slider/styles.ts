import styled from 'styled-components'

export const Slider = styled.div`
  width: 100%;
  .swiper-pagination-fraction {
    color: var(--white);
    font-weight: 600;
  }
  .swiper-pagination-fraction:before,
  .swiper-pagination-fraction:after {
    content: '';
    display: inline-block;
    width: 50%;
    margin: 0 0.5em 0 -55%;
    vertical-align: middle;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  .swiper-pagination-fraction:after {
    margin: 0 -55% 0 0.5em;
  }
  .swiper-pagination-current {
    font-size: 1.5rem;
  }
  .swiper-pagination-total {
    font-size: 1.875rem;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  height: 35rem;
  background-size: cover;
  background-repeat: none;
  .pattern {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    height: 100%;
    width: 100%;
    background-color: rgb(0 0 0 / 40%);
  }
  .container {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    height: 100%;
    max-width: 74rem;
    margin: 0 auto;
    span {
      width: auto;
      display: inline-block;
      margin-bottom: 1.25rem;
      padding: 7px 14px;
      font-weight: 700;
      color: var(--white);
      background-color: var(--grey-200);
      border-radius: 1.875rem;
    }
    h2 {
      margin-bottom: 1.25rem;
      font-size: 2.25rem;
      font-weight: 900;
      text-shadow: 1px 1px rgb(0 0 0 / 50%);
      color: var(--white);
    }
    p {
      font-size: 1rem;
      font-weight: 500;
      line-height: 2rem;
      text-shadow: 1px 1px rgb(0 0 0 / 50%);
      margin-bottom: 2.5rem;
      color: var(--white);
    }
    button {
      height: 3.125rem;
      width: 10.625rem;
      font-size: 0.875rem;
      font-weight: 700;
      text-transform: uppercase;
      text-shadow: 1px 1px rgb(0 0 0 / 50%);
      color: var(--white);
      background-color: var(--primary);
      border: none;
      border-radius: 0.25rem;
    }
  }
`
