import firebase from "firebase/firebase-app"
import "firebase/firebase-auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyDdNgT9vwqDhEIIsBQ_2P-LJFzHYcJ4FtQ",
    authDomain: "reactauth-project.firebaseapp.com",
    projectId: "reactauth-project",
    storageBucket: "reactauth-project.appspot.com",
    messagingSenderId: "306094403287",
    appId: "1:306094403287:web:f12405a357334aceb5ca92"
})

export const auth = app.auth();
export default app;