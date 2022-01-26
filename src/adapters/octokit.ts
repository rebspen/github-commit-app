import { Octokit } from "@octokit/core";

const octokit = new Octokit({ auth: process.env.REACT_APP_GIT_TOKEN });

export const getCommitsFromGit = async (
  owner: string,
  repo: string,
  perPage: number,
  page: number,
) => {
  const response = await octokit.request("GET /repos/{owner}/{repo}/commits", {
    owner,
    repo,
    per_page: perPage,
    page
  });
  console.log("here", response);
};
