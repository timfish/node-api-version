declare module "node-api-version" {
  function fromNodeVersion(version: string): number | undefined;
  function fromElectronVersion(version: string): number | undefined;

  export = {
    fromNodeVersion,
    fromElectronVersion,
  };
}
