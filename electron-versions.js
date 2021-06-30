const got = require("got");
const semver = require("semver");
const { readFileSync, writeFileSync } = require("fs");

got(`https://cdn.jsdelivr.net/gh/electron/releases/lite.json`).then(
  (response) => {
    const releases = JSON.parse(response.body).reverse();

    const versionChanges = [];

    let prevNode = "";
    for (const release of releases) {
      const version = semver.parse(release.version);
      if (version.major < 3) {
        continue;
      }

      if (release.deps.node !== prevNode) {
        prevNode = release.deps.node;
        versionChanges.push([release.version, prevNode]);
      }
    }

    const objStr = JSON.stringify(versionChanges.reverse(), null, "  ");
    const origFile = readFileSync("index.js", { encoding: "utf-8" });
    const newFile = origFile.replace(
      /\/\/ replace-start[\S\s]*\/\/ replace-end/g,
      `// replace-start
    ${objStr};
    // replace-end`
    );

    writeFileSync("index.js", newFile);
  }
);
