import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/auth";
import Root from "./root";
import reportWebVitals from "./reportWebVitals";

export const AuthTypeContext = React.createContext();

const renderApp = (Component, authType) => {
  ReactDOM.render(
    <React.StrictMode>
      <AuthTypeContext.Provider value={authType}>
        <AuthProvider authType={authType}>
          <BrowserRouter>
            <Component />
          </BrowserRouter>
        </AuthProvider>
      </AuthTypeContext.Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

// Instead of Promise.resolve, deal with a public API endpoint

Promise.resolve({ authType: "OIDC" }).then(({ authType }) =>
  renderApp(Root, authType)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
