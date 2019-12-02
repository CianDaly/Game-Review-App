import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import App from "./App";
import CommentPage from "./components/commentPage";
import "./index.css";
import Login from "./components/loginPage";
import Signup from "./components/signUpPage";
import { AuthProvider } from "./Auth";
import app from "./base";
import PrivateRoute from "./PrivateRoute";


const Router = (props) => {
  return (
    <AuthProvider>
    <BrowserRouter>
      <div className="jumbotron">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 offset-3">
              <h1>
                <Link to="/">GameBunker - Message Board and Reviews</Link>
              </h1>
            </div>
            <div className="col-md-1">
              <button className="btn btn-dark" onClick={() => app.auth().signOut()}>
                Log Out
              </button>
            </div>
            <div className="col-md-1">
              <button className="btn btn-dark"> <Link to="/login">Log in</Link>
              </button>
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/posts/:post_id" component={CommentPage} />
          <PrivateRoute exact path="/home" component={App} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Signup} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </BrowserRouter>
    </AuthProvider>
  );
};

ReactDOM.render(<Router />, document.getElementById("root"));