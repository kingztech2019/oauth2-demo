import "./App.css";
import LoginButton from "./auth/LoginButton";

import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dashboard</h1>
      </header>
      <div className="App-body">
        <span>
          <LoginButton loginWithRedirect={loginWithRedirect} />
        </span>
      </div>
    </div>
  );
}

export default App;
