import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCnpBJHe2Gr-LLC2aUJGHKVEK-zqd_eHHI",
    authDomain: "imessage-clone-tu.firebaseapp.com",
    databaseURL: "https://imessage-clone-tu.firebaseio.com",
    projectId: "imessage-clone-tu",
    storageBucket: "imessage-clone-tu.appspot.com",
    messagingSenderId: "599099726517",
    appId: "1:599099726517:web:a9632b818813d2ad44fcfc",
    measurementId: "G-S17VN9JQW1"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;