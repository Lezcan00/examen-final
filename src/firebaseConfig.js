// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBGWFiofH9Ih2wyGxevFFErenLC-Ia3R8E",
    authDomain: "examen-2-ee5c4.firebaseapp.com",
    projectId: "examen-2-ee5c4",
    storageBucket: "examen-2-ee5c4.appspot.com",
    messagingSenderId: "495322710397",
    appId: "1:495322710397:web:280e53b12ccce234b44c14"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

//  Estuve un rato laaargo intentando conectar los datos con la firestore database pero no pude, estuve mirando las clases anteriores y viendo videos en youtube pero por alguna razón los datos nunca se pasaban de la database a mi codigo, por esa razón los datos aun siguen en un .json dentro de public. Lo de la autenticacion si me salió bien. 
// Espero que aún así esté bien el trabajo. Espero la calificación, muchas gracias por su atención.

