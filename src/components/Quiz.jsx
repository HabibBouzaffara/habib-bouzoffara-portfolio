import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { questions } from "../constants";
import { StarsCanvas } from "../components";

const Quiz = () => {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAnswerChange = (questionIndex, selectedOption) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedOption,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  const correctAnswersCount = questions.filter(
    (q, index) => answers[index] === q.correctAnswer
  ).length;

  return (
    <div>
      <div className='mt-4 text-left'>
        <button
          onClick={() => navigate(-1)} // Navigate to the previous page
          className='ml-4 bg-tertiary py-2 px-6 rounded-xl text-white font-bold shadow-md shadow-primary hover:bg-gray-600 transition-colors duration-200'
        >
          Go Back
        </button>
      </div>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='bg-black-100 p-6 rounded-2xl md:w-1/2 w-full m-auto shadow-lg'
      >
        <StarsCanvas />
        <p className={styles.sectionSubText}>Test Your Knowledge</p>
        <h3 className={styles.sectionHeadText}>JavaScript Quiz</h3>
        {!showResults ? (
          <form onSubmit={handleSubmit} className='mt-6 flex flex-col gap-6'>
            {questions.map((q, index) => (
              <div
                key={index}
                className='flex flex-col gap-4 p-4 bg-tertiary rounded-lg shadow-md'
              >
                <h3 className='text-white font-bold text-sm'>
                  {index + 1}. {q.question}
                </h3>
                <div className='flex flex-col gap-2'>
                  {q.options.map((option) => (
                    <label
                      key={option}
                      className='flex items-center gap-2 bg-black-200 p-2 rounded-lg cursor-pointer hover:bg-black-300'
                    >
                      <input
                        type='radio'
                        name={`question-${index}`}
                        value={option}
                        checked={answers[index] === option}
                        onChange={() => handleAnswerChange(index, option)}
                        className='accent-primary'
                      />
                      <span className='text-white text-sm'>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <button
              type='submit'
              className='bg-tertiary py-2 px-6 rounded-xl text-white font-bold shadow-md shadow-primary mt-4 hover:bg-primary transition-colors duration-200'
            >
              Submit
            </button>
          </form>
        ) : (
          <div className='mt-6'>
            <h2 className='text-white font-bold text-lg mb-4'>Results</h2>
            <p className='text-white mb-4'>
              You got {correctAnswersCount} out of {questions.length} correct!
            </p>
            {questions.map((q, index) => (
              <div
                key={index}
                className='mb-4 p-4 bg-tertiary rounded-lg shadow-md'
              >
                <h4 className='text-white font-bold text-sm'>
                  {index + 1}. {q.question}
                </h4>
                <p
                  className={`mt-2 font-medium ${
                    answers[index] === q.correctAnswer
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  <strong>Your Answer:</strong> {answers[index] || "No Answer"}
                </p>
                <p className='text-white'>
                  <strong>Correct Answer:</strong> {q.correctAnswer}
                </p>
              </div>
            ))}
            <button
              onClick={() => window.location.reload()}
              className='bg-tertiary py-2 px-6 rounded-xl text-white font-bold shadow-md shadow-primary hover:bg-primary transition-colors duration-200'
            >
              Restart Quiz
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Quiz;
