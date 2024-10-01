import PropTypes from "prop-types";
function KanjiMeanings({ Meanings }) {
  return (
    <div className="flex flex-col overflow-hidden rounded text-white">
      <header className="bg-white bg-opacity-80 px-10 py-2 font-bold text-black flex justify-center">
        Meanings
      </header>
      <div className="flex flex-wrap gap-0.5 bg-black bg-opacity-35 p-1">
        {Meanings &&
          Meanings.split(", ").map((m, i) => (
            <div
              className="flex-grow rounded bg-black bg-opacity-10 px-3 py-2 text-center"
              key={i}
            >
              {m}
            </div>
          ))}
        {!Meanings && <div className="flex-grow text-center">-</div>}
      </div>
    </div>
  );
}
KanjiMeanings.propTypes = {
  Meanings: PropTypes.string,
};

export default KanjiMeanings;
