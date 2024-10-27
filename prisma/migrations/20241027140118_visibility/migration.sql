/*
  Warnings:

  - The primary key for the `Repository` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `licenseId` on the `Repository` table. All the data in the column will be lost.
  - You are about to drop the column `permissionsId` on the `Repository` table. All the data in the column will be lost.
  - You are about to drop the column `readme_content` on the `Repository` table. All the data in the column will be lost.
  - You are about to drop the column `repositoryId` on the `Topic` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `login_id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `user_type` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Repository" (
    "id" INTEGER NOT NULL,
    "node_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
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
    "mirror_url" TEXT,
    "archived" BOOLEAN NOT NULL,
    "disabled" BOOLEAN NOT NULL,
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
    "userId" TEXT
);
INSERT INTO "new_Repository" ("allow_forking", "archive_url", "archived", "assignees_url", "blobs_url", "branches_url", "clone_url", "collaborators_url", "comments_url", "commits_url", "compare_url", "contents_url", "contributors_url", "created_at", "default_branch", "deployments_url", "description", "disabled", "downloads_url", "events_url", "fork", "forks", "forks_count", "forks_url", "full_name", "git_commits_url", "git_refs_url", "git_tags_url", "git_url", "has_discussions", "has_downloads", "has_issues", "has_pages", "has_projects", "has_wiki", "homepage", "hooks_url", "html_url", "id", "is_template", "issue_comment_url", "issue_events_url", "issues_url", "keys_url", "labels_url", "language", "languages_url", "merges_url", "milestones_url", "mirror_url", "name", "network_count", "node_id", "notifications_url", "open_issues", "open_issues_count", "pulls_url", "pushed_at", "releases_url", "size", "ssh_url", "stargazers_count", "stargazers_url", "statuses_url", "subscribers_count", "subscribers_url", "subscription_url", "svn_url", "tags_url", "teams_url", "temp_clone_token", "trees_url", "updated_at", "url", "userId", "watchers", "watchers_count", "web_commit_signoff_required") SELECT "allow_forking", "archive_url", "archived", "assignees_url", "blobs_url", "branches_url", "clone_url", "collaborators_url", "comments_url", "commits_url", "compare_url", "contents_url", "contributors_url", "created_at", "default_branch", "deployments_url", "description", "disabled", "downloads_url", "events_url", "fork", "forks", "forks_count", "forks_url", "full_name", "git_commits_url", "git_refs_url", "git_tags_url", "git_url", "has_discussions", "has_downloads", "has_issues", "has_pages", "has_projects", "has_wiki", "homepage", "hooks_url", "html_url", "id", "is_template", "issue_comment_url", "issue_events_url", "issues_url", "keys_url", "labels_url", "language", "languages_url", "merges_url", "milestones_url", "mirror_url", "name", "network_count", "node_id", "notifications_url", "open_issues", "open_issues_count", "pulls_url", "pushed_at", "releases_url", "size", "ssh_url", "stargazers_count", "stargazers_url", "statuses_url", "subscribers_count", "subscribers_url", "subscription_url", "svn_url", "tags_url", "teams_url", "temp_clone_token", "trees_url", "updated_at", "url", "userId", "watchers", "watchers_count", "web_commit_signoff_required" FROM "Repository";
DROP TABLE "Repository";
ALTER TABLE "new_Repository" RENAME TO "Repository";
CREATE UNIQUE INDEX "Repository_id_key" ON "Repository"("id");
CREATE UNIQUE INDEX "Repository_node_id_key" ON "Repository"("node_id");
CREATE TABLE "new_Topic" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Topic" ("id", "name") SELECT "id", "name" FROM "Topic";
DROP TABLE "Topic";
ALTER TABLE "new_Topic" RENAME TO "Topic";
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "node_id" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "avatar_url" TEXT,
    "gravatar_id" TEXT,
    "url" TEXT,
    "html_url" TEXT,
    "followers_url" TEXT,
    "following_url" TEXT,
    "gists_url" TEXT,
    "starred_url" TEXT,
    "subscriptions_url" TEXT,
    "organizations_url" TEXT,
    "repos_url" TEXT,
    "events_url" TEXT,
    "received_events_url" TEXT,
    "type" TEXT,
    "site_admin" BOOLEAN
);
INSERT INTO "new_User" ("avatar_url", "events_url", "followers_url", "following_url", "gists_url", "gravatar_id", "html_url", "id", "login", "node_id", "organizations_url", "received_events_url", "repos_url", "site_admin", "starred_url", "subscriptions_url", "url") SELECT "avatar_url", "events_url", "followers_url", "following_url", "gists_url", "gravatar_id", "html_url", "id", "login", "node_id", "organizations_url", "received_events_url", "repos_url", "site_admin", "starred_url", "subscriptions_url", "url" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_node_id_key" ON "User"("node_id");
CREATE UNIQUE INDEX "User_login_key" ON "User"("login");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
