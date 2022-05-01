import PropTypes from "prop-types";
import { createContext, useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
//import { getStorage, ref, getDownloadURL } from "firebase/storage";

import { firebaseConfig } from "../config";
import _ from "lodash";
import { PATH_AUTH } from "../routes/paths";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  firebase.storage();
}

const initialState = {
  isSubscription: false,
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const reducer = (state, action) => {
  if (action.type === "INITIALISE") {
    const { isSubscription, isAuthenticated, user } = action.payload;
    return {
      ...state,
      isSubscription,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  }

  return state;
};

const AuthContext = createContext({
  ...initialState,
  method: "firebase",
  login: () => Promise.resolve(),
  employerRegister: () => Promise.resolve(),
  employerUpdateProfile: () => Promise.resolve(),
  candidateRegister: () => Promise.resolve(),
  candidateUpdateProfile: () => Promise.resolve(),
  loginWithGoogle: () => Promise.resolve(),
  loginWithFaceBook: () => Promise.resolve(),
  loginWithTwitter: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  updateProfile: () => Promise.resolve(),
  sendEmailVerification: () => Promise.resolve(),
  createUserOnRealTimeDB: () => Promise.resolve(),
  updateSubscriptionKey: () => Promise.resolve(),
  getDocumentFromFirebase: () => Promise.resolve()
});

AuthProvider.propTypes = {
  children: PropTypes.node,
};

function AuthProvider({ children }) {
  const [profile, setProfile] = useState({});
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate()
  useEffect(
    () =>
      firebase.auth().onAuthStateChanged((user) => {
        console.log('user signed in '+JSON.stringify(user))
        if (user && user.emailVerified) {
          const docRef = firebase.firestore().collection("users").doc(user.uid);
          const subscriptionRef = firebase
            .firestore()
            .collection("subscriptions")
            .doc(user.uid);
          docRef
            .get()
            .then((doc) => {
              if (doc.exists) {
                setProfile(doc.data());
              }
            })
            .catch((error) => {
              console.error(error);
            });
          subscriptionRef.get().then((subscriptionDoc) => {
            if (!_.isEmpty(subscriptionDoc.data())) {
              dispatch({
                type: "INITIALISE",
                payload: { isAuthenticated: true, isSubscription: true, user },
              });
            } else {
              dispatch({
                type: "INITIALISE",
                payload: { isAuthenticated: true, isSubscription: false, user },
              });
            }
          });
        } else {
          dispatch({
            type: "INITIALISE",
            payload: {
              isAuthenticated: false,
              isSubscription: false,
              isEmailVerified: false,
              user: null,
            },
          });
        }
      }),
    [dispatch]
  );

  const login = (email, password, role) => {
    const docRef = firebase
      .firestore()
      .collection("users")
      .where("email", "==", email)
      .where("role", "==", role);

    return new Promise((resolve, reject) => {
      docRef.get().then((snapshot) => {
        if (snapshot.docs.length > 0) {
          resolve(
            firebase
              .auth()
              .signInWithEmailAndPassword(email, password)
              .then((authUser) => {
                navigate('/')
                if (!authUser.user.emailVerified) {
                //sendEmailVerification(role);
                }
              })
          );
        } else {
          reject({
            message:
              "There is no user record corresponding to this identifier. The user may have been deleted.",
          });
        }
      });
    });
  };

  const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  };

  const loginWithFaceBook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  };
  
  const loginWithTwitter = () => {
    const provider = new firebase.auth.TwitterAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  };

  const employerRegister = (email, password, orgName, contactName) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        firebase
          .firestore()
          .collection("users")
          .doc(res.user.uid)
          .set({
            uid: res.user.uid,
            email,
            orgName,
            contactName,
            displayName: `Employer`,
            role: "Employer",
          })
         //.then(() => sendEmailVerification("Employer"));
      });
  };

  const candidateRegister = (
    fullname,
    email,
    password,
    phoneNumber,
    country,
    job,
    workAuth,
    resume
  ) => {
    if (resume && resume.preview) {
      getFileBlob(resume.preview, (blob) => {
        return firebase
          .storage()
          .ref(`/resume/${resume.path}`)
          .put(blob)
          .then((snapshot) => {
            snapshot.ref.getDownloadURL().then((url) => {
              firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then((res) => {
                  firebase
                    .firestore()
                    .collection("users")
                    .doc(res.user.uid)
                    .set({
                      uid: res.user.uid,
                      email,
                      workAuth,
                      fullname,
                      phoneNumber,
                      country,
                      job,
                      displayName: `Candidate`,
                      role: "Candidate",
                      resume: url,
                    })
                  //.then(() => sendEmailVerification("Candidate"));
                  .then(() => (document.location.href = `${PATH_AUTH.candidateLogin}`))
                });
            });
          });
      });
    }
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        firebase
          .firestore()
          .collection("users")
          .doc(res.user.uid)
          .set({
            uid: res.user.uid,
            email,
            workAuth,
            fullname,
            phoneNumber,
            country,
            job,
            displayName: `Candidate`,
            role: "Candidate",
          })
          //.then(() => sendEmailVerification("Candidate"));
          .then(() => (document.location.href = `${PATH_AUTH.candidateLogin}`))
      });
  };

  const logout = async () => {
    document.location.href = "/";
    await firebase.auth().signOut();
  };

  const resetPassword = async (email) => {
    await firebase.auth().sendPasswordResetEmail(email);
  };

{/*const sendEmailVerification = (role) => {
    return firebase
      .auth()
      .currentUser.sendEmailVerification()
      .then(() => {
        firebase
          .auth()
          .signOut()
          .then(() => (document.location.href = `${PATH_AUTH.verify}/${role}`));
      });
  };*/}

  const auth = { ...state.user };

  const updateSubscriptionKey = (flag) => {
    const { user } = state;
    dispatch({
      type: "INITIALISE",
      payload: { isAuthenticated: true, isSubscription: flag, user },
    });
  };

  const getDocumentFromFirebase = (bucketName, fileName) =>{

   return firebase.storage()

  }
  const createUserOnRealTimeDB = async (user) => {
    const docRef = firebase.firestore().collection("users").doc(user.uid);
    if (!(await docRef.get()).data()) {
      return docRef.set({
        email: user.email,
        uid: user.uid,
      });
    }
    return;
  };

  const employerUpdateProfile = async (data) => {
    const docRef = firebase.firestore().collection("users").doc(auth.uid);
    if (!(await docRef.get()).data()) {
      await docRef.set({
        email: data.email,
        uid: auth.uid,
      });
    }
    await docRef.update({
      orgName: data.orgName,
      contactName: data.contactName,
    });
    if (data.photoURL && data.photoURL.preview) {
      getFileBlob(data.photoURL.preview, (blob) => {
        firebase
          .storage()
          .ref(`/resume/${auth.uid}/${data.photoURL.path}`)
          .put(blob)
          .then((snapshot) => {
            snapshot.ref.getDownloadURL().then((url) => {
              setProfile({
                ...profile,
                orgName: data.orgName,
                contactName: data.contactName,
              });
              docRef.update({
                photoURL: url,
              });
            });
          });
      });
    } else {
      setProfile({
        ...profile,
        displayName: data.displayName,
        orgName: data.orgName,
        contactName: data.contactName,
      });
    }
    return;
  };

  const candidateUpdateProfile = async (data) => {
    const docRef = firebase.firestore().collection("users").doc(auth.uid);
    if (!(await docRef.get()).data()) {
      await docRef.set({
        email: data.email,
        uid: auth.uid,
      });
    }
    await docRef.update({
      fullname: data.fullname,
      phoneNumber: data.phoneNumber,
      country: data.country,
      job: data.job,
      workAuth: data.workAuth,
    });
    if (data.resume && data.resume.preview) {
      getFileBlob(data.resume.preview, (blob) => {
        firebase
          .storage()
          .ref(`/resume/${auth.uid}/${data.resume.path}`)
          .put(blob)
          .then((snapshot) => {
            snapshot.ref.getDownloadURL().then((url) => {
              setProfile({
                ...profile,
                fullname: data.fullname,
                phoneNumber: data.phoneNumber,
                workAuth: data.workAuth,
                country: data.country,
                job: data.job,
                resume: url,
              });
              docRef.update({
                resume: url,
              });
            });
          });
      });
    } else {
      setProfile({
        ...profile,
        fullname: data.fullname,
        phoneNumber: data.phoneNumber,
        country: data.country,
        workAuth: data.workAuth,
        job: data.job,
      });
    }
    return;
  };

  const getFileBlob = (url, cb) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.addEventListener("load", function () {
      cb(xhr.response);
    });
    xhr.send();
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "firebase",
        user: {
          id: auth.uid,
          email: auth.email,
          photoURL: profile?.photoURL || auth.photoURL,
          displayName: auth.displayName || profile?.displayName,
          role: profile?.role || "",
          fullname: profile?.fullname || "",
          job: profile?.job || "",
          phoneNumber: auth.phoneNumber || profile?.phoneNumber || "",
          country: profile?.country || "",
          workAuth: profile?.workAuth || "",
          contactname: profile?.contactName || "",
          orgName: profile?.orgName || "",
        },
        login,
        employerRegister,
        employerUpdateProfile,
        candidateRegister,
        candidateUpdateProfile,
        loginWithGoogle,
        loginWithFaceBook,
        loginWithTwitter,
        logout,
        resetPassword,
        //sendEmailVerification,
        createUserOnRealTimeDB,
        updateSubscriptionKey,
        getDocumentFromFirebase
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
