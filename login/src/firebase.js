import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyB_1-MiNOF_DzVHR9Yf2h9BPOla2t67hwc',
  authDomain: 'auth-47f6b.firebaseapp.com',
  projectId: 'auth-47f6b',
  storageBucket: 'auth-47f6b.appspot.com',
  messagingSenderId: '789776740877',
  appId: '1:789776740877:web:da830d5fa50ab4413c9b44',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      const accountGoogle = {
        name: name,
        email: email,
        profilePic: profilePic,
      };
      console.log('🚀 ~ file: firebase.js ~ line 28 ~ .then ~ accountGoogle', accountGoogle);
      localStorage.setItem('accountGoogle', accountGoogle);
    })
    .catch((err) => {
      console.error(err);
    });
};
