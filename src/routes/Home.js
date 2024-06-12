import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import RoundScores from "../components/RoundScores";

function Home() {
  return (
    <div className="home osrs-background">
      <div className="home-page-container">
        <p className="dialog-title">OSRS Guesser</p>
        {/* TODO: Round scores only if completed */}
        {/* <RoundScores /> */}
        <ul>
          <li>
            <Link className="osrs-button" to="/Game">
              <FontAwesomeIcon icon={faPlay} />
            </Link>
          </li>
          <li>
            <Link
              className="osrs-button"
              to="https://github.com/davsan56/OSRSGuesser"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
