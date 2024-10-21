var blogs = [
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
];
var container = document.querySelector(".container");
blogs.forEach(function (blog) {
    var postContainer = document.createElement("div");
    var title = document.createElement("h1");
    var img = document.createElement("img");
    var p = document.createElement("p");
    var a = document.createElement("a");
    title.textContent = blog.title;
    postContainer.appendChild(title);
    a.appendChild(img);
    img.setAttribute("src", blog.image);
    img.setAttribute("alt", blog.imageAlt);
    postContainer.appendChild(a);
    p.textContent = blog.description;
    postContainer.appendChild(p);
    a.setAttribute("href", blog.slug);
    container === null || container === void 0 ? void 0 : container.appendChild(postContainer);
});
