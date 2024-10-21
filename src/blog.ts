type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
}

const blogs : Blog[] = [
    {
        title: "thing",
        date: "29/9/09",
        description: "a blog",
        image: "thebox.jpg",
        imageAlt: "a blox",
        slug: "blog1.html"
    },
    {
        title: "thing2",
        date: "29/9/09",
        description: "a blog",
        image: "thebox.jpg",
        imageAlt: "a blox",
        slug: "blog2.html"
    }
]

const container = document.querySelector(".container");

blogs.forEach(blog => {
    const postContainer = document.createElement("div");
    const title = document.createElement("h1");
    const img = document.createElement("img");
    const p = document.createElement("p");
    const a = document.createElement("a");

    title.textContent = blog.title;
    postContainer.appendChild(title);
    
    a.appendChild(img);
    img.setAttribute("src", blog.image);
    img.setAttribute("alt", blog.imageAlt);
    postContainer.appendChild(a);

    p.textContent = blog.description;
    postContainer.appendChild(p);
    
    a.setAttribute("href", blog.slug);
    container?.appendChild(postContainer);
})