import { initializeApp } from "firebase/app";
import { environment } from "../../environments/environment";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'
export const app = initializeApp(environment.firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)

