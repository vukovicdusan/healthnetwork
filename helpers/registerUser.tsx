import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "@/firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

export const registerUser = async (
  username: string,
  email: string,
  password: string
) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(user, {
        displayName: username,
        // photoURL: "https://example.com/jane-q-user/profile.jpg"
      });
      // Signed up
      setDoc(doc(db, "users", user.uid), {
        username: username,
        email: email,
        uid: user.uid,
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      if (errorCode === "auth/email-already-in-use") {
        // let message = capitalize(error.code.split("-").join(" "));
        // setEmailError({
        //   error: true,
        //   message: message ? message : "",
        // });
      } else {
        // setUsernameError({
        //   error: true,
        //   message: "The worker with this name already exists.",
        // });
      }
    });
};
