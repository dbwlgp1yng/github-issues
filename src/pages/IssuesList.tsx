import { StyledIssuesList } from './IssuesList.styled';
import useOctokit from '../hooks/useOctokit';

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
  const { code }: any = useOctokit(); 

  return (
    <>
      {
        code && code.map((issue: Issue) => (
          <StyledIssuesList key={issue.id}>
            <div className='list_item'>
              <h2 className='list_title'>{issue.title}</h2>
              <div className='list_info'>
                <span>#{issue.number}</span>
                <span>{issue.state}</span>
                <span>by {issue.user.login}</span>
                <p>{issue.created_at}</p>
              </div>
            </div>
            <p>{issue.comments}</p>
          </StyledIssuesList>
        ))
      }
    </>
  );
}

export default IssuesList;
