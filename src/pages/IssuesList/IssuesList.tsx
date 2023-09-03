import { StyledIssuesList, StyledLoading } from './IssuesList.styled';
import img from "../../images/optimize.webp";
import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiCommentDetail } from 'react-icons/bi';
import { IssueType } from '../../type/issue';
import { getIssues } from '../../services/getIssues';
import { formattedCreateAt } from '../../utils/formattedDate';

export default function IssuesList() {
  const [issueList, setIssueList] = useState<IssueType[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const target = useRef<HTMLDivElement | null>(null);

  const fetchIssuesList = async (page: number) => {
    const data = await getIssues(page);
    setIssueList(prev => [...prev, ...data]);
    setLoading(true);
  }

  const getMorePages = () => {
		setPage(prev => prev + 1);
	}

  useEffect(() => {
    fetchIssuesList(page);
  }, [page]);

  useEffect(() => {
    if (loading && target.current) { //로딩되었을 때만 실행
      const observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {
            getMorePages();
          }
        },
        { threshold: 1 }
      );
      observer.observe(target.current); // 옵져버 탐색 시작
    }
  }, [loading]);

  const navigate = useNavigate();
  const navigateToDetail = (number: number) => {
    navigate(`/issues/${number}`);
  }

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
                  <span>{formattedCreateAt(issue.created_at)}</span>
                  <span>by {issue.user?.login}</span>
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
      <StyledLoading ref={target}>
        Loading...
      </StyledLoading>
    </ul>
  );
}
