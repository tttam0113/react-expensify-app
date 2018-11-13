import {
    firebase,
    googleAuthProvider,
    facebookAuthProvider,
    githubAuthProvider
} from '../firebase/firebase';

export const login = uid => ({
    type: 'LOGIN',
    uid
});

const mapProvidersByProviderId = {
    'google.com': googleAuthProvider
};

const getProviderForProviderId = (providerId = '') => {
    const provider = mapProvidersByProviderId[providerId];
    return !!provider ? provider : googleAuthProvider;
};

const promptUserForPassword = () => {
    console.log("Method does not supported");
    return "";
}

const handleAuthException = error => {
    console.log(error);
    if (error.code === 'auth/account-exists-with-different-credential') {
        const pendingCred = error.credential;
        const email = error.email;

        return firebase
            .auth()
            .fetchSignInMethodsForEmail(email)
            .then(methods => {
                console.log(methods);
                if (methods[0] === 'password') {
                    const password = promptUserForPassword(); // TODO: implement promptUserForPassword.
                    return firebase
                        .auth()
                        .signInWithEmailAndPassword(email, password)
                        .then((user) => {
                            // Step 4a.
                            return user.link(pendingCred);
                        });
                }

                const provider = getProviderForProviderId(methods[0]);

                firebase
                    .auth()
                    .signInWithPopup(provider)
                    .then(result => {
                        return result.user.linkAndRetrieveDataWithCredential(
                            pendingCred
                        );
                    });
            });
    }
    return new Promise();
};

export const startLoginWithGoogle = () => {
    return () => {
        return firebase
            .auth()
            .signInWithPopup(googleAuthProvider)
            .catch(handleAuthException);
    };
};

export const startLoginWithGithub = () => {
    return () => {
        return firebase
            .auth()
            .signInWithPopup(githubAuthProvider)
            .catch(handleAuthException);
    };
};

export const startLoginWithFacebook = () => {
    return () => {
        return firebase
            .auth()
            .signInWithPopup(facebookAuthProvider)
            .catch(handleAuthException);
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
