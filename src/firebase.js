import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB5SQlInu96kPCjZE9xORj2UIgHfJksfb8",
  authDomain: "koiostudio.firebaseapp.com",
  projectId: "koiostudio",
  storageBucket: "koiostudio.firebasestorage.app",
  messagingSenderId: "14065397644",
  appId: "1:14065397644:web:f388f2a1bbcba5a304f0a9",
  measurementId: "G-2KF13NXKH4",
};

const app = initializeApp(firebaseConfig);

// Analytics only runs in browser (not SSR/Node)
let analytics = null;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };
