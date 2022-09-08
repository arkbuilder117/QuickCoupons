// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAgcgsUEvIEhF-uKE0EKBCS9EXTzIY4E9M',
  authDomain: 'quickcoupons-a78cf.firebaseapp.com',
  projectId: 'quickcoupons-a78cf',
  storageBucket: 'quickcoupons-a78cf.appspot.com',
  messagingSenderId: '506182515843',
  appId: '1:506182515843:web:ba93ee4c89555c13132fb6',
  measurementId: 'G-E14CSRN3R9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth, analytics};
