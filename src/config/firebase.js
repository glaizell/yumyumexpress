import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOP8fylutf1SRKHpvkly_ujeDjlmWXSLs",
  authDomain: "yumyumexpress-2f387.firebaseapp.com",
  databaseURL: "https://yumyumexpress-2f387-default-rtdb.firebaseio.com",
  projectId: "yumyumexpress-2f387",
  storageBucket: "yumyumexpress-2f387.appspot.com",
  messagingSenderId: "716170085798",
  appId: "1:716170085798:web:611fba915fd12b3971fb67",
  measurementId: "G-T08V4DXS4X",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
