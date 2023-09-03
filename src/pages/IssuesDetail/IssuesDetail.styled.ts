import { styled } from 'styled-components';

export const StyledIssuesDetail = styled.div`
  width: 70%;
  margin: 0 auto;

  section {
    width: 100%;
    margin-bottom: 0.5rem;
  }
  .detail_title {
    display: flex;
    align-items: center;
    gap: 1rem;

    h2 { margin: 0 }
    span {
      color: #999;
      font-size: 1.25rem;
    }
  }
  .detail_profile {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #999;

    img {
      width: 2rem;
      height: 2rem;
      border-radius: 100%;
    }
  }

  .markdown_box {
    width: 100%;
    border: 1px solid #666;
    border-radius: 0.5rem;
    padding: 1.5rem;

    img {
      width: 100%;
    }
  }
`;

export const StyledLoading = styled.div`
  width: 60%;
  margin: 0 auto;
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
`;