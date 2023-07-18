import React from "react";
import ReactDOM from "react-dom";
import "./Css files/index.css";
import App from "./App";
import useAuthentication from "./components/useAuthentication";
import "bootstrap/dist/css/bootstrap.min.css"


function ConnectedApp() {
  const { AuthProvider } = useAuthentication();
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

ReactDOM.render(<ConnectedApp />, document.getElementById("root"));
