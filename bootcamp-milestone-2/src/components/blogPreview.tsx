import React from 'react';
import Image from "next/image"
import thing from "../../public/thebox.jpg"
import { Blog } from "../app/blog/blogData"
import Link from 'next/link';

export default function BlogPreview(props: Blog) {
  return (
    <div>
      <h3> {props.title} </h3>
      <div>
        <Link href={props.slug}>
          <Image src={thing} alt="img" width={500} height={500} ></Image>
        </Link>
        <p>{props.description}</p>
		<p>{props.date}</p>
      </div>
	  </div>
  );
}