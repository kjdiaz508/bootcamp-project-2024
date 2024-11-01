
export default function Contact() {
  return (
    <main>
      <h1 className="page-title">Contact</h1>
      <div className="about">
        <div className="about-image"></div>
        <div className="about-text">
          <p>Hello World! This is my website.</p>
          <p>This is a sentence.</p>
        </div>
      </div>
        <form id="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required/><br/>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required/><br/>

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea><br/>

        <input type="submit" value="Submit"/>
    </form>
    </main>
  );
}