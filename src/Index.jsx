import Search from "./components/Search";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Index() {
  return (
    <div className="min-h-outlet-dvh flex flex-col justify-center">
      <h1 className="text-[clamp(1.25rem,0.609rem+4.1026vw,2.25rem)] max-w-xl mb-10 mx-7 self-center text-center font-extrabold text-white drop-shadow-lg">
        Type a Kanji to see its details and readings.
      </h1>
      <section className="flex flex-col items-center gap-5">
        <Search />
        <RandomKanji />
      </section>
    </div>
  );
}

export default Index;

function RandomKanji() {
  const [randomKanji, setRandomKanji] = useState(null);

  useEffect(() => {
    const fetchRandomKanji = async () => {
      try {
        const response = await fetch("https://kanji.vwh.sh/random");
        if (response.ok) {
          const kanji = await response.text(); // Since the response is just a kanji character
          setRandomKanji(kanji);
        }
      } catch (err) {
        console.error("Failed to load a Random Kanji");
      }
    };
    fetchRandomKanji();
  }, []);

  return (
    <>
      <Link
        className="group rounded-lg border border-white border-opacity-40 bg-transparent backdrop-blur-lg transition-scale duration-300 hover:border-opacity-70 active:scale-95"
        to={`/kanji/${randomKanji}`}
      >
        <img
          className="size-10 opacity-40 p-1.5 transition-opacity duration-300 group-hover:opacity-70"
          src="/dice.svg"
          alt=""
        />
      </Link>
    </>
  );
}
