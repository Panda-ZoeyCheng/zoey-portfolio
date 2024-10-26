import { useState } from "react";
import emailjs from "emailjs-com";
import confetti from "canvas-confetti";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const userId = process.env.REACT_APP_USER_ID;

  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formDetails.firstName || !formDetails.email || !formDetails.message) {
      toast.error("Please fill out all required fields.", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    setButtonText("Sending...");

    emailjs
      .send(
        serviceId,
        templateId,
        {
          user_name: formDetails.firstName,
          user_email: formDetails.email,
          message: formDetails.message,
        },
        userId
      )
      .then(
        (result) => {
          setButtonText("Send");
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

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
        },
        (error) => {
          setButtonText("Send");
          toast.error("Message failed to send 😞", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  const handleInputResize = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <>
      <section className="contact-section" id="connect">
        <div className="contact-container">
          <div className="title-border">
            <h2>Get In Touch</h2>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  <span className="label-text">Name</span>
                  <span className="required-asterisk">*</span>
                </label>
                <input
                  type="text"
                  value={formDetails.firstName}
                  name="user_name"
                  onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  required
                />
              </div>
              <div className="form-row">
                <label>
                  <span className="label-text">Email</span>
                  <span className="required-asterisk">*</span>
                </label>
                <input
                  type="email"
                  value={formDetails.email}
                  name="user_email"
                  onChange={(e) => onFormUpdate("email", e.target.value)}
                  required
                />
              </div>
              <div className="form-row">
                <label>
                  <span className="label-text">Message</span>
                  <span className="required-asterisk">*</span>
                </label>
                <textarea
                  value={formDetails.message}
                  name="message"
                  onChange={(e) => {
                    onFormUpdate("message", e.target.value);
                    handleInputResize(e);
                  }}
                  required
                />
              </div>
              <div className="send-btn-container">
                <button type="submit" className="send-btn">
                  {buttonText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};
