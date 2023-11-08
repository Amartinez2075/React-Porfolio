import Skills from './Skills';
export default function Resume() {
  return (
    <div>
      {/* Resume Section */}
      <section id="resume">
        <Skills />
        <p>
        <h1>Resume</h1>
          <a href={process.env.PUBLIC_URL + "/Ashara Martinez Dev Resume.pdf"} download>
            <button>Download Resume</button>
          </a>
        </p>
      </section>
      
      {/* Thick Section */}
      <section id="Thick-Section">
        {/* Thick Section content here */}
      </section>
      <footer>
        {/* Footer content here */}
      </footer>
    </div>
  );
}
