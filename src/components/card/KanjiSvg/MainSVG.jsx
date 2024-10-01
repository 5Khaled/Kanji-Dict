import PropTypes from "prop-types";

export default function MainSVG({ svgSource, playAnimation, svgKanji }) {
  return (
    <>
      <object
        onLoad={() => {
          playAnimation(svgKanji);
        }}
        ref={svgKanji}
        className="w-full select-none rounded color-scheme-light"
        type="image/svg+xml"
        data={`/src/kanji_data/kanji_svgs/${svgSource}`}
      />
    </>
  );
}
MainSVG.propTypes = {
  svgSource: PropTypes.string,
  svgKanji: PropTypes.object,
  playAnimation: PropTypes.func,
};
