import React from "react";
import questions from "./questionsSimple.json";

function questionComp(props) {

  return (
    <React.Fragment >
    
    <div
      className="modal"
      id="modal"
    >
      <div className="modal-content">
          <img src={questions[0].src} />
      </div>
    </div>
    </React.Fragment>
  );
}

export default questionComp;