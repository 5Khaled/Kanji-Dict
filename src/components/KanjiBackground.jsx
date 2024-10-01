import { useEffect, useRef } from "react";
import KanjiData from "../kanji_data/ALL_KANJI.json";

// import "./KanjiBackground.css";

const KanjiBackground = () => {
  let kanjis = Object.values(KanjiData).map((kanji) => {
    return kanji.kanji;
  });

  function fisherYatesShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

  kanjis = fisherYatesShuffle(kanjis).slice(0, 150);

  const kanjiContainer = useRef(null);

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    [...kanjiContainer.current.children].map((e) => {
      const size = Math.random() * 30 + 20; // Random size between 20px and 60px
      e.style.fontSize = `${size}px`;
      e.style.opacity = 1; // Opacity between 0.3 and 1
      e.style.opacity = Math.random() * 0.7 + 0.3; // Opacity between 0.3 and 1
      // e.style.transform = `rotate(${Math.random() * 360}deg)`;
      e.style.left = `${Math.random() * 100}%`;
      e.style.animationDuration = `${getRandomNumber(7, 15)}s`;
      e.style.animationDelay = `${getRandomNumber(1, 10)}s`;
    });
  }, []);

  return (
    <div
      ref={kanjiContainer}
      className="fixed top-0 -z-20 h-full w-full overflow-hidden bg-black before:absolute before:h-dvh before:w-full before:bg-emerald-500 before:bg-opacity-65 before:text-white before:backdrop-blur-[1px] before:content-['_']"
    >
      {kanjis.map((e, i) => (
        <div
          className={`absolute -top-[10%] -z-10 inline-block animate-[fall_linear_infinite] select-none text-white`}
          key={i}
        >
          {e}
        </div>
      ))}
    </div>
  );
};

export default KanjiBackground;
