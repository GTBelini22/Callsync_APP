import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBTpLyQzzTj1ACPa80Dmp8j9z_sybCt8cU",
  authDomain: "compra-facil-980ef.firebaseapp.com",
  projectId: "compra-facil-980ef",
  storageBucket: "compra-facil-980ef.appspot.com",
  messagingSenderId: "534473712578",
  appId: "1:534473712578:web:9bd4f020aec1602b4f2c5b"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const firestore = getFirestore(app); // Inicialize o Firestore

export { app, auth, firestore };