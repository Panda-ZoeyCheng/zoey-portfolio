import { useEffect, useState, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import zoey from "../assets/img/zoey.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const toRotate = useMemo(
    () => ["Software Developer", "Full-stack Developer", "Software Engineer"],
    []
  );

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, loopNum, toRotate]);

  const handleScroll = () => {
    document.getElementById("aboutme").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h1>
                    Hi I'm <span className="zoey-gradient">Zoey Cheng</span>
                  </h1>
                  <h1>
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='["Software Developer", "Full-stack Developer", "Software Engineer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    "The best way to predict the future is to invent it." – Alan
                    Kay
                  </p>
                  <button onClick={handleScroll}>
                    Let's Start
                    <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img className="image-hover" src={zoey} alt="Zoey Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
