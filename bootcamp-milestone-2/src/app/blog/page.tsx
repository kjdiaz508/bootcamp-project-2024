import BlogPreview from "@/components/blogPreview";
import connectDB from "@/database/db";
import BlogModel, { BlogType } from "@/database/blogSchema";
import styles from "./page.module.css";

async function getBlogs() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs: BlogType[] = await BlogModel.find()
      .sort({ date: -1 })
      .orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export default async function BlogListPage() {
  const blogs: BlogType[] = await getBlogs();

  return (
    <main>
      <h1 className="page-title">Blog</h1>
      <div className={styles.container}>
        {blogs.map((blog, idx) => (
          <BlogPreview // This is how we call the component
            key={idx}
            title={blog.title}
            slug={blog.slug}
            date={blog.date}
            description={blog.description}
            content={blog.content}
            image={blog.image}
            image_alt={blog.image_alt}
          />
        ))}
      </div>
    </main>
  );
}
