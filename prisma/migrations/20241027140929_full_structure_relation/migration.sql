/*
  Warnings:

  - You are about to drop the column `archived` on the `Repository` table. All the data in the column will be lost.
  - You are about to drop the column `disabled` on the `Repository` table. All the data in the column will be lost.
  - You are about to drop the column `mirror_url` on the `Repository` table. All the data in the column will be lost.
  - Added the required column `private` to the `Repository` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Repository" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "node_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "private" BOOLEAN NOT NULL,
    "html_url" TEXT,
    "description" TEXT,
    "fork" BOOLEAN NOT NULL,
    "url" TEXT,
    "forks_url" TEXT,
    "keys_url" TEXT,
    "collaborators_url" TEXT,
    "teams_url" TEXT,
    "hooks_url" TEXT,
    "issue_events_url" TEXT,
    "events_url" TEXT,
    "assignees_url" TEXT,
    "branches_url" TEXT,
    "tags_url" TEXT,
    "blobs_url" TEXT,
    "git_tags_url" TEXT,
    "git_refs_url" TEXT,
    "trees_url" TEXT,
    "statuses_url" TEXT,
    "languages_url" TEXT,
    "stargazers_url" TEXT,
    "contributors_url" TEXT,
    "subscribers_url" TEXT,
    "subscription_url" TEXT,
    "commits_url" TEXT,
    "git_commits_url" TEXT,
    "comments_url" TEXT,
    "issue_comment_url" TEXT,
    "contents_url" TEXT,
    "compare_url" TEXT,
    "merges_url" TEXT,
    "archive_url" TEXT,
    "downloads_url" TEXT,
    "issues_url" TEXT,
    "pulls_url" TEXT,
    "milestones_url" TEXT,
    "notifications_url" TEXT,
    "labels_url" TEXT,
    "releases_url" TEXT,
    "deployments_url" TEXT,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL,
    "pushed_at" DATETIME NOT NULL,
    "git_url" TEXT,
    "ssh_url" TEXT,
    "clone_url" TEXT,
    "svn_url" TEXT,
    "homepage" TEXT,
    "size" INTEGER NOT NULL,
    "stargazers_count" INTEGER NOT NULL,
    "watchers_count" INTEGER NOT NULL,
    "language" TEXT,
    "has_issues" BOOLEAN NOT NULL,
    "has_projects" BOOLEAN NOT NULL,
    "has_downloads" BOOLEAN NOT NULL,
    "has_wiki" BOOLEAN NOT NULL,
    "has_pages" BOOLEAN NOT NULL,
    "has_discussions" BOOLEAN NOT NULL,
    "forks_count" INTEGER NOT NULL,
    "open_issues_count" INTEGER NOT NULL,
    "allow_forking" BOOLEAN NOT NULL,
    "is_template" BOOLEAN NOT NULL,
    "web_commit_signoff_required" BOOLEAN NOT NULL,
    "visibility" TEXT,
    "forks" INTEGER,
    "open_issues" INTEGER,
    "watchers" INTEGER,
    "default_branch" TEXT,
    "temp_clone_token" TEXT,
    "network_count" INTEGER,
    "subscribers_count" INTEGER,
    "userId" TEXT,
    "licenseId" INTEGER,
    CONSTRAINT "Repository_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Repository_licenseId_fkey" FOREIGN KEY ("licenseId") REFERENCES "License" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Repository" ("allow_forking", "archive_url", "assignees_url", "blobs_url", "branches_url", "clone_url", "collaborators_url", "comments_url", "commits_url", "compare_url", "contents_url", "contributors_url", "created_at", "default_branch", "deployments_url", "description", "downloads_url", "events_url", "fork", "forks", "forks_count", "forks_url", "full_name", "git_commits_url", "git_refs_url", "git_tags_url", "git_url", "has_discussions", "has_downloads", "has_issues", "has_pages", "has_projects", "has_wiki", "homepage", "hooks_url", "html_url", "id", "is_template", "issue_comment_url", "issue_events_url", "issues_url", "keys_url", "labels_url", "language", "languages_url", "merges_url", "milestones_url", "name", "network_count", "node_id", "notifications_url", "open_issues", "open_issues_count", "pulls_url", "pushed_at", "releases_url", "size", "ssh_url", "stargazers_count", "stargazers_url", "statuses_url", "subscribers_count", "subscribers_url", "subscription_url", "svn_url", "tags_url", "teams_url", "temp_clone_token", "trees_url", "updated_at", "url", "userId", "visibility", "watchers", "watchers_count", "web_commit_signoff_required") SELECT "allow_forking", "archive_url", "assignees_url", "blobs_url", "branches_url", "clone_url", "collaborators_url", "comments_url", "commits_url", "compare_url", "contents_url", "contributors_url", "created_at", "default_branch", "deployments_url", "description", "downloads_url", "events_url", "fork", "forks", "forks_count", "forks_url", "full_name", "git_commits_url", "git_refs_url", "git_tags_url", "git_url", "has_discussions", "has_downloads", "has_issues", "has_pages", "has_projects", "has_wiki", "homepage", "hooks_url", "html_url", "id", "is_template", "issue_comment_url", "issue_events_url", "issues_url", "keys_url", "labels_url", "language", "languages_url", "merges_url", "milestones_url", "name", "network_count", "node_id", "notifications_url", "open_issues", "open_issues_count", "pulls_url", "pushed_at", "releases_url", "size", "ssh_url", "stargazers_count", "stargazers_url", "statuses_url", "subscribers_count", "subscribers_url", "subscription_url", "svn_url", "tags_url", "teams_url", "temp_clone_token", "trees_url", "updated_at", "url", "userId", "visibility", "watchers", "watchers_count", "web_commit_signoff_required" FROM "Repository";
DROP TABLE "Repository";
ALTER TABLE "new_Repository" RENAME TO "Repository";
CREATE UNIQUE INDEX "Repository_node_id_key" ON "Repository"("node_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
