import blogs from "./blogData";
import BlogPreview from "@/components/blogPreview";

export default function Resume() {
  return (
    <main>
      <h1 className="page-title">Blog</h1>
      <div className="container">
            {blogs.map((blog, idx) => 
                <BlogPreview // This is how we call the component
                key={idx}
                {...blog}/>)}
      </div>
    </main>
  );
}

