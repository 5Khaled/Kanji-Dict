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
      // min-h-[calc(100dvh_-_60px)]
      <div className=" flex flex-col items-center max-sm:items-stretch p-7">
        <main className="relative p-5 gap-3 grid grid-cols-[0fr_1fr] grid-rows-[repeat(3,auto)] items-start rounded border border-white border-opacity-35 backdrop-blur-md">
          <section className="col-start-1 row-start-1 row-span-2 max-xs:row-start-2 max-xs:col-span-2 max-xs:row-span-1 flex flex-col max-xs:flex-row max-2xs:flex-col max-2xs:items-stretch gap-3">
            <KanjiSvg svgSource={kanjiData.svg} KANJI={KANJI} />
            <Tags
              tags={{
                jlpt: kanjiData.jlpt,
                grade: kanjiData.kgrade,
                strokes: kanjiData.kstroke,
                radical: kanjiData.radical,
              }}
            />
          </section>
          <section className="max-xs:col-start-1 max-xs:row-start-1 max-xs:col-span-2">
            <KanjiMeanings Meanings={kanjiData.kmeaning} />
          </section>
          <section className="col-start-1 row-start-3 max-xs:col-span-2 flex flex-col gap-3">
            <Readings readings={kanjiData.onyomi_ja} type="on" />
            <Readings readings={kanjiData.kunyomi_ja} type="kun" />
          </section>
          <section className="col-start-2 row-span-2 max-xs:col-start-1 max-xs:col-span-2 flex flex-col items-start">
            <main className="flex flex-col gap-3 max-sm:self-stretch">
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
        </main>
      </div>
    )
  );
};
export default KanjiCard;
