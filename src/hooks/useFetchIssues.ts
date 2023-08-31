import { Octokit } from "@octokit/rest";
import { useState, useEffect } from 'react';
import { Issue } from '../IssuesType';

export function useFetchIssues() {
  const [list, setList] = useState<Issue[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [page, setPage] = useState(1);

  const fetchIssuesList = async () => {
    try {
      const octokit = new Octokit({
        auth: process.env.REACT_APP_OCTOKIT_TOKEN,
      });

      const res = await octokit.request(
        `GET /repos/{owner}/{repo}/issues?state=open&sort=comments&page=${page}`, {
          owner: 'facebook',
          repo: 'react',
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        }
      );

      setList(prevList => [...prevList, ...res.data]);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false); 
    }
  };

  useEffect(() => {
    if (isLoading) {
      fetchIssuesList();
    }
  }, [isLoading]);

  const formattedIssues = list.map((issue: Issue) => ({
    ...issue,
    formattedDate: new Date(issue.created_at)
      .toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    }),
  }));

  const fetchNextPage = async () => {
    if (!isLoading) {
      setIsLoading(true);
      setPage(prevPage => prevPage + 1);
    }
  };

  return {
    issues: formattedIssues,
    isLoading,
    isEnd,
    error,
    fetchNextPage,
  };
}
