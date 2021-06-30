const semver = require("semver");

// These are sourced from here:
// https://nodejs.org/api/n-api.html#n_api_node_api_version_matrix
const nodeApiVersionRanges = [
  [">=16 || ^15.12 || ^12.22", 8],
  [">=15 || ^14.12 || ^12.19 || ^10.23", 7],
  [">=14 || ^12.17 || ^10.20", 6],
  [">=13 || ^12.11 || ^10.17", 5],
  [">=12 || ^11.8 || ^10.16", 4],
  [">=10", 3],
];

function fromNodeVersion(nodeVersion) {
  for (const [range, version] of nodeApiVersionRanges) {
    if (semver.satisfies(nodeVersion, range)) {
      return version;
    }
  }

  return undefined;
}

// These are populated via `yarn electron-versions`
const electronNodeVersions =
  // replace-start
  [
    ["15.0.0-nightly.20210629", "16.4.0"],
    ["15.0.0-nightly.20210617", "16.2.0"],
    ["14.0.0-nightly.20210520", "14.17.0"],
    ["14.0.0-nightly.20210408", "14.16.1"],
    ["14.0.0-nightly.20210304", "14.16.0"],
    ["14.0.0-beta.1", "14.17.0"],
    ["13.0.0-nightly.20210226", "14.16.0"],
    ["13.0.0-nightly.20210108", "14.15.4"],
    ["13.0.0-nightly.20201221", "14.15.2"],
    ["13.0.0-nightly.20201119", "14.15.1"],
    ["12.0.0", "14.16.0"],
    ["12.0.0-nightly.20201030", "14.15.0"],
    ["12.0.0-nightly.20201023", "14.14.0"],
    ["12.0.0-nightly.20201013", "14.13.1"],
    ["12.0.0-nightly.20200827", "12.18.3"],
    ["12.0.0-beta.31", "14.16.0"],
    ["12.0.0-beta.1", "14.15.1"],
    ["11.0.0-nightly.20200729", "12.18.3"],
    ["11.0.0-nightly.20200702", "12.18.2"],
    ["11.0.0-nightly.20200619", "12.18.1"],
    ["11.0.0-nightly.20200618", "12.18.0"],
    ["11.0.0-nightly.20200525", "12.16.3"],
    ["11.0.0-beta.1", "12.18.3"],
    ["10.0.0-nightly.20200430", "12.16.3"],
    ["10.0.0-nightly.20200415", "12.16.2"],
    ["10.0.0-nightly.20200226", "12.16.1"],
    ["10.0.0-nightly.20200211", "12.15.0"],
    ["10.0.0-nightly.20200209", "12.14.1"],
    ["10.0.0-beta.1", "12.16.3"],
    ["9.0.0-nightly.20200110", "12.14.1"],
    ["9.0.0-nightly.20191220", "12.14.0"],
    ["9.0.0-nightly.20191121", "12.13.0"],
    ["9.0.0-beta.1", "12.14.1"],
    ["8.0.0-nightly.20191023", "12.13.0"],
    ["8.0.0-nightly.20191019", "12.12.0"],
    ["8.0.0-nightly.20191017", "12.10.0"],
    ["8.0.0-nightly.20190827", "12.9.1"],
    ["8.0.0-nightly.20190824", "12.9.0"],
    ["8.0.0-nightly.20190820", "12.8.1"],
    ["8.0.0-nightly.20190813", "12.8.0"],
    ["8.0.0-nightly.20190801", "12.6.0"],
    ["8.0.0-beta.1", "12.13.0"],
    ["7.0.0", "12.8.1"],
    ["7.0.0-nightly.20190719", "12.6.0"],
    ["7.0.0-nightly.20190521", "12.0.0"],
    ["7.0.0-beta.4", "12.8.1"],
    ["7.0.0-beta.3", "12.8.0"],
    ["7.0.0-beta.1", "12.6.0"],
    ["6.0.0", "12.4.0"],
    ["6.0.0-nightly.20190212", "12.0.0"],
    ["6.0.0-beta.14", "12.4.0"],
    ["5.0.0-nightly.20190121", "12.0.0"],
    ["5.0.0-nightly.20190107", "11.0.0"],
    ["5.0.0-beta.1", "12.0.0"],
    ["4.0.0-nightly.20181006", "10.11.0"],
    ["4.0.0-nightly.20180929", "10.6.0"],
    ["4.0.0-nightly.20180817", "10.2.0"],
    ["4.0.0-beta.1", "10.11.0"],
    ["3.0.0-beta.1", "10.2.0"],
  ];
// replace-end

function fromElectronVersion(electronVersion) {
  for (const [electron, node] of electronNodeVersions) {
    if (semver.gte(electronVersion, electron)) {
      return fromNodeVersion(node);
    }
  }

  return undefined;
}

module.exports = {
  fromNodeVersion,
  fromElectronVersion,
};
