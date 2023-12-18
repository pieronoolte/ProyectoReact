import React from 'react'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

export const firebase = () => {

    const firebaseConfig = {
        apiKey: "AIzaSyAdLYgDmf5Ci1WFMdDOZ73fTzH4xQTXDbo",
        authDomain: "bd-rect.firebaseapp.com",
        projectId: "bd-rect",
        storageBucket: "bd-rect.appspot.com",
        messagingSenderId: "565953072638",
        appId: "1:565953072638:web:a5a3a0bf0e83aa163504af"
    };

    const firebaseAp = initializeApp(firebaseConfig);
    const db = getFirestore(firebaseAp);

    return {db}
}
