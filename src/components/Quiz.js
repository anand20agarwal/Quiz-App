import React, { useState } from 'react';
import './Quiz.css';
import { QuizData } from '../Data/QuizData';
import QuizResult from './QuizResult';

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(null);
    const [showResult, setShowResult] = useState(false);

    const updateScore = () => {
        if (clickedOption === QuizData[currentQuestion].answer) {
            setScore(score + 1);
        }
    }

    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < QuizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
        setClickedOption(null); // Reset clicked option
    }

    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
        return (
        <div>
            <div className='header'>Quiz App</div>
            <div className='container'>
                {showResult ? (
                    <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll} />
                ) : (
                    <>
                        <div className='questions'>
                            <span className='question-number'>{currentQuestion + 1}.</span>
                            <span className='question-txt'>{QuizData[currentQuestion].question}</span>
                        </div>
                        <div className='options'>
                            {QuizData[currentQuestion].options.map((option, i) => (
                                <button
                                    className={`option-button ${clickedOption === i + 1 ? "checked" : null}`}
                                    key={i}
                                    onClick={() => setClickedOption(i + 1)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                        <input type='button' value='Next' className='next-button' onClick={changeQuestion}></input>
                    </>
                )}
            </div>
        </div>
    );
}

export default Quiz;
