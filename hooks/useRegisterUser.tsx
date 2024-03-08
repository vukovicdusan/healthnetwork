import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "@/firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { InputErrorStateType } from "@/types/InputErrorState";
import { useState } from "react";
import { useRouter } from "next/navigation";

const useRegisterUser = () => {
  const [registerEmailError, setRegisterEmailError] =
    useState<InputErrorStateType>({});
  const [registerUsernameError, setRegisterUsernameError] =
    useState<InputErrorStateType>({});
  const router = useRouter();

  const registerUser = (username: string, email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
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

        router.push("/profile");
      })
      .catch((error) => {
        const errorCode = error.code;
        let message;
        console.log(errorCode);

        switch (errorCode) {
          case "auth/email-already-in-use":
            message = "This email is already in use.";
            break;
          case "auth/weak-password":
            message = "Please try with a tougher password.";
            break;
        }
        setRegisterEmailError({
          error: true,
          message: message,
        });
      });
  };

  return [registerUser, registerEmailError, registerUsernameError] as const;
};
export default useRegisterUser;
