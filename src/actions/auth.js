import {
    firebase,
    googleAuthProvider,
    facebookAuthProvider
} from '../firebase/firebase';

export const login = uid => ({
    type: 'LOGIN',
    uid
});

export const startLoginWithGoogle = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const startLoginWithFacebook = () => {
    return () => {
        return firebase
            .auth()
            .signInWithPopup(facebookAuthProvider);
            // .catch(error => {
            //     if (error.code === 'auth/account-exists-with-different-credential') {
            //         const pendingCred = error.credential;
            //         const email = error.email;
    
            //         return auth.fetchSignInMethodsForEmail(email)
            //             .then((methods) => {
    
            //                 if (methods[0] === 'password') {
            //                     const password = promptUserForPassword();
            //                     return auth.signInWithEmailAndPassword(email, password)
            //                         .then((user) => {
            //                         return user.link(pendingCred);
            //                     });
                
            //                 }
                
            //                 // TODO: implement getProviderForProviderId.
            //                 const provider = getProviderForProviderId(methods[0]);
            //                 return auth.signInWithPopup(provider);
            //         });
            //     }
            // });
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};
