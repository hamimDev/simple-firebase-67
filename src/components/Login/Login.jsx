import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase-init';

const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSingIn = () =>{
        signInWithPopup(auth, provider)
        .then(result =>{
            const loginUser = result.user;
            setUser(loginUser);
            console.log(loginUser);
        })
        .catch(error =>{
            console.log('Error:', error);
        })
    }

    const handleSignOut= () =>{
        signOut(auth)
        .then(result =>{
            setUser(null);
            console.log(result);
        })
        .catch(error => {
            console.log('Error:', error);
        })
    }

    return (
        <div>
            <button className='mr-5 ml-5' onClick={handleGoogleSingIn}>Google Login</button>
            
            <button onClick={handleSignOut}>Google LoginOut</button>
            {
                user && <div>
                    <h3>Name: {user.displayName}</h3>
                    <h4>Email: {user.email}</h4>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;