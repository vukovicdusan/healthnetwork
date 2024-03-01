// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from "@/firebase/firebase";
// import { doc, setDoc } from "firebase/firestore";

export const registerUser = async (
  username: string,
  email: string,
  password: string
) => {
  // await createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     const user = userCredential.user;
  //     console.log(user);
  //     setDoc(doc(db, "users", user.uid), {
  //       username: username,
  //       email: email,
  //       uid: user.uid,
  //     });
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     console.log(errorCode);
  //     if (errorCode === "auth/email-already-in-use") {
  //     } else {
  //     }
  //   });
};
