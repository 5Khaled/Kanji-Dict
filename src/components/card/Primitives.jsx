import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./styles/Primitives.css";

function Primitives({ primitives, kanji, type }) {
  const [showToggleButton, setShowToggleButton] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [kanjis, setKanjis] = useState(null);

  useEffect(() => {
    if (primitives) {
      setToggled(false);
      primitives.length > 0
        ? setKanjis(primitives.slice(0, 7))
        : setKanjis([kanji]);
      primitives.length > 8
        ? setShowToggleButton(true)
        : setShowToggleButton(false);
    }
  }, [primitives, kanji]);
  function handleToggle() {
    if (toggled) {
      setKanjis(primitives.slice(0, 7));
      setToggled(false);
    } else {
      setKanjis(primitives);
      setToggled(true);
    }
  }

  return (
    <main className="flex flex-col gap-2">
      <header className="text-nowrap font-bold text-white">
        {type === "in" ? "Primitive in: " : "Primitives: "}(
        {kanjis ? primitives.length : "0"})
      </header>
      {kanjis && (
        <section className="scrollbar-hide gap-2 max-h-64 grid grid-cols-[repeat(4,auto)] content-start overflow-x-hidden pr-1 text-white [&>*]:size-14">
          {kanjis.map((p, i) => (
            <Link
              to={`/kanji/${p}`}
              className={`group ${
                p === kanji ? "bg-white" : "bg-black"
              } flex cursor-pointer items-center justify-center rounded border border-transparent bg-opacity-35 text-2xl can-hover:hover:border-white`}
              key={i}
            >
              <div className="transition-transform can-hover:group-hover:scale-125">
                {p}
              </div>
            </Link>
          ))}
          {showToggleButton && (
            <button
              onClick={handleToggle}
              className="flex cursor-pointer items-center justify-center rounded bg-white bg-opacity-30 text-sm transition-all hover:bg-opacity-35 active:scale-95"
            >
              <div className="py-1.5">
                {toggled ? (
                  "Less"
                ) : (
                  <div>
                    More <br />({primitives.length - 7})
                  </div>
                )}
              </div>
            </button>
          )}
        </section>
      )}
      {!kanjis && (
        <div className="text-white text-opacity-35 pl-2 select-none">
          - None
        </div>
      )}
    </main>
  );
}
Primitives.propTypes = {
  primitives: PropTypes.array,
  kanji: PropTypes.string,
  type: PropTypes.string,
};

export default Primitives;
