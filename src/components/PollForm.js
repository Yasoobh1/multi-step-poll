import React, { useState } from 'react';
import '../styles/PollForm.css';
import axios from 'axios';

const PollForm = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [answers, setAnswers] = useState(new Array(steps.length).fill(null));

  const handleOptionSelect = (index, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[index] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://mockapi.com/poll', {
        answers,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting data: ", error);
    }
  };

  return (
    <div className="poll-form-container">
      <div className="left-section">
        <div className="question">
          <h2>{steps[activeStep].title}</h2>
        </div>
        <div className="progress-indicator">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`indicator ${activeStep === index ? 'active' : ''}`}
            ></div>
          ))}
        </div>
      </div>

      <div className="right-section">
        <div className="options">
          {steps[activeStep].options.map((option, index) => (
            <div
              key={index}
              className={`option ${answers[activeStep] === index ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(activeStep, index)}
            >
              <span className="emoji">{option.icon}</span>
              <span className="label">{option.label}</span>
            </div>
          ))}
        </div>
        {activeStep < steps.length - 1 ? (
          <button className="next-button" onClick={handleNext}>Next</button>
        ) : (
          <button className="submit-button" onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default PollForm;
