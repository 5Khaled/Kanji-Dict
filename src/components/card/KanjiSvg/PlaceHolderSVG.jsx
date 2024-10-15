import PropTypes from "prop-types";

export default function PlaceHolderSVG({ svgContent }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: svgContent }}
      className="absolute rounded color-scheme-light opacity-35
      [&>svg]:size-full [&_path]:stroke-white [&_text]:hidden"
    />
  );
}
PlaceHolderSVG.propTypes = {
  svgContent: PropTypes.string,
};
