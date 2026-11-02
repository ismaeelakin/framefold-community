import fs from "node:fs";
import assert from "node:assert/strict";

const root = new URL("../", import.meta.url);
const read = (path) =>
  fs.readFileSync(new URL(path, root), "utf8").replace(/\r\n/g, "\n");
const changelog = read("CHANGELOG.md");
const releases = [...changelog.matchAll(/^## (\d+\.\d+(?:\.\d+)?)(.*)$/gm)];
assert.ok(releases.length, "The release history needs a version heading.");
const current = releases[0][1];
const date =
  /\b(?:[1-9]|[12]\d|3[01]) (?:January|February|March|April|May|June|July|August|September|October|November|December) \d{4}\b/;
assert.ok(
  date.test(releases[0][0]),
  "Only the newest release must carry its publication date.",
);
for (const release of releases.slice(1)) {
  assert.ok(
    !date.test(release[0]),
    `Remove the older date from ${release[1]}; keep its notes.`,
  );
}
const datedLines = changelog.split("\n").filter((line) => date.test(line));
assert.deepEqual(
  datedLines,
  [releases[0][0]],
  "The changelog displays only the newest release date.",
);

for (const directory of ["", "docs/"]) {
  for (const file of fs.readdirSync(new URL(directory || "./", root), {
    withFileTypes: true,
  })) {
    if (
      !file.isFile() ||
      !file.name.endsWith(".md") ||
      file.name === "CHANGELOG.md"
    )
      continue;
    assert.ok(
      !date.test(read(directory + file.name)),
      `Link to current release notes instead of repeating a date in ${directory + file.name}.`,
    );
  }
}
assert.ok(
  read("README.md").includes(`Browser alpha ${current} available`),
  "README version is stale.",
);
assert.ok(
  read("GETTING_STARTED.md").includes(`released **alpha ${current}**`),
  "First-session guide version is stale.",
);
assert.ok(
  read("TESTING.md").includes(`released ${current} behaviour`),
  "Testing guide version is stale.",
);
assert.ok(
  read("docs/ARCHITECTURE.md").includes(`Current system: alpha ${current}`),
  "Architecture version is stale.",
);
assert.ok(
  read("docs/architecture.svg").includes(`released alpha ${current}`),
  "Architecture diagram version is stale.",
);
console.log(
  `Release ${current}: latest-only date and current guide versions verified.`,
);
