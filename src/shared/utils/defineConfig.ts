type DefineConfigFn = <T>(config: T, ...defines: T[]) => T;

export const defineConfig: DefineConfigFn = (initalConfig, ...restConfig) => {
  let resultConfig: typeof initalConfig = initalConfig;

  restConfig.forEach((config) => {
    resultConfig = Object.assign({}, resultConfig, config);
  });

  return resultConfig;
};
