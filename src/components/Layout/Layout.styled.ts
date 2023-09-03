import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1.5rem 0;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: bold;

  .header_wrap {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000;
    cursor: pointer;
    .github_icon {
      width: 2.5rem;
      height: 2.5rem;
      margin-right: 1rem;
    }
    .owner {
      color: #666;
    }
  }
`;