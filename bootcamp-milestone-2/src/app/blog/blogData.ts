export interface Blog {              // type also works
    title: string;
	date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
    text: string;
}

const blogs: Blog[] = [
	{
        title: "thing",
        date: "29/9/09",
        description: "a blog",
        image: "../../public/globe.svg",
        imageAlt: "a blox",
        slug: "/blog/blog1",
        text: "wowie!"
    },
    {
        title: "thing2",
        date: "29/9/09",
        description: "a blog",
        image: "../../public/globe.svg",
        imageAlt: "a blox",
        slug: "/blog/blog2",
        text: "indubitably"
    } 
];

export default blogs; // This will allow us to access this data anywhere!