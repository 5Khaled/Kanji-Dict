// ..
function About() {
  return (
    <div className="max-w-3xl min-h-outlet-dvh flex flex-col gap-16 mx-auto p-10">
      <section className="flex flex-col gap-3">
        <h2 className="text-white text-3xl font-bold">About</h2>
        <p className="text-white opacity-85 text-xl">
          This Kanji Dictionary is a resource for learning Kanji characters,
          offering information on meanings, readings, stroke order, and JLPT
          levels
        </p>
      </section>
      <section className="flex flex-col gap-3">
        <h2 className="text-white text-3xl font-bold">Credits</h2>
        <p className="text-white opacity-85 text-xl mb-3">
          The data used in this Kanji Dictionary comes from various open-source
          projects:
        </p>
        <ul className="flex flex-col gap-2 text-white opacity-85 text-lg">
          <li>
            <strong className="underline can-hover:hover:text-opacity">
              <a href="https://kanjivg.tagaini.net/">KanjiVG:</a>
            </strong>
            &nbsp;Provides stroke order data for Kanji characters. Learn more.
            Released under the Creative Commons Attribution-Share Alike 3.0
            licence.
          </li>
          <li>
            <strong className="underline can-hover:hover:text-opacity">
              <a href="https://www.tanos.co.uk/jlpt/">JLPT Levels:</a>
            </strong>
            &nbsp;Information on JLPT levels from Tanos.
          </li>
          <li>
            <strong className="underline can-hover:hover:text-opacity">
              <a href="https://github.com/kanjialive/kanji-data-media/tree/master/language-data">
                Kanji Data:
              </a>
            </strong>
            &nbsp;Sourced from Kanji alive. Licensed under Creative Commons
            Attribution 4.0.
          </li>
          <li>
            <strong className="underline can-hover:hover:text-opacity">
              <a href="https://github.com/gabor-kovacs/the-kanji-map/blob/main/data/composition.json">
                Kanji Composition:
              </a>
            </strong>
            &nbsp;Data from the Kanji Map.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default About;
