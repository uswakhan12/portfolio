import { useState } from "react"

function Footer() {
  const [noteOpen, setNoteOpen] = useState(false)

  return (
    <footer className="border-t-2 border-blush-400/80 bg-blush-100/70 py-10 text-center">
      <p className="font-display text-3xl font-bold text-ink">Uswa Khan</p>
      <p className="mt-1 text-inksoft">
        AI · Computer Vision · ML & Deep Learning
      </p>
      <p className="mt-2 text-inksoft">
        © 2026 · Final Year B.S. Computer Science, NUST SEECS
      </p>
      <div className="mt-6 flex justify-center px-4">
        {noteOpen ? (
          <div className="note-card flex flex-col items-start text-left" role="dialog" aria-label="A little note">
            <p className="text-4xl leading-none" aria-hidden="true">😲</p>
            <p className="mt-2 text-ink">
              Wow, I didn’t think you would come this far. Hire me already.
            </p>
            <a href="mailto:uswaakhan03@gmail.com" className="sketch-btn sketch-btn-fill mt-4">
              say hi
            </a>
            <button type="button" className="sketch-btn mt-3" onClick={() => setNoteOpen(false)}>
              tuck it away
            </button>
          </div>
        ) : (
          <button type="button" className="sticky-tab" onClick={() => setNoteOpen(true)}>
            psst…
          </button>
        )}
      </div>
      <p className="mt-6">
        <a href="mailto:uswaakhan03@gmail.com" className="font-bold text-blush-700">
          uswaakhan03@gmail.com
        </a>
      </p>
    </footer>
  )
}

export default Footer
