declare function fromNodeVersion(version: string): number | undefined;
declare function fromElectronVersion(version: string): number | undefined;

declare const _default: {
  fromNodeVersion: typeof fromNodeVersion;
  fromElectronVersion: typeof fromElectronVersion;
};
export = _default;
