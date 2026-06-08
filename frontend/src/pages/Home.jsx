import { ArrowRight } from "lucide-react";

function Home({ selectedTrackId, tracks, onSelectTrack, onStart }) {
  return (
    <main className="interview-shell">
      <section className="start-panel">
        <div>
          <p className="eyebrow">signarol</p>
          <h1>Practice with a focused interview track</h1>
          <p className="intro-copy">
            Pick a track, answer timed questions, and get immediate scoring
            based on the expected concepts for each prompt.
          </p>
        </div>

        <div
          className="track-grid"
          role="radiogroup"
          aria-label="Interview track"
        >
          {tracks.map((track) => (
            <button
              className={`track-card ${selectedTrackId === track.id ? "selected" : ""}`}
              key={track.id}
              onClick={() => onSelectTrack(track.id)}
              role="radio"
              aria-checked={selectedTrackId === track.id}
              type="button"
            >
              <span>{track.questions.length} questions</span>
              <h2>{track.label}</h2>
              <p>{track.description}</p>
            </button>
          ))}
        </div>

        <button className="primary-action" onClick={onStart} type="button">
          Start interview
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </section>
    </main>
  );
}

export default Home;
