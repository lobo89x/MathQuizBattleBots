import React from "react";
import questions from "./questionsSimple.json";

class questionComp extends React.Component {

render() {
            if (true)
            {
                return (
                    <React.Fragment >
            
            <div
            className="modal"
            id="modal"
            >
            <div className="modal-content">
                <img src={questions[0].src} 
                height='100%'
                width='100%'/>
            </div>
            </div>
            </React.Fragment>
        );
            }
        }
}

export default questionComp;