import React, { Component } from 'react';
import Quiz from 'react-quiz-component';
import { readyPosition } from "../player/battle";
import { quizFail } from "../player/battle";
import { quizPass } from "../player/battle";


export const quiz =  {
    // "quizTitle": "Battle Quiz Demo",
    // "quizSynopsis": "answer the questions right and defeat the monster",
    "questions": [
      {
        "question": "How can you access the state of a component from inside of a member function?",
        "questionType": "text",
        "questionPic": "./q1.png", // if you need to display Picture in Question
        "answerSelectionType": "single",
        "answers": [
          "66",
          "78",
          "132",
          "144",
          "156"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "point": "20"
       },
      // {
      //   "question": "How can you access the state of a component from inside of a member function?",
      //   "questionType": "text",
      //   "questionPic": "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
      //   "answerSelectionType": "single",
      //   "answers": [
      //     "this.getState()",
      //     "this.prototype.stateValue",
      //     "this.state",
      //     "this.values"
      //   ],
      //   "correctAnswer": "3",
      //   "messageForCorrectAnswer": "Correct answer. Good job.",
      //   "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      //   "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      //   "point": "20"
      // },
      // {
      //   "question": "ReactJS is developed by _____?",
      //   "questionType": "text",
      //   "answerSelectionType": "single",
      //   "answers": [
      //     "Google Engineers",
      //     "Facebook Engineers"
      //   ],
      //   "correctAnswer": "2",
      //   "messageForCorrectAnswer": "Correct answer. Good job.",
      //   "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      //   "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      //   "point": "20"
      // },
      // {
      //   "question": "ReactJS is an MVC based framework?",
      //   "questionType": "text",
      //   "answerSelectionType": "single",
      //   "answers": [
      //     "True",
      //     "False"
      //   ],
      //   "correctAnswer": "2",
      //   "messageForCorrectAnswer": "Correct answer. Good job.",
      //   "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      //   "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      //   "point": "10"
      // },
      // {
      //   "question": "Which of the following concepts is/are key to ReactJS?",
      //   "questionType": "text",
      //   "answerSelectionType": "single",
      //   "answers": [
      //     "Component-oriented design",
      //     "Event delegation model",
      //     "Both of the above",
      //   ],
      //   "correctAnswer": "3",
      //   "messageForCorrectAnswer": "Correct answer. Good job.",
      //   "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      //   "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      //   "point": "30"
      // },
      // {
      //   "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      //   "questionType": "photo",
      //   "answerSelectionType": "single",
      //   "answers": [
      //     "https://dummyimage.com/600x400/000/fff&text=A",
      //     "https://dummyimage.com/600x400/000/fff&text=B",
      //     "https://dummyimage.com/600x400/000/fff&text=C",
      //     "https://dummyimage.com/600x400/000/fff&text=D"
      //   ],
      //   "correctAnswer": "1",
      //   "messageForCorrectAnswer": "Correct answer. Good job.",
      //   "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      //   "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      //   "point": "20"
      // },
      // {
      //   "question": "What are the advantages of React JS?",
      //   "questionType": "text",
      //   "answerSelectionType": "multiple",
      //   "answers": [
      //     "React can be used on client and as well as server side too",
      //     "Using React increases readability and makes maintainability easier. Component, Data patterns improves readability and thus makes it easier for manitaining larger apps",
      //     "React components have lifecycle events that fall into State/Property Updates",
      //     "React can be used with any other framework (Backbone.js, Angular.js) as it is only a view layer"
      //   ],
      //   "correctAnswer": [1, 2, 4],
      //   "messageForCorrectAnswer": "Correct answer. Good job.",
      //   "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      //   "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      //   "point": "20"
      // },
    ]
  } 

  const onCompleteAction = (obj) => {

    console.log(obj);
    var correctCount = obj.numberOfCorrectAnswers;
    var wrongCount = obj.numberOfIncorrectAnswers;
    var totalCount = correctCount + wrongCount;
    if(totalCount < obj.numberOfQuestions)
    {
      return null
    }
    else{
          console.log("this is right::  " + correctCount);
          console.log("this is wrong::  " + wrongCount);
          setTimeout(function() {
            if(correctCount>wrongCount)
            {
              // alert('you win');
              console.log("imon line 114");
              quizPass();
              setTimeout(function() {
                readyPosition();
              }, 2200)
            }
            else
            {
              console.log("imon line 120");
              quizFail();
              
              setTimeout(function() {
                readyPosition();
              }, 4000)
              // alert('you loose');
            }
          }, 1000)
    }
  }

class QuizBox extends Component {
  render() {
    return (
      <div
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Quiz quiz={quiz} onComplete={onCompleteAction} showDefaultResult={false}/>
      </div>
    )
  }
}

export default QuizBox;