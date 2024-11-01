import Image from "next/image"
import thing from "../../../../public/thebox.jpg"

export default function Blog1() {
  return (
    <main>
        <h1 className="page-title">Blog1</h1>
        <div className="container">
            <p>10/21/2024</p>
            <Image src={thing} alt="img" width={500} height={500} ></Image>
            <p>Much content! wWOWie!</p>
        </div>
    </main>
  );
}
