import Link from "next/link";
import React from "react";
import avatar from "../public/avatar.jpg";
import Image from "next/image";
import useSignOut from "@/hooks/useSignOut";
import useUser from "@/hooks/useUser";

const AvatarMenu = () => {
  const [signOutHandler] = useSignOut();
  const [user] = useUser();

  return (
    <div className="relative group">
      <Link
        href={"/profile"}
        className="flex gap-2 hover:text-secondaryAccent transition-colors uppercase"
      >
        <span>{user.displayName}</span>
        <Image
          width={25}
          height={25}
          src={user.photoUrl ? user.photoUrl : avatar}
          alt="avatar"
          className="h-[25px] -translate-y-[3px] rounded-full"
        ></Image>
      </Link>
      <ul className="absolute w-max p-4 pr-0 bg-tertiaryBg top-6 right-0 hidden group-hover:block">
        <li>
          <Link
            href={"/profile"}
            className="hover:text-secondaryAccent transition-colors mt-2"
          >
            Edit Profile
          </Link>
        </li>
        <li
          onClick={signOutHandler}
          className="cursor-pointer hover:text-secondaryAccent transition-colors mt-2"
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default AvatarMenu;
