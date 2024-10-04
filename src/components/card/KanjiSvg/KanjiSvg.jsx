import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

import MainSVG from "./MainSVG.jsx";
import PlaceHolderSVG from "./PlaceHolderSVG.jsx";
import Options from "./Options.jsx";

import Loader from "../../../assets/Loader.jsx";

export default function KanjiSvg({ svgSource, KANJI }) {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const [strokeOrderToggled, setStrokeOrderToggled] = useState(false);

  const svgKanji = useRef();

  const SVG_FIGURE = useRef();

  useEffect(() => {
    svgSource ? setIsError(false) : setIsError(true);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 150);
  }, [svgSource]);

  function playAnimation(svgKanji) {
    setIsAnimating(true);
    SVG_FIGURE.current.style.visibility = "visible";

    const svgDoc = svgKanji.current.contentDocument;
    const paths = svgDoc.querySelectorAll("path");
    const texts = svgDoc.querySelectorAll("text");

    paths.forEach((path, index) => {
      path.style.transition = "none";
      path.style.stroke = "white";
      texts[index].style.opacity = 0;
      texts[index].style.fill = "white";
    });

    const strokeDuration = 0.4; // (Seconds)
    const animationDelay = 1000; // MS
    setTimeout(() => {
      //Animate each stroke
      paths.forEach((path, index) => {
        path.style.strokeDashoffset = path.getTotalLength();
        path.style.strokeDasharray = path.getTotalLength();
        setTimeout(() => {
          path.style.transition = `stroke-dashoffset ${strokeDuration}s ease ${index * strokeDuration}s`;
          path.style.strokeDashoffset = 0;
        }, animationDelay);
      });
    }, 0);

    // Show Stroke order number while each stroke being animated
    texts.forEach((text, index) => {
      setTimeout(
        () => {
          text.style.opacity = 1;
        },
        animationDelay + strokeDuration * animationDelay * index,
      );
    });

    // Hide Strokes order (<text> tags) after animation is finished
    setTimeout(
      () => {
        if (!strokeOrderToggled) {
          texts.forEach((text) => {
            text.style.opacity = 0;
          });
        }
        setIsAnimating(false);
      },
      animationDelay + strokeDuration * animationDelay * paths.length,
    );
  }

  return (
    <div className="group relative size-52 max-xs:size-40 max-2xs:size-11/12 m-auto rounded border-2 bg-black bg-opacity-35 p-3 flex items-center justify-center">
      {!isLoading && !isError && (
        <>
          <Options
            playAnimation={playAnimation}
            svgKanji={svgKanji}
            strokeOrderToggled={strokeOrderToggled}
            setStrokeOrderToggled={setStrokeOrderToggled}
            isAnimating={isAnimating}
          />
          <figure
            ref={SVG_FIGURE}
            className="invisible relative w-full aspect-square flex items-center justify-center [&>*]:size-full"
          >
            <MainSVG
              svgSource={svgSource}
              playAnimation={playAnimation}
              svgKanji={svgKanji}
            />
            <PlaceHolderSVG svgSource={svgSource} />
          </figure>
        </>
      )}
      {isError && !isLoading && (
        <figure className="size-full flex flex-col justify-evenly items-center">
          <span className="text-8xl leading-tight text-white">{KANJI}</span>
          <span className="text-white text-opacity-50">SVG Not Available!</span>
        </figure>
      )}
      {isLoading && <Loader className="" />}
    </div>
  );
}
KanjiSvg.propTypes = {
  svgSource: PropTypes.string,
  KANJI: PropTypes.string,
};
