import React from "react";
import { useHistory } from "react-router-dom";

const Header = ({ hasToLogin, name }) => {
  const { push } = useHistory();
  return (
    <>
      {hasToLogin && !name && (
        <button type="button" onClick={() => push("/login")}>
          Login
        </button>
      )}
      {name && <h4>{`Hey ${name}`}</h4>}
    </>
  );
};

export default Header;
