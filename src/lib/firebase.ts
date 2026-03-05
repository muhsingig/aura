import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDKUAqTADVImC73z-hMBebXmGr2FE3__Ws",
    authDomain: "aura-42a30.firebaseapp.com",
    projectId: "aura-42a30",
    storageBucket: "aura-42a30.firebasestorage.app",
    messagingSenderId: "923768184689",
    appId: "1:923768184689:web:d4117ae3bf917bb11ea0d0",
    measurementId: "G-B0LCD6Z5JF",
};

// Initialize Firebase only if it hasn't been initialized already
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);

// Initialize Analytics conditionally (only runs in browser, not during SSR)
let analytics = null;
if (typeof window !== "undefined") {
    isSupported().then((yes) => yes ? (analytics = getAnalytics(app)) : null);
}

export { app, db, auth, analytics };
