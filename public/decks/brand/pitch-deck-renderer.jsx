// Savoca Studio · Pitch Deck renderer
// Reads window.DECK_ID and renders that vertical's deck.
// Mount target: <div id="deck-root"></div>

(() => {
  const id = window.DECK_ID;
  const data = window.DeckContent[id];
  if (!data) {
    document.getElementById("deck-root").innerHTML =
      `<div style="padding:60px;font-family:system-ui">Deck not found: ${id}</div>`;
    return;
  }
  const PD = window.PitchDeck;
  const v = data.vertical;

  const Deck = () => (
    <>
      <PD.Cover         vertical={v} title={data.cover.title} />
      <PD.Hook          vertical={v} num={2}  {...data.hook} />
      <PD.Problem       vertical={v} num={3}  title={data.problem.title} sub={data.problem.sub} points={data.problem.points} />
      <PD.System        vertical={v} num={4} />
      <PD.LeakMap       vertical={v} num={5} />
      <PD.VerticalLeaks vertical={v} num={6}  title={data.verticalLeaks.title} leaks={data.verticalLeaks.leaks} />
      <PD.Principles    vertical={v} num={7} />
      <PD.Deliverables  vertical={v} num={8}  items={data.deliverables} />
      <PD.LiveExamples  vertical={v} num={9}  examples={data.examples} />
      <PD.Pricing       vertical={v} num={10} recommended={data.pricingRec} />
      <PD.About         vertical={v} num={11} />
      <PD.Close         vertical={v} num={12} />
    </>
  );

  ReactDOM.createRoot(document.getElementById("deck-root")).render(<Deck />);
  document.title = `Savoca Studio · ${v} · Pitch Deck`;
})();
