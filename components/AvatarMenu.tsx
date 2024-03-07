import Link from "next/link";
import React, { useState } from "react";
import avatar from "../public/avatar.jpg";
import Image from "next/image";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";

const AvatarMenu = () => {
  // const [displayName, setDisplayName] = useState('');
  const user = auth.currentUser;
  console.log(user);
  if (user !== null) {
    const displayName = user.displayName;
    //   setDisplayName(displayName);
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
    const uid = user.uid;
    if (displayName) {
      console.log(displayName);
    }
  }
  return (
    <div className="relative group">
      <Link href={"#"} className="flex gap-2">
        <span>Name</span>
        <Image width={20} height={20} src={avatar} alt="avatar"></Image>
      </Link>
      <ul className="absolute w-max p-4 bg-tertiaryBg top-8 right-0 hidden group-hover:block">
        {/* <li className="flex flex-col">
            <span>AvatarMenu</span>
            <Image width={40} height={40} src={avatar} alt="avatar"></Image>
          </li> */}
        <li>
          <Link
            href={"#"}
            className="hover:text-secondaryAccent transition-colors"
          >
            Edit Profile
          </Link>
        </li>
        <li
          onClick={() => signOut(auth)}
          className="cursor-pointer hover:text-secondaryAccent transition-colors"
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default AvatarMenu;
