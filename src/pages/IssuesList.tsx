import { StyledIssuesList } from './IssuesList.styled';
import img from "../images/optimize.webp";
import React from 'react';
import { useIssuesContext } from '../contexts/IssuesListContext';
import { Link } from 'react-router-dom';

export interface Issue {
  id: number;
  number: number;
  title: string;
  user: { login: string };
  created_at: string;
  comments: number;
  state: string;
}
function IssuesList() {
  const { issues }: any = useIssuesContext();

  return (
    <>
      {
        issues && issues.map((issue: Issue, idx: number) => (
          <React.Fragment key={issue.id}>
            <StyledIssuesList>
              <div className='list_item'>
                <h2 className='list_title'>{issue.title}</h2>
                <div className='list_info'>
                  <span>#{issue.number}</span>
                  <span>{issue.state}</span>
                  <span>by {issue.user.login}</span>
                  <p>{issue.created_at}</p>
                </div>
              </div><p>{issue.comments}</p>
            </StyledIssuesList>
            {idx % 4 === 3 && 
              <StyledIssuesList>
                <Link className='img_box' to='https://www.wanted.co.kr/'>
                  <img src={img} alt="원티드" />
                </Link>
              </StyledIssuesList>
            }
          </React.Fragment>
        ))
      }
    </>
  );
}

export default IssuesList;
