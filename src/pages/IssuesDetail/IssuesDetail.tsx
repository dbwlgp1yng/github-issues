import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { StyledIssuesDetail } from './IssuesDetail.styled';
import { getIssue } from '../../services/getIssues';
import { IssueType } from '../../type/issue';
import { useEffect, useState } from 'react';
import Error from '../ErrorPage/Error';

export default function IssuesDetail( ){
  const { id = '' } = useParams<{ id?: string }>();
  const [issueData, setIssueData] = useState<IssueType | null>(null);

  useEffect(() => {
    getIssue(Number(id)).then((data) => {
      setIssueData(data);
    });
  }, [id]);

  if (!issueData) {
    return <Error />;
  }

  const markdownContent = `
    ${issueData?.body}
  `;
  
  return (
    <StyledIssuesDetail>
      <section>
        <div className='detail_title'>
          <h2>{issueData?.title}</h2>
          <span>#{issueData?.number}</span>
        </div>
        <div className='detail_profile'>
          <img
            src={issueData?.user?.avatar_url}
            alt={issueData?.user?.login}
          />
          <p>{issueData?.user?.login}</p>
          <p>{issueData?.created_at}</p>
          <p>{issueData?.comments} comments</p>
        </div>
      </section>
      <ReactMarkdown className='markdown_box'>
        {markdownContent}
      </ReactMarkdown>
    </StyledIssuesDetail>
  );
}