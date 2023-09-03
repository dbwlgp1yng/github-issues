import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { StyledIssuesDetail, StyledLoading } from './IssuesDetail.styled';
import { getIssue } from '../../services/getIssues';
import { IssueType } from '../../type/issue';
import { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import remarkGfm from 'remark-gfm';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { formattedCreateAt } from '../../utils/formattedDate';

export default function IssuesDetail( ){
  const { id = '' } = useParams<{ id?: string }>();
  const [issueData, setIssueData] = useState<IssueType | null>(null);

  useEffect(() => {
    getIssue(Number(id)).then((data) => {
      setIssueData(data);
    });
  }, [id]);

  if (!issueData) {
    return <StyledLoading>Loading...</StyledLoading>;
  }
  
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
          <p>{formattedCreateAt(issueData?.created_at)}</p>
          <p>{issueData?.comments} comments</p>
        </div>
      </section>
      <ReactMarkdown
        className='markdown_box'
        remarkPlugins={[remarkGfm]}
        components={{
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter language={match[1]} PreTag="div" {...props} style={oneLight}>
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code {...props}>{children}</code>
            );
          },
        }}
      >
        {String(issueData?.body?.replace(/\n\s\n\s/gi, '\n\n&nbsp;\n\n'))}
      </ReactMarkdown>
    </StyledIssuesDetail>
  );
}