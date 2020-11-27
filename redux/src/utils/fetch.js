import { useStore } from "react-redux";

export const useAuthenticatedFetch = () => {
  const { authType, oidc } = useStore().getState();
  if (authType === "NONE") return (url) => fetch(url);
  if (authType === "OIDC") {
    const token = oidc?.user?.access_token;
    return (url) =>
      fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  }
  throw new Error(`Auth type ${authType} is nor recognized`);
};
