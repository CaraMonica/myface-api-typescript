import { React, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const LikeDislikeButton = ({ onClick, interactionType, hasUserInteracted, interactionValue, buttonType }) => (
  <Fragment>
    <FontAwesomeIcon
      icon={buttonType}
      onClick={onClick}
      className={`btn ${interactionType}${hasUserInteracted ? ` ${interactionType}ed` : ""}`}
    />
    <div className="interaction-value">{interactionValue}</div>
  </Fragment>
);

const InteractionButton = ({ post, isLikeButton, onClick }) =>
  isLikeButton ? (
    <LikeDislikeButton
      onClick={onClick}
      interactionType="like"
      hasUserInteracted={post.isLikedByCurrentUser}
      interactionValue={post.likedBy.length}
      buttonType={faThumbsUp}
    />
  ) : (
    <LikeDislikeButton
      onClick={onClick}
      interactionType="dislike"
      hasUserInteracted={post.isDislikedByCurrentUser}
      interactionValue={post.dislikedBy.length}
      buttonType={faThumbsDown}
    />
  );

export default InteractionButton;
