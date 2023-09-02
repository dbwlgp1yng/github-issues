import { StyledIssuesList } from './IssuesList.styled';
import img from "../../images/optimize.webp";
import React, { useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Issue } from '../../IssuesType';
import { BiCommentDetail } from 'react-icons/bi';
import { useFetchIssues } from '../../hooks/useFetchIssues';
import Error from '../ErrorPage/Error';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export default function IssuesList() {
  const { issues, isLoading, error, fetchNextPage}: any = useFetchIssues();
  const target = useRef<HTMLDivElement | null>(null);
  const { observe, unobserve } = useIntersectionObserver(() => {
    if (!isLoading) {
      fetchNextPage();
    }
  });
  const navigate = useNavigate();
  const navigateToDetail = (number: number) => {
    navigate(`/issues/${number}`);
  }

  useEffect(() => {
    const targetElement = target.current;
    if (targetElement) {
      observe(targetElement);
      return () => {
        unobserve(targetElement);
      };
    }
  }, [observe, unobserve]);

  return (
    <>
      <section ref={target}>
        {
          issues && issues.map((issue: Issue, idx: number) => (
            <React.Fragment key={issue.id}>
              <StyledIssuesList>
                <div className='list_item' onClick={() => navigateToDetail(issue.number)}>
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
        <div ref={target} style={{ height: '1px' }}></div>
      </section>
      {isLoading && <p>Loading...</p>}
      {error && <Error />}
    </>
  );
}