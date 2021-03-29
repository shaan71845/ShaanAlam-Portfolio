import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Project = () => {
  // Fetch Data

  return (
    <section className="project__page">
      <div className="container">
        <Link to="/" className="back__btn">
          &larr; Go back
        </Link>
        <div className="header__img">
          <img src="/images/whatsapp.jpg" alt="whastapp" />
        </div>
        <div className="project__details">
          <h1>WhatsApp Clone</h1>
          <a href="">Live Demo</a>
          <a href="">View on GitHub</a>
          <div className="project__blockContent">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              voluptate id tempore, consequuntur reprehenderit debitis sapiente!
              Magnam placeat iure iste neque culpa voluptas, inventore sapiente
              harum perspiciatis eos, molestias quam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
