import React, { useState } from "react";
import axios from "axios";
import apiUrls from "../utils/apiUrls"; // ✅ Import your API urls

function Signup() {
  const allQuestions = [
    "What is your full name?",
    "What is your email address?",
    "What is your phone number?",
    "Create a password",
  ];

  const [allAnswers, setAllAnswers] = useState(["", "", "", ""]);
  const [questionNumber, setQuestionNumber] = useState(0);

  function handleInputChange(event) {
    let newAnswers = [...allAnswers];
    newAnswers[questionNumber] = event.target.value;
    setAllAnswers(newAnswers);
  }

  function isAnswerValid(index, answer) {
    if (index === 0) {
      return answer.length >= 3;
    } else if (index === 1) {
      return answer.endsWith("@gmail.com");
    } else if (index === 2) {
      return answer.length === 10 && /^\d+$/.test(answer);
    } else if (index === 3) {
      return answer.length >= 6;
    }
    return true;
  }

  function goToNextQuestion() {
    const currentAnswer = allAnswers[questionNumber];

    if (currentAnswer === "") {
      alert("Please fill this field.");
      return;
    }

    if (!isAnswerValid(questionNumber, currentAnswer)) {
      if (questionNumber === 0) alert("Full name must be at least 3 characters.");
      else if (questionNumber === 1) alert("Email must end with @gmail.com.");
      else if (questionNumber === 2) alert("Phone must be exactly 10 digits.");
      else if (questionNumber === 3) alert("Password must be at least 6 characters.");
      return;
    }

    if (questionNumber < allQuestions.length - 1) {
      setQuestionNumber(questionNumber + 1);
    } else {
      const newUser = {
        fullName: allAnswers[0],
        email: allAnswers[1],
        phone: allAnswers[2],
        password: allAnswers[3],
      };

      handleSignup(newUser);
      setAllAnswers(["", "", "", ""]);
      setQuestionNumber(0);
    }
  }

  async function handleSignup(userData) {
    try {
      console.log("user data api hit hone se just pehle", userData);
      const response = await axios.post(apiUrls.register, userData);
      console.log("✅ Success:", response.data);
      alert("✅ Signup successful!");
    } catch (error) {
      console.error("❌ Error during signup:", error);
      alert("❌ Signup failed. Please try again.");
    }
  }

  return (
    <>
      <style>{`
        .signup-card {
          max-width: 500px;
          margin: 80px auto;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          background-color: #ffffff;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .signup-card h4 {
          text-align: center;
          margin-bottom: 20px;
          color: #007bff;
          font-weight: bold;
        }
        .signup-card p {
          text-align: center;
          font-size: 18px;
          margin-bottom: 20px;
        }
        .signup-card input {
          width: 100%;
          padding: 12px;
          margin-bottom: 15px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 16px;
        }
        .signup-card button {
          width: 100%;
          padding: 14px;
          font-size: 18px;
          font-weight: bold;
          color: white;
          background-color: #28a745;
          border: none;
          border-radius: 8px;
          transition: background-color 0.3s ease;
          cursor: pointer;
        }
        .signup-card button:hover {
          background-color: #218838;
        }
      `}</style>

      <div className="signup-card">
        <h4>Signup Chatbot</h4>
        <p>{allQuestions[questionNumber]}</p>
        <input
          type={questionNumber === 3 ? "password" : "text"}
          value={allAnswers[questionNumber]}
          onChange={handleInputChange}
          placeholder="Type your answer..."
        />
        <button onClick={goToNextQuestion}>
          {questionNumber === allQuestions.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </>
  );
}

export default Signup;
