"use client";
import { ChildrenProps } from "@/types/ChildrenProps";
import { SessionProvider } from "next-auth/react";
import React from "react";

const AuthProvider = ({ children }: ChildrenProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
