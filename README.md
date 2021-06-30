# node-api-version

Get the maximum Node-API version supported via a specific version of node or Electron.

```js
const nodeApiVersion = require("node-api-version");

nodeApiVersion.fromNodeVersion("9.0.0"); // undefined
nodeApiVersion.fromNodeVersion("12.13.0"); // 5

nodeApiVersion.fromElectronVersion("2.0.0"); // undefined
nodeApiVersion.fromElectronVersion("13.0.0"); // 7
nodeApiVersion.fromElectronVersion("15.0.0-nightly.20210629"); // 8
```
