import React, { useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase-init";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loginGoogleUser = result.user;
        setUser(loginGoogleUser);
        console.log(loginGoogleUser);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const handleGithubSingIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loginGithubUser = result.user;
        setUser(loginGithubUser);
        console.log(loginGithubUser);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        setUser(null);
        console.log(result);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div>
      {user ? (
        <button onClick={handleSignOut}>Sing Out</button>
      ) : (
        <div>
          <button className="mr-5 ml-5" onClick={handleGoogleSingIn}>
            Google Login
          </button>
          <button onClick={handleGithubSingIn}>Github Login</button>
        </div>
      )}
      {user && (
        <div>
          <h3>Name: {user.displayName}</h3>
          <h4>Email: {user.email}</h4>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
