import Image from "next/image";
import { BlogType } from "@/database/blogSchema";
import styles from "./page.module.css";
import Comment from "@/components/Comment";
import CommentForm from "@/components/commentForm";
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Blog({ params }: Props) {
  const { slug } = await params;
  async function getBlog(slug: string) {
    try {
      console.log(slug);
      const res = await fetch(`http://localhost:3000/api/Blogs/${slug}`, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Something broke");
      }
      return res.json();
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  const blog: BlogType = await getBlog(slug);

  if (!blog) {
    return (
      <div>
        <p>This page does not exist...</p>
      </div>
    );
  }
  console.log(blog);

  return (
    <main>
      <h1 className="page-title">{blog.title}</h1>
      <div className={styles.container}>
        <p>{new Date(blog.date).toDateString()}</p>
        <Image
          src={blog.image}
          alt={blog.image_alt}
          width={500}
          height={500}
        ></Image>
        <p>{blog.content}</p>
        <h3>Comments:</h3>
        {blog.comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
        <CommentForm slug={slug} />
      </div>
    </main>
  );
}
