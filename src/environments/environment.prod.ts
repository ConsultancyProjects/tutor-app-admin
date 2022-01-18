import { IEnvironment } from "./environment.model";
import { ApplicationEnvironmentConfig } from "./default.environment";

export const environment: IEnvironment = {
  ...ApplicationEnvironmentConfig,
  apiHostURL: 'http://3.144.95.206:8081',
  production: true
};
