-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_License" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "key" TEXT,
    "name" TEXT NOT NULL,
    "spdx_id" TEXT NOT NULL,
    "url" TEXT,
    "node_id" TEXT NOT NULL
);
INSERT INTO "new_License" ("id", "key", "name", "node_id", "spdx_id", "url") SELECT "id", "key", "name", "node_id", "spdx_id", "url" FROM "License";
DROP TABLE "License";
ALTER TABLE "new_License" RENAME TO "License";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
