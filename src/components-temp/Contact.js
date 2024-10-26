import { useState } from "react";
import emailjs from "emailjs-com";
import confetti from "canvas-confetti";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs
      .send(
        "service_6aot0pb",
        "template_r618btd",
        formDetails,
        "_TBsX2Yiy9ASuuLPg"
      )
      .then(
        (result) => {
          setButtonText("Send");
          setStatus({ success: true, message: "Message sent successfully!" });
          confetti({
            particleCount: 100,
            startVelocity: 30,
            spread: 60,
            origin: { x: 0, y: 0.5 },
            angle: 60,
          });

          confetti({
            particleCount: 100,
            startVelocity: 30,
            spread: 60,
            origin: { x: 1, y: 0.5 },
            angle: 120,
          });
          setTimeout(() => setStatus({}), 3000);
        },
        (error) => {
          setButtonText("Send");
          setStatus({
            success: false,
            message: "Something went wrong. Please try again later.",
          });
          setTimeout(() => setStatus({}), 3000);
        }
      );
  };

  const handleInputResize = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <section className="contact-section" id="connect">
      <div className="contact-container">
        <div className="title-border">
          <h2>Get In Touch</h2>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label>Name</label>
              <input
                type="text"
                value={formDetails.firstName}
                name="Name"
                onChange={(e) => onFormUpdate("firstName", e.target.value)}
              />
            </div>
            <div className="form-row">
              <label>Email</label>
              <input
                type="email"
                value={formDetails.email}
                name="email"
                onChange={(e) => onFormUpdate("email", e.target.value)}
              />
            </div>
            <div className="form-row">
              <label>Phone</label>
              <input
                type="text"
                value={formDetails.phone}
                name="phone"
                onChange={(e) => onFormUpdate("phone", e.target.value)}
              />
            </div>
            <div className="form-row">
              <label>Message</label>
              <textarea
                value={formDetails.message}
                name="message"
                onChange={(e) => {
                  onFormUpdate("message", e.target.value);
                  handleInputResize(e);
                }}
              />
            </div>
            <div className="send-btn-container">
              <button type="submit" className="send-btn">
                {buttonText}
              </button>
            </div>
            {status.message && (
              <div
                className={status.success ? "success-message" : "error-message"}
              >
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
