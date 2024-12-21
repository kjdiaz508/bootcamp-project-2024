import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import blogModel from "@/database/blogSchema";

type IParams = {
  params: {
    slug: string;
  };
};

export async function POST(req: NextRequest, { params }: IParams) {
  await connectDB();
  let body;
  const { slug } = await params;
  const BlogSlug = slug;

  try {
    body = await req.json();
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Could not parse request." },
      { status: 400 },
    );
  }

  const { user, date, comment } = body || {};

  if (!user || !date || !comment) {
    return NextResponse.json("Invalid comment, missing data", { status: 400 });
  }

  try {
    console.log("AAAAAAAAAAAAAAAAAAAAAA but in post this time");
    const result = await blogModel.updateOne(
      { slug: BlogSlug },
      {
        $addToSet: {
          comments: {
            user: body.user,
            date: body.date,
            comment: body.comment,
          },
        },
      },
    );
    if (result.modifiedCount === 0) {
      return NextResponse.json(
        { error: "Blog not found or comment already exists" },
        { status: 404 },
      );
    }

    return NextResponse.json({ message: "Success!" }, { status: 200 });
  } catch (err) {
    console.log("error encountered: ", err);
    return NextResponse.json("Server Error", { status: 500 });
  }
}
