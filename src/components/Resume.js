export default function Resume() {
  return (
    <div>
      {/* Resume Section */}
      <section id="resume">
        <h1>Resume</h1>
        <p>
        <a href={process.env.PUBLIC_URL + "/AshMart Resume.pdf"} download>
  <button>Download Resume</button>
</a>
        </p>
      </section>
      
      {/* Thick Section */}
      <section id="Thick-Section">
        {/* Thick Section content here */}
      </section>
    </div>
  );
}