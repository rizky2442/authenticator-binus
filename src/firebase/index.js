
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCIeGOZhD0tsE6z6OoBu0ZW--L__rw_V5Q",
  authDomain: "my-vue-auth-rizky.firebaseapp.com",
  projectId: "my-vue-auth-rizky",
  storageBucket: "my-vue-auth-rizky.firebasestorage.app",
  messagingSenderId: "377696969534",
  appId: "1:377696969534:web:324a4c837a39d001fd426f"
};


const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

exports ( auth )