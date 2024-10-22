// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAW64xriJTmr0ZPfDpcK0g7ZMlcd1T68XE",
  authDomain: "voty-vote.firebaseapp.com",
  projectId: "voty-vote",
  storageBucket: "voty-vote.appspot.com",
  messagingSenderId: "787373301881",
  appId: "1:787373301881:web:e9e1751e8aa0739c2ab4a8",
  measurementId: "G-CR0EBR9CC6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export async function getCities() {
  // const analytics = getAnalytics(app);
  const db = getFirestore(app);
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}
