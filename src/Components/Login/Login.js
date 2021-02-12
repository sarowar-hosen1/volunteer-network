import React, { useContext } from 'react';
import logo from '../../images/logos/Group 1329.png';
import './Login.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig/Config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const history = useHistory();
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                const signInUser = { name: displayName, email, photo: photoURL };
                getToken()
                setLoggedInUser(signInUser)
                history.replace(from)
            })
            .catch(err => {
                setLoggedInUser(err.message);
            })
    }

    const getToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
            sessionStorage.setItem('token', idToken)
        }).catch(function (error) {
            
        });
    }
    return (
        <div className='signUp'>
            <img onClick={() => history.push('/')} src={logo} alt="" />
            <button onClick={googleSignIn}>Google</button>
        </div>
    );
};

export default Login;