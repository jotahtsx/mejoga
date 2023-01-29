import styled from 'styled-components'

export const Wrapper = styled.header`
  width: 100%;
  height: 5rem;
  background-color: var(--grey-400);
  .container {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 23.688rem 17.375rem 1fr;
    grid-column-gap: 1.25rem;
    height: 100%;
    max-width: 74rem;
    margin: 0 auto;
    .search {
      position: relative;
      width: 17.375rem;
      height: 2.5rem;
      input[type='text'] {
        width: 100%;
        height: 100%;
        padding: 0 0 0 1.25rem;
        color: var(--grey-200);
        background-color: var(--grey-500);
        border: none;
        border-radius: 0.375rem;
        font-weight: 600;
        &:focus {
          outline: none;
        }
      }
      button {
        position: absolute;
        top: 50%;
        right: 1.25rem;
        height: 1.25rem;
        width: 1.25rem;
        margin-top: -0.625rem;
        border: none;
        background-color: transparent;
      }
    }
    .actions {
      display: flex;
      justify-content: flex-end;
      grid-column-gap: 0.625rem;
    }
  }
`
