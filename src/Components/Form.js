// src/Components/Form.js
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

    if (!name || !email || !phonenumber || !subject || !message) {
      setSubmissionStatus("All fields are required.");
      return;
    }

    const sheetData = {
      "Your Full Name:": name,
      "Email:": email,
      "Phone Number:": phonenumber,
      "Subject:": subject,
      "Message:": message,
    };

    try {
      // Store data in Google Sheets via Sheet.best
      const response = await axios.post(
        "https://api.sheetbest.com/sheets/582e089c-7b2c-497c-b10c-7ca821fd6cba",
        sheetData
      );
      console.log("Data successfully sent to Google Sheets:", response.data);

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
          placeholder="Enter your email"
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