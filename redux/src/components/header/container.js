import { connect } from "react-redux";
import Header from "./component";

const mapStateToProps = (state) => {
  const { authType } = state;
  if (authType === "NONE") return { hasToLogin: false, name: "Fake User" };
  if (authType === "OIDC")
    return { hasToLogin: true, name: state?.oidc?.user?.profile?.name };
  throw new Error(`Auth type ${authType} is nor recognized`);
};

export default connect(mapStateToProps)(Header);
