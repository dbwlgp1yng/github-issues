import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.REACT_APP_OCTOKIT_TOKEN,
});

export async function getIssues(page: number) {
  const res = await octokit.request(
    `GET /repos/{owner}/{repo}/issues?state=open&sort=comments&page=${page}`, {
      owner: 'facebook',
      repo: 'react',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    }
  );
  if (res.status !== 200) {
    return [];
  }
  return res.data;
}

export async function getIssue(id: number) {
  try {
    const res = await octokit.request('GET /repos/{owner}/{repo}/issues/{issue_number}', {
      owner: 'facebook',
      repo: 'react',
      issue_number: id,
    });

    if (res.status === 200) {
      return res.data;
    } else {
      return null;
    }
  } catch (error) {
    console.error('에러 발생:', error);
    return null;
  }
}
