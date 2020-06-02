import React from "react";
import questions from "./questionsSimple.json";

class QuestionComp extends React.Component {

render() {
            if (this.props.show)
            {
                console.log("modal is loded");
                return (
                    <React.Fragment >
            
            <div
            className="modal"
            id="modal"
            >
            <div className="modal-content">
                <img src={questions[0].src} 
                alt='current question'
                height='100%'
                width='100%'
                backgorund='red'/>
            </div>
            </div>
            </React.Fragment>
        );
            }
            else {
                return null;
            }
        }
}

export default QuestionComp;