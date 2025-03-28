const assert = require("assert");
const nodeApi = require(".");

assert.strictEqual(nodeApi.fromNodeVersion("0.0.1"), undefined);
assert.strictEqual(nodeApi.fromNodeVersion("9.0.0"), undefined);
assert.strictEqual(nodeApi.fromNodeVersion("10.0.0"), 3);
assert.strictEqual(nodeApi.fromNodeVersion("10.16.0"), 4);
assert.strictEqual(nodeApi.fromNodeVersion("10.17.0"), 5);
assert.strictEqual(nodeApi.fromNodeVersion("12.13.0"), 5);
assert.strictEqual(nodeApi.fromNodeVersion("10.20.0"), 6);
assert.strictEqual(nodeApi.fromNodeVersion("10.23.0"), 7);
assert.strictEqual(nodeApi.fromNodeVersion("16.0.0"), 8);
assert.strictEqual(nodeApi.fromNodeVersion("18.0.0"), 8);
assert.strictEqual(nodeApi.fromNodeVersion("21.0.0"), 9);
assert.strictEqual(nodeApi.fromNodeVersion("22.0.0"), 9);
assert.strictEqual(nodeApi.fromNodeVersion("22.15.0"), 10);
assert.strictEqual(nodeApi.fromNodeVersion("24.0.0"), 10);
assert.strictEqual(nodeApi.fromNodeVersion("25.0.0"), 10);

assert.strictEqual(nodeApi.fromElectronVersion("0.25.0"), undefined);
assert.strictEqual(nodeApi.fromElectronVersion("1.0.0"), undefined);
assert.strictEqual(nodeApi.fromElectronVersion("2.0.0"), undefined);
assert.strictEqual(nodeApi.fromElectronVersion("3.0.0"), 3);
assert.strictEqual(nodeApi.fromElectronVersion("4.0.0"), 3);
assert.strictEqual(nodeApi.fromElectronVersion("5.0.0"), 4);
assert.strictEqual(nodeApi.fromElectronVersion("6.0.0"), 4);
assert.strictEqual(nodeApi.fromElectronVersion("7.0.0"), 4);
assert.strictEqual(nodeApi.fromElectronVersion("8.0.0"), 5);
assert.strictEqual(nodeApi.fromElectronVersion("9.0.0"), 5);
assert.strictEqual(nodeApi.fromElectronVersion("10.0.0"), 5);
assert.strictEqual(nodeApi.fromElectronVersion("11.0.0"), 6);
assert.strictEqual(nodeApi.fromElectronVersion("12.0.0"), 7);
assert.strictEqual(nodeApi.fromElectronVersion("13.0.0"), 7);
assert.strictEqual(nodeApi.fromElectronVersion("14.0.0"), 7);
assert.strictEqual(nodeApi.fromElectronVersion("15.0.0"), 8);
assert.strictEqual(nodeApi.fromElectronVersion("16.0.0"), 8);
assert.strictEqual(nodeApi.fromElectronVersion("28.0.0"), 9);
assert.strictEqual(nodeApi.fromElectronVersion("35.0.0"), 10);
