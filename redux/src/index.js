import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/auth";
import Root from "./root";
import { configureStore } from "./store/configure-store";
import reportWebVitals from "./reportWebVitals";

const renderApp = (Component, init) => {
  const store = configureStore(init);
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <AuthProvider store={store}>
          <BrowserRouter>
            <Component />
          </BrowserRouter>
        </AuthProvider>
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

// Instead of Promise.resolve, deal with a public API endpoint

Promise.resolve({ authType: "OIDC" }).then((res) => renderApp(Root, res));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
