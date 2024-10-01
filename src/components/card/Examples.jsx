import PropTypes from "prop-types";

export default function Examples({ examples }) {
  const regex = /(.*)（(.*)）/;
  return (
    <section className="flex flex-col gap-1">
      <header className="text-nowrap font-bold text-white">Examples: </header>
      {examples && (
        <div className="flex flex-wrap gap-2">
          {JSON.parse(examples)
            .slice(0, 3)
            .map((example, index) => {
              const match = example[0].match(regex);
              return (
                <div
                  key={index}
                  className="bg-black bg-opacity-15 text-center overflow-hidden rounded gap-1 p-1 flex flex-col justify-between"
                  title={example[1]}
                >
                  <span className="px-3 text-sm text-white text-opacity-80 rounded">
                    {match[2]}
                  </span>
                  <div className="px-3  text-white text-2xl text-center">
                    {match[1]}
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </section>
  );
}

Examples.propTypes = {
  examples: PropTypes.string,
};
