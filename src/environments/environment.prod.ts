export const environment = {
  production: true,
  version: require( '../../package.json').version,
  apiUrl: 'REPLACE_WITH_API_URL'
};

/**
 * *** NOTE ON CHANGING ENVIRONMENT VALUES ON THIS FILE ***
 * Angular comes with environment files that allow us to handle environment specific
 * configurations. They do not meet the requirements of a continuous delivery setup. 
 * For easier deploys process, you can generate just one builded image and overwrite
 * the common values such as `REPLACE_WITH_API_URL`.
 */
