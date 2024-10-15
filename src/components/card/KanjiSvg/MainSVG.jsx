import PropTypes from "prop-types";
import { useEffect } from "react";

export default function MainSVG({ svgContent, playAnimation, SvgHolder }) {
  useEffect(() => {
    playAnimation(SvgHolder);
  }, [playAnimation, SvgHolder]);
  return (
    svgContent && (
      <div
        ref={SvgHolder}
        dangerouslySetInnerHTML={{ __html: svgContent }}
        className={`
          w-full select-none rounded color-scheme-light z-10
          [&>svg]:size-full [&_path]:stroke-white [&_text]:fill-slate-300 [&_text]:text-2xs [&_text]:hidden`}
      />
    )
  );
}
MainSVG.propTypes = {
  svgContent: PropTypes.string,
  SvgHolder: PropTypes.object,
  playAnimation: PropTypes.func,
};
