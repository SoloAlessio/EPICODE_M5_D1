import { Button, Container, Row, Col } from "react-bootstrap";
import ReactLogo from "../logo.svg";
import GithubLogo from "../githubLogo.svg";
import GithubLogoWhite from "../githubLogoWhite.png";
import hero from "../hero.png";
import { useContext } from "react";
import { ThemeContext } from "../context/SearchContext";

const Welcome = () => {
  const theme = useContext(ThemeContext);
  return (
    <Container
      className="py-5 mt-5"
      style={{ color: theme === "light" ? "#252525" : "#fff" }}
    >
      <Row className="mb-4 align-items-center flex-lg-row-reverse">
        <Col md={6} xl={7} className="mb-4 mb-lg-0 pr-0">
          <div className="lc-block position-relative">
            <img className="img-fluid" alt="react illustration" src={hero} />
          </div>
        </Col>
        <Col md={6} xl={5} className="pl-0">
          <div className="lc-block mb-3">
            <div editable="rich">
              <h1 className="fw-bolder display-2">React JS</h1>
            </div>
          </div>
          <div className="lc-block mb-4">
            <div editable="rich">
              <p className="lead">La mia prima applicazione React</p>
            </div>
          </div>
          <div className="lc-block">
            <Button
              href="https://www.react.dev"
              className="me-3 px-3 border-0 d-inline-flex align-items-center"
              style={{
                backgroundColor: theme === "light" ? "#f8f9fa" : "#212529",
                borderRadius: "12px",
                height: "60px",
              }}
            >
              <img
                src={ReactLogo}
                alt="react logo"
                width={"32px"}
                height={"32px"}
              />
            </Button>

            <Button
              href="https://github.com/SoloAlessio/EPICODE_M5_D2"
              className="me-3 px-3 border-0 d-inline-flex align-items-center"
              style={{
                backgroundColor: theme === "light" ? "#f8f9fa" : "#212529",
                borderRadius: "12px",
                height: "60px",
              }}
            >
              <img
                src={theme === "light" ? GithubLogo : GithubLogoWhite}
                alt="github logo"
                width={"32px"}
                height={"32px"}
              />
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
