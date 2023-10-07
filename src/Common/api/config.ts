import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"


export const API_KEY = `api_key=${process.env.THEMOVIEDB_API_KEY}`
export const BASE_URL = process.env.THEMOVIEDB_BASE_URL

const firebaseConfig = {
    apiKey: "AIzaSyCTxnEe30ttavje6H_Ad-qiHDuoKf1MNkI",
    authDomain: "movie-app-147fd.firebaseapp.com",
    projectId: "movie-app-147fd",
    storageBucket: "movie-app-147fd.appspot.com",
    messagingSenderId: "100970027512",
    appId: "1:100970027512:web:9d6416ac45e81e8e159e0d",
    measurementId: "G-XNC43VEZEW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider}