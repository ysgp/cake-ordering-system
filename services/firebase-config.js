// services/firebase-config.js

// 將你的 Firebase 設定貼在這裡
const firebaseConfig = {
    apiKey: "AIzaSyDSZ1DDTtLGP9SEKL15hx2ibjSegVWQeAY",
    authDomain: "cake-ordering-system-39bd2.firebaseapp.com",
    projectId: "cake-ordering-system-39bd2",
    storageBucket: "cake-ordering-system-39bd2.firebasestorage.app",
    messagingSenderId: "65727057464",
    appId: "1:65727057464:web:214dfcc71e7c393e8320cd",
    measurementId: "G-NYGWWY6DLK"
  };

// 初始化 Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { app, db };