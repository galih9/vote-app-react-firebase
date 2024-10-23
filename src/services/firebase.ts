// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
  updateDoc,
} from "firebase/firestore/lite";
import {
  // GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  // signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import toast from "react-hot-toast";

console.log(process.env);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY ?? "",
  authDomain: process.env.REACT_APP_AUTH_DOMAIN ?? "",
  projectId: "voty-vote",
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET ?? "",
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID ?? "",
  appId: process.env.REACT_APP_APP_ID ?? "",
  measurementId: process.env.REACT_APP_MEASUREMENT_ID ?? "",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);

export async function getCities() {
  // const analytics = getAnalytics(app);
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}

export async function getCandidates() {
  // const analytics = getAnalytics(app);
  const citiesCol = collection(db, "candidates");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}

export async function getUsersVote() {
  const citiesCol = collection(db, "users");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}

export async function getUserDetail(uid: string) {
  const useCollection = collection(db, "users");
  const useSnapshot = await getDocs(useCollection);
  const userData = useSnapshot.docs.find((e) => e.id === uid);
  return userData;
}

export async function commenceVote(dcId: string, vote_id: string) {
  const userRef = doc(db, "users", dcId);
  await updateDoc(userRef, {
    vote_id: vote_id,
    voteStatus: true,
  });
}

export async function getPublishStatus() {
  const settingColl = collection(db, "settings");
  const useSnapshot = await getDocs(settingColl);
  const setting = useSnapshot.docs[0];
  return setting?.data().publishStatus ?? false;
}

export async function setPublishStatus(value: boolean) {
  const settingColl = collection(db, "settings");
  const useSnapshot = await getDocs(settingColl);
  const setting = useSnapshot.docs[0];

  const data = {
    publishStatus: value,
    winner_id: "",
  };

  await setDoc(doc(db, "settings", setting.id), data);
}

export const logInWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<User | null> => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    toast.success("Logged In Successfully");
    return res.user;
  } catch (err) {
    if (err instanceof Error) {
      // Handle authentication-specific errors gracefully
      toast.error(err.message);
    } else {
      console.error("Unexpected error", err);
      toast.error("Something went wrong");
    }
    return null; // Return null in case of error
  }
};

export const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string
): Promise<User | null> => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    const userData = {
      uid: res.user.uid,
      name,
      email: res.user.email,
      voteStatus: false,
    };

    await setDoc(doc(db, "users", res.user.uid), userData);
    if (auth.currentUser != null) {
      await updateProfile(auth.currentUser, { displayName: name }).catch(
        (err) => console.error(err)
      );
    }
    toast.success("Registered Successfully");
    return res.user;
  } catch (err) {
    if (err instanceof Error) {
      // Handle authentication-specific errors gracefully
      toast.error(err.message);
    } else {
      toast.error("Something went wrong");
    }
    return null; // Return null in case of error
  }
};

export const logoutFirebase = () => {
  signOut(auth);
};
