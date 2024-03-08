import { auth } from "@/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

const useLoginUser = () => {
  let router = useRouter();

  const loginUser = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        //   setError(false);
        //   isAdmin();
        router.push("/");
      })
      .catch((error) => {
        //   setError(true);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return [loginUser] as const;
};

export default useLoginUser;
