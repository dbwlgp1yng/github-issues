import { Octokit } from "@octokit/rest";
import { useState, useEffect } from 'react';
import { Issue } from '../IssuesType';

export function useFetchIssues(owner: string, repo: string) {
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
  }, [owner, repo]);

  const formattedIssues = list.map((issue: Issue) => ({
    ...issue,
    formattedDate: new Date(issue.created_at)
      .toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    }),
  }));

  return {
    issues: formattedIssues,
    isLoading,
    error
  };
}
