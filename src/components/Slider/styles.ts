import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 37.5rem;
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
      background-color: var(--primary);
      border: none;
      border-radius: 0.25rem;
    }
  }
`
