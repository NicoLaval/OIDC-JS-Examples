import React, { useState, useEffect } from "react";
import {
  AuthenticationProvider,
  InMemoryWebStorage,
} from "@axa-fr/react-oidc-context";
import { Loader } from "components/commons";
import { buildOidcConfiguration } from "utils/oidc/build-configuration";

const AuthProviderOIDC = ({ children }) => {
  const [conf, setConf] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${window.location.origin}/oidc.json`)
      .then((r) => r.json())
      .then((r) => {
        setConf(r);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;
  return (
    <AuthenticationProvider
      configuration={buildOidcConfiguration(conf).config}
      isEnabled={conf.isEnabled}
      UserStore={InMemoryWebStorage}
      callbackComponentOverride={Loader}
      authenticating={Loader}
      sessionLostComponent={Loader}
    >
      {children}
    </AuthenticationProvider>
  );
};

export default AuthProviderOIDC;
