import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBTPMNUPSkFKcM_PE3_XtrB0pJcndLZGp8",
  authDomain: "millo-if2023.firebaseapp.com",
  projectId: "millo-if2023",
  storageBucket: "millo-if2023.appspot.com",
  messagingSenderId: "736734627456",
  appId: "1:736734627456:web:d0f69ddd32334851e24865"
};

const app = initializeApp(firebaseConfig);

export default app;