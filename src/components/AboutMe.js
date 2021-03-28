import DevIcon from "devicon-react-svg";

const AboutMe = () => {
  return (
    <section className="aboutme">
      <div className="aboutme__leftContainer">
        <div className="aboutme__text">
          <h1>About me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            numquam quaerat odit at quibusdam vitae! Hic quas ipsa minima
            architecto quisquam facere, rerum aut eveniet optio cumque
            asperiores placeat incidunt. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Doloremque natus, harum architecto rem nesciunt
            sed excepturi porro quisquam accusantium odio eligendi dolores quod
            quae fugiat ratione. Asperiores autem ad sint.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel qui
            nobis vero provident reiciendis soluta minima, atque illum enim
            ipsam.
          </p>
        </div>
        <div className="aboutme__skills">
          <h2>Skills I have</h2>
          <DevIcon icon="html5" />
          <DevIcon icon="css3" />
          <DevIcon icon="sass" />
          <DevIcon icon="javascript" />
          <DevIcon icon="react" />
          <DevIcon icon="firebase" />
        </div>
      </div>
      <div className="aboutme__rightContainer">
        <img src="/images/me.png" alt="Shaan Alam" />
      </div>
    </section>
  );
};

export default AboutMe;
