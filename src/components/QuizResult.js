import React from 'react'
import './Quiz.css';

function QuizResult(props) {
  return (
    <>
    <div className='show-score'>
      your Score:{props.score}<br/>
      Total Score:{props.totalScore}
    </div>
     <div className='next-button' onClick={props.tryAgain}>Try Again</div>
     </>
  )
}

export default QuizResult
