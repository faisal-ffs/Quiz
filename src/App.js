import React, { useState } from "react";
import "./App.css";

const questions = [
  {
    "id": "01",
    "question": "Which of the following is the correct name of React.js?",
    "options": [
      "React",
      "React.js",
      "ReactJS",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "id": "02",
    "question": "Which of the following are the advantages of React.js?",
    "options": [
      "React.js can increase the application's performance with Virtual DOM.",
      "React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library.",
      "React.js can render both on client and server side.",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "id": "03",
    "question": "Which of the following is not a disadvantage of React.js?",
    "options": [
      "React.js has only a view layer. We have put your code for Ajax requests, events and so on.",
      "The library of React.js is pretty large.",
      "The JSX in React.js makes code easy to read and write.",
      "The learning curve can be steep in React.js."
    ],
    "answer": "The JSX in React.js makes code easy to read and write."
  },
  {
    "id": "04",
    "question": "Which of the following command is used to install create-react-app?",
    "options": [
      "npm install -g create-react-app",
      "npx create-react-app my-app",
      "npm install create-react-app",
      "npm install -f create-react-app"
    ],
    "answer": "npx create-react-app my-app"
  },
  {
    "id": "05",
    "question": "What of the following is used in React.js to increase performance?",
    "options": [
      "Original DOM",
      "Virtual DOM",
      "Both A and B.",
      "None of the above."
    ],
    "answer": "Virtual DOM"
  },
  {
    "id": "06",
    "question": "What is the default port where webpack-server runs?",
    "options": [
      "3000",
      "8080",
      "3030",
      "6060"
    ],
    "answer": "3000"
  },
  {
    "id": "07",
    "question": "How many numbers of elements a valid react component can return?",
    "options": [
      "1",
      "2",
      "3",
      "Unlimited"
    ],
    "answer": "1"
  },
  {
    "id": "08",
    "question": "What is the declarative way to render a dynamic list of components based on values in an array?",
    "options": [
      "Using the reduce array method",
      "Using the <Each /> component",
      "Using the Array.map() method",
      "With a for/while loop"
    ],
    "answer": "Using the Array.map() method"
  },
  {
    "id": "09",
    "question": "What is a state in React?",
    "options": [
      "A permanent storage.",
      "Internal storage of the component.",
      "External storage of the component.",
      "None of the above."
    ],
    "answer": "Internal storage of the component."
  },
  {
    "id": "10",
    "question": "What are the two ways to handle data in React?",
    "options": [
      "State & Props",
      "Services & Components",
      "State & Services",
      "State & Component"
    ],
    "answer": "State & Props"
  }
];



function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleAnswerClick = (selectedOption) => {
    const correctAnswer = questions[currentQuestion].answer;
    const isCorrect = selectedOption === correctAnswer;
    setSelectedAnswer(selectedOption);
    setIsCorrectAnswer(isCorrect);
    setShowToast(true);

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    setShowToast(false);
    setSelectedAnswer("");
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setIsCorrectAnswer(false);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setShowToast(false);
    setIsCorrectAnswer(false);
    setSelectedAnswer("");
  };

  return (
    <div className="container">
      <h1>Quiz App</h1>
      {showResult ? (
        <div className="result">
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score} out of {questions.length}</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <div className="question">
            {questions[currentQuestion].question}
          </div>
          <div className="options">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerClick(option)}
                disabled={showToast}
                className={selectedAnswer === option ? "selected" : ""}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
      {showToast && (
        <div className="toast">
          {isCorrectAnswer ? "Correct!" : "Wrong!"}
          <button onClick={handleNextQuestion}>Next Question</button>
        </div>
      )}
    </div>
  );
}

export default App;
