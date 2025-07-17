import { useState } from "react"

const JourneyPage = () => {
  const [popup, setPopup] = useState(null)

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden font-sans">

      {/* POPUP MODAL */}
      {popup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setPopup(null)}
        >
          <div
            className="bg-white text-black rounded-xl p-6 max-w-md w-full shadow-xl space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={popup.src}
              alt={popup.alt}
              className="rounded-lg w-full h-56 object-cover"
            />
            <h3 className="text-lg font-bold">{popup.caption}</h3>
            <p className="text-sm leading-relaxed">{popup.description}</p>
          </div>
        </div>
      )}

      {/* SCENE 1 – OPENING QUOTE */}
      <div className="text-center pt-32 pb-20 px-6 animate-fade-in">
        <p className="text-xl italic opacity-70">“Dalam diam... semuanya bermula.”</p>
      </div>

      {/* SCENE 2 – IMAGE */}
      <div className="w-full max-w-md mx-auto mb-20">
        <img
          src="/img/scene1.jpg"
          alt="Scene 1"
          className="rounded-xl shadow-lg w-full object-cover aspect-[3/4] cursor-pointer"
          onClick={() => setPopup({
            src: "/img/scene1.jpg",
            alt: "Scene 1",
            caption: "Awal Perjalanan",
            description: "Sebuah permulaan dalam gelap, mencari arah dalam keraguan."
          })}
        />
      </div>

      {/* SCENE 3 – TEKS TRANSISI */}
      <div className="text-center text-lg italic opacity-80 my-32 animate-fade-in">
        <p>Langkah pertama bukan tanpa ragu.</p>
      </div>

      {/* SCENE 4 – TITLE IN THE MIDDLE */}
      <div className="text-center my-48">
        <h1 className="text-4xl font-bold tracking-wider mb-3">SEBUAH PERJALANAN</h1>
        <p className="text-sm italic opacity-60">Bab I – Dalam Gelap, Aku Menemukan Cahaya</p>
      </div>

      {/* SCENE 5 – IMAGE */}
      <div className="w-full max-w-md mx-auto mb-20">
        <img
          src="/img/scene2.jpg"
          alt="Scene 2"
          className="rounded-xl shadow-lg w-full object-cover aspect-[9/16] cursor-pointer"
          onClick={() => setPopup({
            src: "/img/scene2.jpg",
            alt: "Scene 2",
            caption: "Langkah Kedua",
            description: "Dengan satu cahaya samar, ia terus maju."
          })}
        />
      </div>

      {/* SCENE 6 – SMALL TEXT */}
      <p className="text-center text-sm italic opacity-70 my-16">...tetap melangkah...</p>

      {/* TAMBAHKAN LAGI SESUKAMU */}
      {/* Contoh: Gambar + teks kecil, teks besar, atau judul bab berikutnya */}
    </div>
  )
}

export default JourneyPage
