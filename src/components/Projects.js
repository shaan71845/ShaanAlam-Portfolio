const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h1>My Latest Projects</h1>
      <div className="container">
        <div className="projects__grid">
          <div className="project">
            <img src="/images/insta.jpg" alt="Instagram Clone" />
            <div className="project__details">
              <h3 className="project__title">Instagram Clone</h3>
            </div>
          </div>
          <div className="project">
            <img src="/images/whatsapp.jpg" alt="Instagram Clone" />
            <div className="project__details">
              <h3 className="project__title">WhatsApp Clone</h3>
            </div>
          </div>
          <div className="project">
            <img src="/images/covidtracker.jpg" alt="Instagram Clone" />
            <div className="project__details">
              <h3 className="project__title">Covid Tracker</h3>
            </div>
          </div>
          <div className="project">
            <img src="/images/expensetracker.jpg" alt="Expense Tracker" />
            <div className="project__details">
              <h3 className="project__title">Expense Tracker</h3>
            </div>
          </div>
          <div className="project">
            <img src="/images/chatbox.jpg" alt="Live Chatbox" />
            <div className="project__details">
              <h3 className="project__title">Live Chatbox</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
