import PropTypes from "prop-types";

function KanjiTags({ tags }) {
  const Titles = {
    jlpt: "JLPT",
    grade: "Grade",
  };

  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(tags).map(
        ([key, value], index) =>
          tags[key] && (
            <div
              key={index}
              className="text-white text-sm rounded overflow-hidden flex"
            >
              <div className="bg-white bg-opacity-80 text-black font-bold px-2 py-1">
                {Titles[key] || key}
              </div>
              <div className="bg-black bg-opacity-25 px-2 flex items-center">
                {value}
              </div>
            </div>
          ),
      )}
    </div>
  );
}

KanjiTags.propTypes = {
  tags: PropTypes.shape({
    jlpt: PropTypes.string,
    grade: PropTypes.string,
  }),
};

export default KanjiTags;
