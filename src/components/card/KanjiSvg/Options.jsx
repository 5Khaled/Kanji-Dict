import PropTypes from "prop-types";

import replayIcon from "../../../assets/replay.svg";
import orderIcon from "../../../assets/order.svg";

export default function Options({
  playAnimation,
  svgKanji,
  strokeOrderToggled,
  setStrokeOrderToggled,
  isAnimating,
}) {
  function showStrokeOrder(svgKanji) {
    const svgDoc = svgKanji.current.contentDocument;
    const texts = svgDoc.querySelectorAll("text");
    if (strokeOrderToggled) {
      texts.forEach((text) => {
        text.style.opacity = 0;
        setStrokeOrderToggled(false);
      });
    } else {
      texts.forEach((text) => {
        text.style.opacity = 1;
        setStrokeOrderToggled(true);
      });
    }
  }

  return (
    <div className="absolute left-0 top-0 z-10 flex h-full w-full items-start gap-1 bg-black p-1.5 opacity-0 group-hover:bg-opacity-10 group-hover:opacity-100">
      <button
        title="Replay"
        onClick={() => {
          !isAnimating ? playAnimation(svgKanji) : "";
        }}
        className={`z-50 rounded bg-white ${isAnimating ? "bg-opacity-15" : "bg-opacity-25 hover:bg-opacity-30"} p-2 text-white transition-transform`}
      >
        <img
          src={replayIcon}
          alt="Replay"
          className={`${isAnimating ? "opacity-25" : ""} size-4`}
        />
      </button>
      <button
        title="Toggle stroke order"
        onClick={() => {
          !isAnimating ? showStrokeOrder(svgKanji) : "";
        }}
        className={`z-50 rounded bg-white ${isAnimating ? "bg-opacity-15" : "bg-opacity-25 hover:bg-opacity-30"} p-2 text-white transition-transform`}
      >
        <img
          src={orderIcon}
          alt="Replay"
          className={`${isAnimating ? "opacity-25" : ""} size-4`}
        />
      </button>
    </div>
  );
}

Options.propTypes = {
  svgKanji: PropTypes.object,
  playAnimation: PropTypes.func,
  strokeOrderToggled: PropTypes.bool,
  setStrokeOrderToggled: PropTypes.func,
  isAnimating: PropTypes.bool,
};
