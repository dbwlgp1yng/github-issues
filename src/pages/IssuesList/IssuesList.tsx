import { StyledIssuesList } from './IssuesList.styled';
import img from "../../images/optimize.webp";
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiCommentDetail } from 'react-icons/bi';
import { IssueType } from '../../type/issue';
import { getIssues } from '../../services/getIssues';

export default function IssuesList() {
  const [issueList, setIssueList] = useState<IssueType[]>([]);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();
  const navigateToDetail = (number: number) => {
    navigate(`/issues/${number}`);
  }

  useEffect(() => {
    getIssues(page).then((data) => {
      setIssueList(data);
    });
  }, [page]);

  return (
    <ul>
      {
        issueList && issueList.map((issue: IssueType, idx: number) => (
          <React.Fragment key={issue.id}>
            <StyledIssuesList>
              <div className='list_item' onClick={() => navigateToDetail(issue.number)}>
                <h2 className='list_title'>{issue.title}</h2>
                <div className='list_info'>
                  <span>#{issue.number}</span>
                  <span>{issue.state}</span>
                  <span>{issue.created_at}</span>
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
