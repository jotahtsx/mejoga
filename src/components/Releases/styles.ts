import styled from 'styled-components'

export const Wrapper = styled.div`
  background: rgb(17, 40, 82);
  background: linear-gradient(
    90deg,
    rgba(17, 40, 82, 1) 0%,
    rgba(28, 59, 106, 1) 100%
  );
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 1.25rem;
    max-width: 73.75rem;
    margin: 0 auto;
    padding-top: 3.75rem;
    padding-bottom: 3.75rem;
  }
`

export const WrapperInside = styled.div`
  max-width: 73.75rem;
  margin: 0 auto;
  padding-top: 3.75rem;
  h2 {
    font-size: 1.75rem;
    font-weight: 800;
    color: var(--white);
  }
`
