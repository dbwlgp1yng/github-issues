import { styled } from 'styled-components';

export const StyledIssuesList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  border-bottom: 1px solid #999;
  padding: 0 1rem;

  .list_item {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    
    .list_title {
      font-size: 1.25rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    .list_info {
      display: flex;
      align-items: center;
      & > * {
        padding-right: 0.5rem;
      }
    }
  }
  img {
    margin: 0 auto;
  }
`;