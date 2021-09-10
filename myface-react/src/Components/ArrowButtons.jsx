import { React, Fragment } from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ArrowButton = ({ icon, onClick }) => <FontAwesomeIcon icon={icon} onClick={onClick} className={"btn"}/>;

const ArrowButtons = ({ onPreviousClick, onNextClick }) => (
  <Fragment>
    <ArrowButton icon={faArrowLeft} onClick={onPreviousClick}/>
    <ArrowButton icon={faArrowRight} onClick={onNextClick} />
  </Fragment>
);

export default ArrowButtons;
