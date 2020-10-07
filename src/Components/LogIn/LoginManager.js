import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializedLoginFrameWork = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp (firebaseConfig);
       }
}

export const handleGoogleSignIn = () => { 
    const googleProvider = new firebase.auth.GoogleAuthProvider (); 
       
   return firebase.auth().signInWithPopup(googleProvider)
    .then ( res => { 
        const  {displayName, email} = res.user ; 
        // const signedInUser = {name: displayName, email: email}
        const signedInUser = {
           isSignedIn:  true,
            name: displayName,
            email: email, 
            success: true,
            };
            return signedInUser;
        }).catch( error => { // handle errors here. 
        const errorMessage = error.message ; 
        console.log(errorMessage);
        console.log(error);
         });
}

export const handleFbSignIn = () => {
    var fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(fbProvider)
    .then ( res => { 
        const  {displayName, email} = res.user ; 
        // const signedInUser = {name: displayName, email: email}
        const signedInUser = {
           isSignedIn:  true,
            name: displayName,
            email: email, 
            success: true,
            };
        return signedInUser;
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
}

export const handleSignOut = () => {
    return firebase.auth().signOut()
    .then(res => {
        const signedOutUser = {
            isSignedIn: false,
            name: '',
            email: '',
            error: '',
            success: false,
        }
        return signedOutUser

    }).catch(err => {
        //An error happend.
    });
}

export const createUserWithEmailAndPassword = (name, email, password) => {
  
      return firebase.auth().createUserWithEmailAndPassword(email, password )
        .then(res =>{
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            updateUserName(name);
            verifyEmail();
            return newUserInfo;
        })
        .catch (error =>  { 
            // Handle Errors here. 
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        }); 
}

export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            return newUserInfo;
        })
        .catch(function(error) {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
           return newUserInfo;
          });
}

const updateUserName = name => {

    var user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: name
    }).then(function() {
        console.log('user name updated successfully');
    }).catch(function(error) {
        console.log(error);
    });
}

const verifyEmail = () => {
    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function() {
      // Email sent.
    }).catch(function(error) {
      // An error happened.
    });
     
  }


 export const resetPassword = email => {
    var auth = firebase.auth();
    auth.sendPasswordResetEmail(email).then(function() {
      // Email sent.
    }).catch(function(error) {
      // An error happened.
    });
     
  }
