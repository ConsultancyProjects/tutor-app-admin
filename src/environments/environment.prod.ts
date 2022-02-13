import { IEnvironment } from "./environment.model";
import { ApplicationEnvironmentConfig } from "./default.environment";

export const environment: IEnvironment = {
  ...ApplicationEnvironmentConfig,
  apiHostURL: 'http://18.221.235.136:8081',
  production: true
};
