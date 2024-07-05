import image from "/LinkedIn3.png";
import "./Welcome.css";

import AnimatedText from "../../components/AnimatedText";
import Notification from "../../components/Notification";

function Welcome({ screenRef, setMonitor, notification, setNotification }) {
  return (
    <>
      <section
        className="welcome screen-content"
        onClick={() => setMonitor(screenRef)}
      >
        {notification && <Notification setNotification={setNotification} />}
        <div className="hero-text">
          <h4>
            <AnimatedText text="Hi, I am Adrian Joltea" />
          </h4>
          <h1>
            I'm a{" "}
            <span className="text-color">
              <AnimatedText text="Front-end Developer" />
            </span>
          </h1>
          <p>
            <AnimatedText text="I create engaging user experiences" />
          </p>
        </div>

        <div className="hero-img">
          <img src={image} alt="profile" />
        </div>
      </section>
    </>
  );
}

export default Welcome;
