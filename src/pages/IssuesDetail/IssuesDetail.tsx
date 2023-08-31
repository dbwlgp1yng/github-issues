import { useParams } from 'react-router-dom';
import { useIssuesContext } from '../../contexts/IssuesContext';
import { Issue } from '../../IssuesType';
import Error from '../ErrorPage/Error';
import ReactMarkdown from 'react-markdown';
import { StyledIssuesDetail } from './IssuesDetail.styled';

export default function IssuesDetail( ){
  const { id = '' } = useParams<{ id?: string }>();
  const { issues }: any = useIssuesContext();
  const issue = issues.find((issue: Issue) => issue.number === parseInt(id));

  if (!issue) {
    return <Error />;
  }

  const markdownContent = `
    ${issue.body}
  `;
  
  return (
    <StyledIssuesDetail>
      <section>
        <div className='detail_title'>
          <h2>{issue.title}</h2>
          <span>#{issue.number}</span>
        </div>
        <div className='detail_profile'>
          <img
            src={issue.user.avatar_url}
            alt={issue.user.login}
          />
          <p>{issue.user.login}</p>
          <p>{issue.formattedDate}</p>
          <p>{issue.comments} comments</p>
        </div>
      </section>
      <ReactMarkdown className='markdown_box'>
        {markdownContent}
      </ReactMarkdown>
    </StyledIssuesDetail>
  );
}