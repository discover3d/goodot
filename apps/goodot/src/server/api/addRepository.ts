import { defineEventHandler, readBody } from 'h3';
import prisma from '@/server/prisma-client';

export default defineEventHandler(async (event) => {
  // Get repository data from the request body
  const { repoData } = await readBody(event);

  // Check if repoData is defined
  if (!repoData) {
    throw new Error('repoData is undefined');
  }
  console.log(repoData);
  // Extract license data
  const { license } = repoData;
  console.log(license);
  // Check if the license already exists
  // let existingLicense = await prisma.license.findUnique({
  //   where: { key: license.key }, // This assumes 'key' is unique
  // });

  // If the license does not exist, create it
  // if (!existingLicense) {
    let existingLicense = await prisma.license.create({
      data: {
        key: license.key,
        name: license.name,
        spdx_id: license.spdx_id,
        url: license.url,
        node_id: license.node_id,
      },
    });
  // }

  // Insert the repository data into the SQLite database
  const repository = await prisma.repository.create({
    data: {
      node_id: repoData.node_id,
      name: repoData.name,
      full_name: repoData.full_name,
      private: repoData.private,
      html_url: repoData.html_url,
      description: repoData.description,
      fork: repoData.fork,
      url: repoData.url,
      forks_url: repoData.forks_url,
      keys_url: repoData.keys_url,
      collaborators_url: repoData.collaborators_url,
      teams_url: repoData.teams_url,
      hooks_url: repoData.hooks_url,
      issue_events_url: repoData.issue_events_url,
      events_url: repoData.events_url,
      assignees_url: repoData.assignees_url,
      branches_url: repoData.branches_url,
      tags_url: repoData.tags_url,
      blobs_url: repoData.blobs_url,
      git_tags_url: repoData.git_tags_url,
      git_refs_url: repoData.git_refs_url,
      trees_url: repoData.trees_url,
      statuses_url: repoData.statuses_url,
      languages_url: repoData.languages_url,
      stargazers_url: repoData.stargazers_url,
      contributors_url: repoData.contributors_url,
      subscribers_url: repoData.subscribers_url,
      subscription_url: repoData.subscription_url,
      commits_url: repoData.commits_url,
      git_commits_url: repoData.git_commits_url,
      comments_url: repoData.comments_url,
      issue_comment_url: repoData.issue_comment_url,
      contents_url: repoData.contents_url,
      compare_url: repoData.compare_url,
      merges_url: repoData.merges_url,
      archive_url: repoData.archive_url,
      downloads_url: repoData.downloads_url,
      issues_url: repoData.issues_url,
      pulls_url: repoData.pulls_url,
      milestones_url: repoData.milestones_url,
      notifications_url: repoData.notifications_url,
      labels_url: repoData.labels_url,
      releases_url: repoData.releases_url,
      deployments_url: repoData.deployments_url,
      created_at: new Date(repoData.created_at),
      updated_at: new Date(repoData.updated_at),
      pushed_at: new Date(repoData.pushed_at),
      git_url: repoData.git_url,
      ssh_url: repoData.ssh_url,
      clone_url: repoData.clone_url,
      svn_url: repoData.svn_url,
      homepage: repoData.homepage,
      size: repoData.size,
      stargazers_count: repoData.stargazers_count,
      watchers_count: repoData.watchers_count,
      language: repoData.language,
      has_issues: repoData.has_issues,
      has_projects: repoData.has_projects,
      has_downloads: repoData.has_downloads,
      has_wiki: repoData.has_wiki,
      has_pages: repoData.has_pages,
      has_discussions: repoData.has_discussions,
      forks_count: repoData.forks_count,
      mirror_url: repoData.mirror_url,
      archived: repoData.archived,
      disabled: repoData.disabled,
      open_issues_count: repoData.open_issues_count,
      allow_forking: repoData.allow_forking,
      is_template: repoData.is_template,
      web_commit_signoff_required: repoData.web_commit_signoff_required,
      visibility: repoData.visibility,
      forks: repoData.forks,
      open_issues: repoData.open_issues,
      watchers: repoData.watchers,
      default_branch: repoData.default_branch,
      temp_clone_token: repoData.temp_clone_token,
      network_count: repoData.network_count,
      subscribers_count: repoData.subscribers_count,
      license: {
        connect: { id: existingLicense.id }, // Use connect to link the existing license
      },
    },
  });

  return repository;
});
