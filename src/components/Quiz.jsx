import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { questions } from "../constants";

const Quiz = () => {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

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
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className='bg-black-100 p-8 rounded-2xl md:w-3/4 w-full m-auto shadow-lg'
    >
      <p className={styles.sectionSubText}>Test Your Knowledge</p>
      <h3 className={styles.sectionHeadText}>JavaScript Quiz</h3>
      {!showResults ? (
        <form onSubmit={handleSubmit} className='mt-8 flex flex-col gap-8'>
          {questions.map((q, index) => (
            <div
              key={index}
              className='flex flex-col gap-4 p-6 bg-tertiary rounded-lg shadow-md'
            >
              <h3 className='text-white font-bold text-lg'>
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
                    <span className='text-white'>{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl text-white font-bold shadow-md shadow-primary mt-4 hover:bg-primary transition-colors duration-200'
          >
            Submit
          </button>
        </form>
      ) : (
        <div className='mt-8'>
          <h2 className='text-white font-bold text-xl mb-4'>Results</h2>
          <p className='text-white mb-6'>
            You got {correctAnswersCount} out of {questions.length} correct!
          </p>
          {questions.map((q, index) => (
            <div
              key={index}
              className='mb-6 p-4 bg-tertiary rounded-lg shadow-md'
            >
              <h4 className='text-white font-bold'>
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
            className='bg-tertiary py-3 px-8 rounded-xl text-white font-bold shadow-md shadow-primary hover:bg-primary transition-colors duration-200'
          >
            Restart Quiz
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default Quiz;
