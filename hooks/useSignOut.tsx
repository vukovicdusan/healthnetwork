import { auth } from "@/firebase/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const useSignOut = () => {
  let router = useRouter();

  const signOutHandler = () => {
    signOut(auth);
    router.push("/");
  };

  return [signOutHandler] as const;
};

export default useSignOut;
