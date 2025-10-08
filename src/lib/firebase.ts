import { initializeApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

// Validate required environment variables
const requiredEnvVars: string[] = [
  "VITE_FIREBASE_API_KEY",
  "VITE_FIREBASE_AUTH_DOMAIN",
  "VITE_FIREBASE_PROJECT_ID",
  "VITE_FIREBASE_STORAGE_BUCKET",
  "VITE_FIREBASE_MESSAGING_SENDER_ID",
  "VITE_FIREBASE_APP_ID",
];

requiredEnvVars.forEach((varName: string) => {
  // Use a type assertion to safely access env properties by string key
  if (!(import.meta.env as Record<string, any>)[varName]) {
    throw new Error(`${varName} is not defined in .env`);
  }
});

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // The Firestore error indicates the projectId is being sent with extra quotes.
  // The .replace() call strips these quotes to fix the "400 Bad Request" error.
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID.replace(/"/g, ""),
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db: Firestore = getFirestore(app);