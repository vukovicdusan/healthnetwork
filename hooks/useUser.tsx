import { auth } from "@/firebase/firebase";
// import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";

type UserType = {
  loggedIn: boolean;
  uid?: string;
  displayName?: string;
  photoUrl?: string;
};

const useUser = () => {
  const [user, setUser] = useState<UserType>({ loggedIn: false });
  const userHandle = auth.currentUser;

  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({ loggedIn: true, uid: user?.uid });
        /* ADD THE REST OF THE INFO TO THE USER */
        if (userHandle !== null) {
          const displayName = userHandle.displayName
            ? userHandle.displayName
            : "User";
          const email = userHandle.email ? userHandle.email : "";
          const photoURL = userHandle.photoURL
            ? userHandle.photoURL
            : "https://firebasestorage.googleapis.com/v0/b/healthnetwork-434fe.appspot.com/o/avatar.jpg?alt=media&token=8430e048-fad4-40a3-9161-e4b6eb0dde9b";
          // const emailVerified = userHandle.emailVerified;

          setUser((prevState) => ({
            ...prevState,
            displayName: displayName,
            email: email,
            photoUrl: photoURL,
            // emailVerified: emailVerified,
          }));
        }
      } else {
        setUser({ loggedIn: false, uid: "" });
      }
    });
  }, []);

  // if (userHandle !== null) {
  // const email = user.email;
  // const photoURL = user.photoURL;
  // const emailVerified = user.emailVerified;
  // const uid = user.uid;
  // }

  return [user] as const;
};

export default useUser;
