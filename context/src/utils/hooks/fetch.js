import { useAuth } from "./auth";

export const useAuthenticatedFetch = () => {
  const { authType, oidcUser } = useAuth();
  if (authType === "NONE") return (url) => fetch(url);
  if (authType === "OIDC") {
    const token = oidcUser?.access_token;
    return (url) =>
      fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  }
  throw new Error(`Auth type ${authType} is nor recognized`);
};
