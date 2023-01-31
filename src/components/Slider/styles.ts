import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 37.5rem;
  background-size: cover;
  background-repeat: none;
  .container {
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
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.5rem;
      text-shadow: 1px 1px rgb(0 0 0 / 50%);
      color: var(--white);
    }
  }
`
