import React, { useState } from "react";
import "./FormStyles.css";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    if (!name || !email || !phonenumber || !subject || !message) {
      setSubmissionStatus("All fields are required.");
      return;
    }

    // Prepare data for EmailJS and Sheet.best
    const emailParams = {
      name,
      email,
      phone: phonenumber,
      subject,
      message,
    };

    const sheetData = {
      "Your Full Name:": name,
      "Email:": email,
      "Phone Number:": phonenumber,
      "Subject:": subject,
      "Message:": message,
    };

    try {
      // Send email via EmailJS
      await window.emailjs.send(
        "21dmbcs124", // Replace with your EmailJS Service ID
        "template_9pkkqa9", // Replace with your EmailJS Template ID
        emailParams,
        "gP5gF9RPdQC3gvB-c" // Replace with your EmailJS Public Key
      );
      console.log("Email sent successfully!");

      // Store data in Google Sheets via Sheet.best
      const response = await axios.post(
        "https://api.sheetbest.com/sheets/582e089c-7b2c-497c-b10c-7ca821fd6cba", // Your Sheet.best Connection URL
        sheetData
      );
      console.log("Data successfully sent to Google Sheets:", response.data);

      // Clear form fields and update submission status
      setName("");
      setEmail("");
      setPhonenumber("");
      setSubject("");
      setMessage("");
      setSubmissionStatus("Message sent and data stored successfully!");
    } catch (error) {
      console.error("Error occurred:", error);
      setSubmissionStatus("Error occurred. Please try again.");
    }
  };

  return (
    <div className="form">
      <form autoComplete="off" className="form-group" onSubmit={handleSubmit}>
        <label>Your Full Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          required
          className="form-control"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email (e.g., abc@example.com)"
          required
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label>Phone Number:</label>
        <input
          type="text"
          placeholder="Enter your phone number"
          required
          className="form-control"
          onChange={(e) => setPhonenumber(e.target.value)}
          value={phonenumber}
        />

        <label>Subject:</label>
        <input
          type="text"
          placeholder="Subject"
          required
          className="form-control"
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
        />

        <label>Message:</label>
        <textarea
          rows="6"
          placeholder="Type your message here"
          required
          className="form-control"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>

        <button className="btn" type="submit">
          Submit
        </button>
      </form>

      {submissionStatus && (
        <div
          className={`submission-status ${
            submissionStatus === "Message sent and data stored successfully!"
              ? "success"
              : "error"
          }`}
        >
          {submissionStatus}
        </div>
      )}
    </div>
  );
};

export default Form;
