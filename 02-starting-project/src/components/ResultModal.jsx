import { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const kacsa = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        kacsa.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={kacsa} className="result-modal">
      {userLost && <h2>You lost!</h2>}
      {!userLost && <h2>Your score: {score}</h2>}
      <p>
        Your target time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You stopped the timer at{" "}
        <strong>{formattedRemainingTime} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
