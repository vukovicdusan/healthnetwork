import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const users = await prisma.users.findMany();
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong." }),
      { status: 500 }
    );
  }
};

export const POST = () => {
  return new NextResponse("hello", { status: 200 });
};
