import Search from "./components/Search";
import { Link } from "react-router-dom";
import KanjiData from "./kanji_data/ALL_KANJI.json";
import { useEffect, useState } from "react";

function Index() {
  const [randomKanji, setRandomKanji] = useState(null);
  useEffect(() => {
    const getRandomElement = (kanjis) => {
      const arr = Object.values(kanjis);
      const randomIndex = Math.floor(Math.random() * arr.length);

      return arr[randomIndex].kanji;
    };
    setRandomKanji(getRandomElement(KanjiData));
  }, []);

  return (
    <div className="flex h-full flex-col justify-center ">
      <h1 className="mb-10 w-1/2 self-center text-center text-4xl font-extrabold text-white [text-shadow:_0_0_25px_rgb(0_0_0_/_50%)]">
        Type a Kanji to see its details and readings.
      </h1>
      <section className="flex flex-col items-center gap-2">
        <Search />
        {randomKanji && (
          <Link
            className="group rounded-lg border border-white border-opacity-40 bg-transparent backdrop-blur-lg transition-all duration-300 hover:border-opacity-70 active:scale-95"
            to={`/kanji/${randomKanji}`}
          >
            <img
              className="size-10 opacity-40 p-1.5 transition-opacity duration-300 group-hover:opacity-70"
              src="/src/assets/dice.svg"
              alt=""
            />
          </Link>
        )}
      </section>
    </div>
  );
}

export default Index;
