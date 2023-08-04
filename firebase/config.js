import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCJPpncfyq9suEDyBgjHoihkU5P4gilMdc',
  authDomain: 'fir-auth-adcdc.firebaseapp.com',
  projectId: 'fir-auth-adcdc',
  storageBucket: 'fir-auth-adcdc.appspot.com',
  messagingSenderId: '958767503919',
  appId: '1:958767503919:web:3e57aad920856f3503c4da',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
