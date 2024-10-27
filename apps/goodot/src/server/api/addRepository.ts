import { defineEventHandler, readBody } from 'h3';
import prisma from '@/server/prisma-client'
//import prisma from '../prisma/prisma-client';

export default defineEventHandler(async (event) => {
  // Get repository data from the request body
  const { repoData } = await readBody(event);

  // Check if repoData is defined
  if (!repoData) {
    throw new Error('repoData is undefined');
  }
  console.log(repoData);
  // Insert the repository data into the SQLite database
  const repository = await prisma.repository.create({
    data: {
      "id": 607686975,
      "node_id": "R_kgDOJDiRPw",
      "name": "tono",
      "full_name": "Hanif012/tono",
      "private": false,
      "html_url": "https://github.com/Hanif012/tono",
      "description": "godot game for telkom submission",
      "fork": false,
      "url": "https://api.github.com/repos/Hanif012/tono",
      "forks_url": "https://api.github.com/repos/Hanif012/tono/forks",
      "keys_url": "https://api.github.com/repos/Hanif012/tono/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/Hanif012/tono/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/Hanif012/tono/teams",
      "hooks_url": "https://api.github.com/repos/Hanif012/tono/hooks",
      "issue_events_url": "https://api.github.com/repos/Hanif012/tono/issues/events{/number}",
      "events_url": "https://api.github.com/repos/Hanif012/tono/events",
      "assignees_url": "https://api.github.com/repos/Hanif012/tono/assignees{/user}",
      "branches_url": "https://api.github.com/repos/Hanif012/tono/branches{/branch}",
      "tags_url": "https://api.github.com/repos/Hanif012/tono/tags",
      "blobs_url": "https://api.github.com/repos/Hanif012/tono/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/Hanif012/tono/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/Hanif012/tono/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/Hanif012/tono/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/Hanif012/tono/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/Hanif012/tono/languages",
      "stargazers_url": "https://api.github.com/repos/Hanif012/tono/stargazers",
      "contributors_url": "https://api.github.com/repos/Hanif012/tono/contributors",
      "subscribers_url": "https://api.github.com/repos/Hanif012/tono/subscribers",
      "subscription_url": "https://api.github.com/repos/Hanif012/tono/subscription",
      "commits_url": "https://api.github.com/repos/Hanif012/tono/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/Hanif012/tono/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/Hanif012/tono/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/Hanif012/tono/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/Hanif012/tono/contents/{+path}",
      "compare_url": "https://api.github.com/repos/Hanif012/tono/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/Hanif012/tono/merges",
      "archive_url": "https://api.github.com/repos/Hanif012/tono/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/Hanif012/tono/downloads",
      "issues_url": "https://api.github.com/repos/Hanif012/tono/issues{/number}",
      "pulls_url": "https://api.github.com/repos/Hanif012/tono/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/Hanif012/tono/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/Hanif012/tono/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/Hanif012/tono/labels{/name}",
      "releases_url": "https://api.github.com/repos/Hanif012/tono/releases{/id}",
      "deployments_url": "https://api.github.com/repos/Hanif012/tono/deployments",
      "created_at": "2023-02-28T13:32:01Z",
      "updated_at": "2023-08-08T11:17:16Z",
      "pushed_at": "2023-05-11T10:56:15Z",
      "git_url": "git://github.com/Hanif012/tono.git",
      "ssh_url": "git@github.com:Hanif012/tono.git",
      "clone_url": "https://github.com/Hanif012/tono.git",
      "svn_url": "https://github.com/Hanif012/tono",
      "homepage": "",
      "size": 100774,
      "stargazers_count": 1,
      "watchers_count": 1,
      "language": "GDScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "has_discussions": false,
      "forks_count": 1,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 0,
      "allow_forking": true,
      "is_template": false,
      "web_commit_signoff_required": false,
      "visibility": "public",
      "forks": 1,
      "open_issues": 0,
      "watchers": 1,
      "default_branch": "main",
      "temp_clone_token": "",
      "network_count": 1,
      "subscribers_count": 1
    }
  });

  return repository;
});
