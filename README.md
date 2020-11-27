# OIDC examples

`Context` & `Redux` implementations for authentication.

In both samples, 2 modes are available:

- NONE: disable authentication
- OIDC: based on [Axa librairies](https://github.com/AxaGuilDEv/react-oidc)

Auth type can be defined in the main `index.js`.

## Development

### OIDC configuration

- Create a `.env.local` at root to fill `REACT_APP_OIDC_AUTHORITY` & `REACT_APP_OIDC_CLIENT_ID` env vars.

or

- override `public/oidc.json`

## Requirement

React app has to be CRA.
