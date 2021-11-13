import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signOut, updateProfile, onAuthStateChanged, getIdToken, FacebookAuthProvider, GithubAuthProvider } from "firebase/auth";
import initializeFirebase from "../firebase/firebase.init";

initializeFirebase();
const useFirebase = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [token, setToken] = useState('');
    const [msg, setMsg] = useState('');

    const auth = getAuth();

    //sign in with google account
    const signInWithGoogle = (history, destination) => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                setUser(user);
                setMsg("LogIn Success");
                //user data save on mongodb
                saveUser(user.email, user.displayName, 'PUT');
                //access token
                const token = user.accessToken;
                localStorage.setItem("token", token);
                //redirect user
                history.replace(destination);
            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                setMsg(errorMessage);
            }).finally(setIsLoading(false));

    }

    //sign in with facebook
    const signInWithFacebook = (history, destination) => {
        setIsLoading(true);
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                setUser(user);
                setMsg("LogIn Success");
                //user data save on mongodb
                saveUser(user.email, user.displayName, 'PUT');
                //access token
                const token = user.accessToken;
                localStorage.setItem("token", token);
                //redirect user
                history.replace(destination);
            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                setMsg(errorMessage);
            }).finally(setIsLoading(false));
    }

    //sign in with github 
    const signInWithGithub = (history, destination) => {
        setIsLoading(true);
        const provider = new GithubAuthProvider()
        signInWithPopup(auth, provider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                setUser(user);
                setMsg("LogIn Success");
                //user data save on mongodb
                saveUser(user.email, user.displayName, 'PUT');
                //access token
                const token = user.accessToken;
                localStorage.setItem("token", token);
                //redirect user
                history.replace(destination);
            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                setMsg(errorMessage);
            }).finally(setIsLoading(false));
    }

    //signIn with email and password
    const signInWithEmailPassword = (email, password, history, destination) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
                setMsg("Login Success");
                //redirect user
                history.replace(destination);
                //access token
                const token = user.accessToken;
                localStorage.setItem("token", token);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setMsg(errorMessage);
            }).finally(setIsLoading(false));


    }
    // create user with email and pass
    const registerWithEmailPassword = (name, email, password, history, destination) => {
        //default profile picture
        const photoUrl = "https://casperkruger.co.za/wp-content/uploads/2014/08/Profile-Pic-Demo.png"
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                user.displayName = name;
                user.photoURL = photoUrl;
                setUser(user);
                //access token
                const token = user.accessToken;
                localStorage.setItem("token", token);
                //user information update                
                updateUser(name, photoUrl);

                setMsg("Registration Success");
                //save user data in mongodb
                saveUser(email, name, 'POST');
                //redirect home page
                history.replace(destination);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setMsg(errorMessage);
            }).finally(setIsLoading(false));
    }

    //update user Information
    const updateUser = (name, photoUrl) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });

    }

    //observe user state
    useEffect(() => {
        setIsLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [auth])


    //logOut
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
            //remove access token
            localStorage.removeItem('token');
        }).catch((error) => {
            // An error happened.
            setMsg('LogOut unsuccessful!')
        });

    }


    //save user to database
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }

        fetch('https://imran-drone.herokuapp.com/user', {
            method: method,
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(() => {
                //data saved
                setMsg("user data saved successfully in database")
            })
            .catch(error => {
                console.log("error:", error);
            })
    }

    // admin check
    useEffect(() => {
        fetch(`https://imran-drone.herokuapp.com/users/${user?.email}`, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        }).then(res => res.json())
            .then(data => {
                setIsAdmin(data?.role)
            })
    }, [user?.email])

    return {
        user,
        isAdmin,
        isLoading,
        token,
        msg,
        signInWithGoogle,
        signInWithFacebook,
        signInWithGithub,
        registerWithEmailPassword,
        signInWithEmailPassword,
        logOut,
    }

}
export default useFirebase;