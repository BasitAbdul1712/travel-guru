import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { handleGoogleSignIn, initializedLoginFrameWork, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword , resetPassword} from './LoginManager';
import { useForm } from 'react-hook-form';
import './LogIn.css'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const styles = {width: '20%', backgroundColor : '#fff', margin : 'auto', padding: '5px', borderRadius: '20px', border: '1px solid gray', marginTop: '8px',}

const style = { backgroundColor: 'transparent', border: '1px solid #fff', paddingLeft: '50px'}
const LogIn = () => {
    const [ newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        isSignedIn : false,
        name : '',
        email: '',
        password: '',
        error: '',
        success: '',
        });

    initializedLoginFrameWork();
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

const googleSignIn = () => {
    handleGoogleSignIn()
    .then(res =>{ 
        handleResponse(res, true);

    })
}
const fbSignIn = () => {
    handleFbSignIn()
    .then(res =>{ 
      handleResponse(res, true);
    })
}
const googleSignOut = () => {
    handleSignOut()
    .then(res =>{
       handleResponse(res, false);
    })
}
// //    if (firebase.apps.length === 0) {
// //     firebase.initializeApp (firebaseConfig);
// //    }

const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
        history.replace(from);
    }
}

 
const handleBlur = (event) => {
let isFieldValid = true;
console.log(event.target.name, event.target.value);
    if (event.target.name === 'email') {
         isFieldValid =/\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === 'password') {
        const isPasswordValid = event.target.value.length > 6;
        const passwordWithNumber = /\d{1}/.test(event.target.value)
         isFieldValid = isPasswordValid && passwordWithNumber;
    }
    if (isFieldValid) {
      const newUserInfo = {...user};
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
}
const handleSubmit = (event) => {
    console.log(user.email, user.password);
    if (newUser && user.email && user.password) {
        createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then(res => {
            handleResponse(res, true);
        })
    }

    if(!newUser && user.email && user.password){
        signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
            handleResponse(res, true);
        })
    }
    event.preventDefault();
}


    return (
        <div >

           <div className = "ship-form">

            <form onSubmit={handleSubmit} >
                {newUser && <input type="text" name = "firstName" onBlur={handleBlur} placeholder="Your First Name" required/>}
            
                {newUser && <input type="text" name = "name" onBlur={handleBlur} placeholder="Your Last Name" required/>}
        
                    <input type="text" name = "email" onBlur={handleBlur} placeholder="Username or email" required/>
                  
                    <input type="password" name = "password" onBlur={handleBlur} placeholder="Password"  required/>

                    {newUser && <input type="password" name = "password" onBlur={handleBlur} placeholder="Confirm Password"  required/>}
                        <br/>
                    <Link style={{color: 'orange'}} onClick = {() => resetPassword(user.email)}>ForgotPassword?</Link>

                    <input style={{backgroundColor: 'orange'}} type="submit" value = {newUser ? 'Create an account' : 'Login'}/>
                    
                    <p style ={{color: 'red'}} >{user.error}</p>
                    {user.success && <p style ={{color: 'green'}} > User {newUser ? 'Created' :'Logged In' } successfully</p>
                    }
                    
                    <p>Don't have an account?<Link  type="checkbox"> Create an account</Link><input type="checkbox" onChange = {() => setNewUser(!newUser) } text="es" name="newUSer" id=""/></p>
                
            </form>
                
           </div>
           <div style = {{  marginTop: '5px'}}>
                <div style={styles}>
                <p style={style}>---------------<span>Or</span>---------------</p>
                </div>
                <div style={styles}>
                    <img style = {{width: '30px'}} src="../../Images/Icon/fb.png" alt=""/>
                    <button style={style} onClick = {fbSignIn}>Continue with Facebook</button>
                </div>
                <div style={styles}>
                <img style = {{width: '30px'}} src="../../Images/Icon/google.png" alt=""/>
                {
                    user.isSignedIn ? <button style={style}  onClick = {googleSignOut}>Sign Out from Google</button> : <button style={style} onClick = {googleSignIn}>Continue with Google</button>
                            }
                </div>
                
           </div>
        
        </div>
    );
};

export default LogIn;