import { StyledIssuesList } from './IssuesList.styled';
import img from "../images/optimize.webp";
import React from 'react';
import { useIssuesContext } from '../contexts/IssuesContext';
import { Link, useNavigate } from 'react-router-dom';
import { Issue } from '../IssuesType';
import { BiCommentDetail } from 'react-icons/bi';

export default function IssuesList() {
  const { issues }: any = useIssuesContext();
  const navigate = useNavigate();

  const pathToDetail = (number: number) => {
    console.log(number);
    navigate(`/issues/${number}`);
  }

  return (
    <ul>
      {
        issues && issues.map((issue: Issue, idx: number) => (
          <React.Fragment key={issue.id}>
            <StyledIssuesList>
              <div className='list_item' onClick={() => pathToDetail(issue.number)}>
                <h2 className='list_title'>{issue.title}</h2>
                <div className='list_info'>
                  <span>#{issue.number}</span>
                  <span>{issue.state}</span>
                  <span>{issue.formattedDate}</span>
                  <span>by {issue.user.login}</span>
                </div>
              </div>
              <div className='comment'>
                <BiCommentDetail className='comment_icon' />
                <span>{issue.comments}</span>
              </div>
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
    </ul>
  );
}
