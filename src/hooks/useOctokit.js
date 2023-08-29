import { useState, useEffect } from 'react';
import { Octokit } from "@octokit/rest";

export default function useOctokit() {
  const [code, setCode] = useState();

  useEffect(() => {
    async function onLoad() {
      try {
        const octokit = new Octokit({
          auth: process.env.REACT_APP_OCTOKIT_TOKEN,
        });

        const res = await octokit.request(
          'GET /repos/{owner}/{repo}/issues', {
            owner: 'facebook',
            repo: 'react',
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
          }
        );

        setCode(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    onLoad();
  }, []);

  return {
    code
  };
}
