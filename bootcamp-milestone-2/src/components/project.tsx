import React from "react";
import Image from "next/image";
import { ProjectType } from "@/database/projectSchema";

export default function Project(props: ProjectType) {
  return (
    <div>
      <h3> {props.name} </h3>
      <div>
        <Image
          src={props.image}
          alt={props.image_alt}
          width={500}
          height={500}
        ></Image>
        <p>{props.description}</p>
        <p>{props.date.toDateString()}</p>
      </div>
    </div>
  );
}
