import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthRouter from "./routers/AuthRouter";
import PublicRouter from "./routers/PublicRouter";
import { firebase } from "./config/firebase";
import { useDispatch } from "react-redux";
import { login } from "./actions/auth";
import Loading from "./components/shared/Loading";

function App() {
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.email, user.uid));
        setLogged(true);
        setLoading(false);
        return;
      } else {
        setLogged(false);
        setLoading(false);
      }
    });
  }, [setLogged, dispatch]);

  return (
    <div className={logged ? "wrapper" : ""}>
      <Router>{logged ? <AuthRouter /> : <PublicRouter />}</Router>
    </div>
  );
}

export default App;
