import { useEffect, useState } from "react"

const Heart = ({ className = "h-6 w-6" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      d="M12 20s-7-4.4-7-9.2A3.8 3.8 0 0 1 12 8a3.8 3.8 0 0 1 7 2.8C19 15.6 12 20 12 20Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
  </svg>
)

const Star = ({ className = "h-6 w-6" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      d="m12 3 2.2 6.2L21 10l-5 4.2L17.4 21 12 17.4 6.6 21 8 14.2 3 10l6.8-.8Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
)

const doodles = [
  { top: "18%", left: "4%", delay: "0s", rotate: "-12deg", kind: "heart" },
  { top: "42%", right: "3%", delay: "1.2s", rotate: "10deg", kind: "star" },
  { top: "68%", left: "6%", delay: "0.6s", rotate: "8deg", kind: "star" },
  { top: "88%", right: "7%", delay: "1.8s", rotate: "-8deg", kind: "heart" }
]

const gifts = [
  { src: "/gifts/gift-4.jpg", top: "10.5rem", left: "0.45rem", side: "left", drop: true },
  { src: "/gifts/gift-2.jpg", top: "36%", right: "1%", side: "right" },
  { src: "/gifts/gift-3.jpg", top: "57%", left: "2%", side: "left" },
  { src: "/gifts/gift-1.jpg", top: "79%", right: "1.5%", side: "right" }
]

const whispers = [
  "hi, you found the doodle",
  "the model sees you too",
  "still sketching, still shipping",
  "3rd in the world. still pink.",
  "islamabad says hello"
]

let whisperIndex = 0

function Surprises() {
  const [bits, setBits] = useState([])
  const [sparks, setSparks] = useState([])
  const [whisper, setWhisper] = useState(null)
  const [plane, setPlane] = useState(false)
  const [openGift, setOpenGift] = useState(null)

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return undefined

    const planeTimer = window.setTimeout(() => setPlane(true), 1600)
    const onBurst = (event) => {
      const x = event.detail?.x ?? window.innerWidth / 2
      const y = event.detail?.y ?? 180
      const stamp = Date.now()
      const next = Array.from({ length: 12 }, (_, index) => {
        const angle = (Math.PI * 2 * index) / 12 + Math.random() * 0.4
        const distance = 50 + Math.random() * 70
        return {
          id: `${stamp}-${index}`,
          x,
          y,
          dx: Math.cos(angle) * distance,
          dy: Math.sin(angle) * distance - 20,
          kind: index % 2 === 0 ? "heart" : "star"
        }
      })
      setBits((current) => [...current, ...next].slice(-36))
      setWhisper({
        id: stamp,
        x,
        y: y - 28,
        text: whispers[whisperIndex % whispers.length]
      })
      whisperIndex += 1
      window.setTimeout(() => {
        setBits((current) => current.filter((bit) => !String(bit.id).startsWith(String(stamp))))
        setWhisper((current) => (current?.id === stamp ? null : current))
      }, 950)
    }

    let last = 0
    const onMove = (event) => {
      const now = Date.now()
      if (now - last < 160) return
      last = now
      const id = now
      setSparks((current) => [...current, { id, x: event.clientX, y: event.clientY }].slice(-10))
      window.setTimeout(() => {
        setSparks((current) => current.filter((spark) => spark.id !== id))
      }, 700)
    }

    window.addEventListener("sketch-burst", onBurst)
    window.addEventListener("pointermove", onMove)
    return () => {
      window.clearTimeout(planeTimer)
      window.removeEventListener("sketch-burst", onBurst)
      window.removeEventListener("pointermove", onMove)
    }
  }, [])

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-20 hidden md:block" aria-hidden="true">
        {doodles.map((doodle) => (
          <span
            key={`${doodle.top}-${doodle.kind}`}
            className="doodle text-blush-600"
            style={{
              top: doodle.top,
              left: doodle.left,
              right: doodle.right,
              animationDelay: doodle.delay,
              "--r": doodle.rotate
            }}
          >
            {doodle.kind === "heart" ? <Heart /> : <Star />}
          </span>
        ))}
      </div>
      {plane && (
        <span className="paper-plane" aria-hidden="true">
          <span className="plane-rig text-blush-700">
            <span className="plane-craft">
              <svg viewBox="0 0 64 32" className="plane-body" aria-hidden="true">
                <path d="M2 16 62 2 28 30 24 18Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <path d="M24 18 62 2" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="plane-hanger">
                <span className="plane-string" />
                <span className="plane-note">Hire Me!</span>
              </span>
            </span>
          </span>
        </span>
      )}

      {bits.map((bit) => (
        <span
          key={bit.id}
          className="burst-bit text-blush-700"
          style={{ left: bit.x, top: bit.y, "--dx": `${bit.dx}px`, "--dy": `${bit.dy}px` }}
        >
          {bit.kind === "heart" ? <Heart className="h-5 w-5" /> : <Star className="h-5 w-5" />}
        </span>
      ))}

      {whisper && (
        <span className="whisper" style={{ left: whisper.x, top: whisper.y }}>
          {whisper.text}
        </span>
      )}

      {sparks.map((spark) => (
        <span key={spark.id} className="spark" style={{ left: spark.x, top: spark.y }} />
      ))}

      {gifts.map((gift, index) => (
        <div
          key={gift.src}
          className="gift-spot"
          style={{ top: gift.top, left: gift.left, right: gift.right }}
        >
          {openGift === index && (
            <img
              src={gift.src}
              alt=""
              className={`gift-photo ${gift.side === "right" ? "gift-photo-right" : "gift-photo-left"}${gift.drop ? " gift-photo-drop" : ""}`}
            />
          )}
          <button
            type="button"
            className="gift-box"
            aria-label={openGift === index ? "Close surprise photo" : "Open a tiny surprise"}
            aria-expanded={openGift === index}
            onClick={() => setOpenGift((current) => (current === index ? null : index))}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
              <rect x="3" y="10" width="18" height="11" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
              <path d="M3 14.5h18M12 10v11" fill="none" stroke="currentColor" strokeWidth="1.7" />
              <path d="M12 10c-1.6-3.2-5.2-3.4-5.2-.8S10 10 12 10s5.2-2.6 5.2-.8S13.6 6.8 12 10Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      ))}

    </>
  )
}

export default Surprises
