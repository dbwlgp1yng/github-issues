import { createContext, useContext, useState, useEffect } from 'react';
import { Octokit } from "@octokit/rest";
import { Issue } from '../IssuesType';

type ContextType = {
  issues: Issue[];
} | null;

const IssuesContext = createContext<ContextType>(null);

export function useIssuesContext() {
  return useContext(IssuesContext);
}

export function IssuesProvider({ owner, repo, children }: any) {
  const [list, setList] = useState<Issue[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchIssuesList() {
      try {
        const octokit = new Octokit({
          auth: process.env.REACT_APP_OCTOKIT_TOKEN,
        });

        const res = await octokit.request(
          'GET /repos/{owner}/{repo}/issues?state=open&sort=comments', {
            owner: owner,
            repo: repo,
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
          }
        );

        setList(res.data);
        setIsLoading(false);
      } catch (err) {
        setError(err as Error);
        setIsLoading(false);
      }
    }
    fetchIssuesList();
  }, []);

  const formattedIssues = list.map((issue: Issue) => ({
    ...issue,
    formattedDate: new Date(issue.created_at)
      .toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    }),
  }));
  
  const contextValue = {
    issues: formattedIssues,
  };

  return (
    <IssuesContext.Provider value={contextValue}>
      {!isLoading ? ( 
        error ? (
          <div>Error loading issues</div>
        ) : (
          children
        )
      ) : (
        <div>Loading...</div>
      )}
    </IssuesContext.Provider>
  );
}
