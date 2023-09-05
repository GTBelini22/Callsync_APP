import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBTpLyQzzTj1ACPa80Dmp8j9z_sybCt8cU",
    authDomain: "compra-facil-980ef.firebaseapp.com",
    projectId: "compra-facil-980ef",
    storageBucket: "compra-facil-980ef.appspot.com",
    messagingSenderId: "534473712578",
    appId: "1:534473712578:web:9bd4f020aec1602b4f2c5b"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app); // Obter a instância de autenticação
  
  export { app, auth };