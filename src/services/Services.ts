import { collection, getDocs } from "firebase/firestore";

import { firebaseDB } from "../config/firebase";

export const getAllServices = async () => {
  try {
    const querySnapshot = await getDocs(collection(firebaseDB, "services"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} ${doc.data()}`);
    });
  } catch (e) {
    console.error("Error retriving document: ", e);
  }
};
