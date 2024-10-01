import PropTypes from "prop-types";

export default function PlaceHolderSVG({ svgSource }) {
  function placeHolderStyles(obj) {
    obj.style.opacity = 1;

    const svgDoc = obj.contentDocument;

    const svg = svgDoc.querySelector("svg");
    svg.style.opacity = 0.35;
    const texts = svgDoc.querySelectorAll("text");
    texts.forEach((text) => {
      text.remove();
    });
    const paths = svgDoc.querySelectorAll("path");
    paths.forEach((path) => {
      path.style.stroke = "white";
    });
  }

  return (
    <object
      onLoad={(e) => {
        placeHolderStyles(e.target);
      }}
      className="absolute -z-[1] rounded opacity-0 color-scheme-light"
      type="image/svg+xml"
      data={`/src/kanji_data/kanji_svgs/${svgSource}`}
    />
  );
}
PlaceHolderSVG.propTypes = {
  svgSource: PropTypes.string,
};
