import { IEnvironment } from "./environment.model";
import { ApplicationEnvironmentConfig } from "./default.environment";

export const environment: IEnvironment = {
  ...ApplicationEnvironmentConfig,
  apiHostURL: 'http://3.139.83.152:8081',
  production: true
};
