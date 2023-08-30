import { useParams } from 'react-router-dom';
import { useIssuesContext } from '../contexts/IssuesContext';
import { Issue } from '../IssuesType';
import Error from './Error';
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
  ## ${issue.title}
  ### #${issue.number}
  
  ![User Avatar](${issue.user.avatar_url})
  ${issue.user.login}
  ${issue.formattedDate}
  ${issue.comments}

  ${issue.body}
  `;
  
  return (
    <StyledIssuesDetail>
      <ReactMarkdown>
        {markdownContent}
      </ReactMarkdown>
    </StyledIssuesDetail>
  );
}