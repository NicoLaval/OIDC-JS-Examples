export const buildOidcConfiguration = (baseConfig) => {
  const {
    REACT_APP_OIDC_AUTHORITY: authority,
    REACT_APP_OIDC_CLIENT_ID: client_id,
  } = process.env;
  const configuration = {
    ...baseConfig,
    origin: window.location.origin,
    config: { ...baseConfig.config, authority, client_id },
  };
  return configuration;
};
