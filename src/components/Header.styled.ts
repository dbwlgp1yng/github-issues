import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1.5rem 0;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: bold;

  div {
    cursor: pointer;

    .owner{
      color: #666;
    }
  }
`;