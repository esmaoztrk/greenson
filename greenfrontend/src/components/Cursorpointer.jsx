import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";

const CursorPointer = ({questions}) => {
  const [activeIndex, setActiveIndex] = useState(null); // Hangi sorunun cevabının açık olduğunu izlemek için bir state kullanıyoruz

 

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="questions-container">
      <h2>Sıkça Sorulan Sorular</h2>
      <div className="questions">
        {questions.map((item, index) => (
          <div
            key={index}
            className="question"
            onClick={() => toggleAnswer(index)}
          >
            <div className="question-text-container">
              <span className="toggle-icon">
                {activeIndex === index ? (
                  <i className="fas fa-chevron-right"></i>
                ) : (
                  <i className="fas fa-chevron-down"></i>
                )}
              </span>
              <span className="question-text">{item.question}</span>
            </div>
            {activeIndex === index && (
              <div className="answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CursorPointer;
