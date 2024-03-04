import { auth } from "@/firebase/firebase";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";

type UserType = {
  loggedIn: boolean;
  uid?: string;
};

const useUser = () => {
  const [user, setUser] = useState<UserType>({ loggedIn: false, uid: "" });

  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({ loggedIn: true, uid: user?.uid });
      } else {
        setUser({ loggedIn: false, uid: "" });
      }
    });
  }, []);

  //   signOut(auth)
  //     .then(() => {
  //       // Sign-out successful.
  //       setUser({ loggedIn: false, uid: "" });
  //     })
  //     .catch((error) => {
  //       // An error happened.
  //     });

  return [user] as const;
};

export default useUser;
