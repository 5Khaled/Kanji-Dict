import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import ALL_KANJI from "../../kanji_data/ALL_KANJI.json";
import KANJI_RADICALS from "../../kanji_data/composition.json";
import VALID_SVGS from "../../kanji_data/valid_svgs.json";

import KanjiSvg from "./KanjiSvg/KanjiSvg";
import Primitives from "./Primitives";
import KanjiMeanings from "./Meanings";
import Tags from "./Tags";
import Readings from "./Readings";
// import Examples from "./Examples";

const KanjiCard = () => {
  const { id } = useParams();
  const KANJI = id[0];

  const [kanjiData, setKanjiData] = useState(null);

  useEffect(() => {
    const VALID_KANJIS = VALID_SVGS.kanjis.split("");
    const SVG_SOURCE = VALID_KANJIS.includes(KANJI)
      ? `${KANJI.codePointAt(0).toString(16).padStart(5, "0")}.svg`
      : null;

    setKanjiData({
      ...ALL_KANJI[KANJI],
      ...KANJI_RADICALS[KANJI],
      svg: SVG_SOURCE,
    });
  }, [KANJI]);

  return (
    kanjiData && (
      <main className="flex min-h-[calc(100dvh_-_60px)] flex-col items-center max-sm:items-stretch p-7">
        <div className="relative top-5 grid grid-cols-[0fr_1fr] gap-5 rounded border border-white border-opacity-35 p-5 backdrop-blur-md max-sm:grid-cols-1">
          <aside className="flex flex-col max-sm:flex-row max-xs:flex-col gap-3 ">
            <section className="flex flex-col gap-3">
              <KanjiSvg svgSource={kanjiData.svg} KANJI={KANJI} />
              <Tags tags={{ jlpt: kanjiData.jlpt, grade: kanjiData.kgrade }} />
            </section>
            <section className="flex flex-col gap-3 self-start">
              <Readings readings={kanjiData.onyomi_ja} type="on" />
              <Readings readings={kanjiData.kunyomi_ja} type="kun" />
            </section>
          </aside>
          <section className="flex flex-col items-start">
            <main className="flex flex-col gap-3 max-xs:self-stretch">
              <KanjiMeanings Meanings={kanjiData.kmeaning} />
              {/* <Examples examples={kanjiData.examples} /> */}
              <div className="flex flex-wrap gap-5">
                <Primitives
                  primitives={kanjiData.in}
                  kanji={KANJI}
                  type="out"
                />
                <Primitives
                  primitives={kanjiData.out}
                  kanji={KANJI}
                  type="in"
                />
              </div>
            </main>
          </section>
        </div>
      </main>
    )
  );
};
export default KanjiCard;
