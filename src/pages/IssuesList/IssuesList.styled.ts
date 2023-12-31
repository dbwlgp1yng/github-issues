import { styled } from 'styled-components';

export const StyledIssuesList = styled.li`
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
      padding: 0; 
      margin: 0 0 0.5rem 0;
      font-size: 1.25rem;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        color: #019ce4;
      }
    }

    .list_info {
      display: flex;
      align-items: center;
      & > * {
        padding-right: 0.5rem;
      }
    }
  }
  .img_box {
    width: 100%;
    cursor: pointer;

    img {
      display: block;
      margin: 0 auto;
      padding: 1rem 0;
    }
  }
  .comment {
    display: flex;
    gap: 0.5rem;

    .comment_icon{
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;

export const StyledLoading = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1rem 0;
  color: darkblue;
  text-align: center;
  font-weight: bold;
`;
