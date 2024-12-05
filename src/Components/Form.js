import React, { useState } from "react";
import axios from "axios";
import emailjs from "emailjs-com";  // Import EmailJS SDK
import "./FormStyles.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      Name: name,
      Email: email,
      PhoneNumber: phonenumber,
      Subject: subject,
      Message: message,
    };

    // Sending data to Google Sheets (as per your original code)
    axios
      .post(
        "https://sheet.best/api/sheets/0437eb8e-3205-4292-9ecd-e7e2856d5961",
        data
      )
      .then((response) => {
        if (response.status === 200) {
          setName("");
          setEmail("");
          setPhonenumber("");
          setSubject("");
          setMessage("");
          setSubmissionStatus("Message sent successfully!");

          // Send the email via EmailJS
          emailjs
            .send(
              "21dmbcs124",  // Replace with your EmailJS service ID
              "template_9pkkqa9",  // Replace with your EmailJS template ID
              {
                name: name,
                email: email,
                phone: phonenumber,
                subject: subject,
                message: message,
              },
              "gP5gF9RPdQC3gvB-c"  // Replace with your EmailJS user ID
            )
            .then((response) => {
              console.log("Email sent successfully:", response);
            })
            .catch((error) => {
              console.error("Error sending email:", error);
            });
        } else {
          setSubmissionStatus("Error occurred. Please try again.");
        }
      })
      .catch((error) => {
        console.error(error);
        setSubmissionStatus("Error occurred. Please try again.");
      });
  };

  return (
    <div className="form">
      <form autoComplete="off" className="form-group" onSubmit={handleSubmit}>
        <label>Your Full Name: </label>
        <input
          type="text"
          placeholder="Enter your name"
          required
          className="form-control"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>

        <label>Email: </label>
        <input
          type="email"
          placeholder="Enter your email (e.g: abc@example.com)"
          required
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>

        <label>Phone Number: </label>
        <input
          type="number"
          placeholder="Enter your Phone number (e.g: +92 123 4567789)"
          required
          className="form-control"
          onChange={(e) => setPhonenumber(e.target.value)}
          value={phonenumber}
        ></input>

        <label>Subject: </label>
        <input
          type="text"
          placeholder="Subject"
          required
          className="form-control"
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
        ></input>

        <label>Message: </label>
        <textarea
          rows="6"
          placeholder="Type your message here"
          required
          className="form-control"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <button className="btn">Submit</button>
      </form>

      {submissionStatus && (
        <div className={`submission-status success`}>{submissionStatus}</div>
      )}
    </div>
  );
};

export default Form;
