import { createContext, useContext, useState, useEffect } from 'react';
import { Octokit } from "@octokit/rest";
import { Issue } from '../pages/IssuesList';

type ContextType = {
  issues: Issue[];
} | null;

const IssuesContext = createContext<ContextType>(null);

export function useIssuesContext() {
  return useContext(IssuesContext);
}

export function IssuesProvider({ owner, repo, children }: any) {
  const [code, setCode] = useState<Issue[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchIssues() {
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

        setCode(res.data);
        setIsLoading(false);
      } catch (err) {
        setError(err as Error);
        setIsLoading(false);
      }
    }
    fetchIssues();
  }, []);

  const contextValue = {
    issues: code,
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
