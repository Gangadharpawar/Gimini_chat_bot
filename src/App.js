import "./App.css";
import ChatBot from "./chat/ChatBot";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import { Auth0Provider } from "@auth0/auth0-react";
function App() {
  return (
    <div className="App">
      <Auth0Provider
        domain="dev-buk541lpbkn51g7o.us.auth0.com"
        clientId="iQi6KCxljWwTSe6zTjLH73i1aHbkXj4W"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <Router>
          <Switch>
            <Route exact path="/">
              <ChatBot />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </Auth0Provider>
    </div>
  );
}

export default App;
