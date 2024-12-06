import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC88tafqIBgUm53Lp3H3EgwDAs7jC2dOuI",
  authDomain: "notions-efac0.firebaseapp.com",
  projectId: "notions-efac0",
  storageBucket: "notions-efac0.firebasestorage.app",
  messagingSenderId: "269220618820",
  appId: "1:269220618820:web:0951dc51feca77af02d211",
  measurementId: "G-19S46JSB0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

export default app;