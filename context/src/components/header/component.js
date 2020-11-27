import React from "react";
import { useAuth } from "utils/hooks";

const Header = () => {
  const { authType, oidcUser, login, logout, name } = useAuth();
  const displayName = authType === "NONE" ? name : oidcUser?.profile?.name;
  const isAuthenticated = oidcUser?.profile;
  return (
    <>
      {authType === "OIDC" && (
        <button type="button" onClick={isAuthenticated ? logout : login}>
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      )}
      {displayName && <h4>{`Hey ${displayName}`}</h4>}
    </>
  );
};

export default Header;
