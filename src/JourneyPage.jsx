import { useState } from "react";
import MemoryFlashback1 from "./MemoryFlashback1";
import MemoryFlashback2 from "./MemoryFlashback2";
import MemoryFlashback3 from "./MemoryFlashback3";
import MemoryFlashback4 from "./MemoryFlashback4";
import MemoryFlashback5 from "./MemoryFlashback5";
import MemoryFlashback6 from "./MemoryFlashback6";
const JourneyPage = () => {
  const [popup, setPopup] = useState(null);

  return (
    <div className=" text-white font-sans overflow-x-hidden">
      <div className="bg-white">
        <div>
          <div className="text-black text-center pt-20 pb-20 animate-fade-in">
            <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in">
              Makasih wan...
            </p>
          </div>
          <div className="bg-black text-center pt-[130px] pb-[130px] animate-fade-in mb-[400px]"></div>
          <div className="w-full mb-[500px] border-y-[5px] border-black">
            <img
              src="/img/q.jpg"
              alt="Awal Perjalanan"
              className="w-full object-cover aspect-[4/4] cursor-pointer transition-transform duration-300 hover:scale-[99%]"
              onClick={() =>
                setPopup({
                  src: "/img/q.jpg",
                  alt: "Awal Perjalanan",
                  caption: "Awal yang sunyi...",
                  description:
                    "Semuanya bermula dari langkah kecil, dalam gelap yang menggantung.",
                })
              }
            />
          </div>
          <div className="w-full mb-[500px] border-y-[5px] border-black">
            <img
              src="/img/q.jpg"
              alt="Awal Perjalanan"
              className="w-full object-cover aspect-[4/4] cursor-pointer transition-transform duration-300 hover:scale-[99%]"
              onClick={() =>
                setPopup({
                  src: "/img/q.jpg",
                  alt: "Awal Perjalanan",
                  caption: "Awal yang sunyi...",
                  description:
                    "Semuanya bermula dari langkah kecil, dalam gelap yang menggantung.",
                })
              }
            />
          </div>
          <div className="w-full mb-[500px] border-y-[5px] border-black">
            <img
              src="/img/q.jpg"
              alt="Awal Perjalanan"
              className="w-full object-cover aspect-[4/4] cursor-pointer transition-transform duration-300 hover:scale-[99%]"
              onClick={() =>
                setPopup({
                  src: "/img/q.jpg",
                  alt: "Awal Perjalanan",
                  caption: "Awal yang sunyi...",
                  description:
                    "Semuanya bermula dari langkah kecil, dalam gelap yang menggantung.",
                })
              }
            />
          </div>
          <div className="bg-black text-center pt-[350px] pb-[350px] animate-fade-in mb-[700px]"></div>
          <div className="text-black text-center pt-20 pb-20 animate-fade-in mb-[200px]">
            <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in">
              Buat waktunya...
            </p>
          </div>
          <div className="w-full mb-[150px] border-y-[5px] border-black">
            <img
              src="/img/q.jpg"
              alt="Awal Perjalanan"
              className="w-full object-cover aspect-[4/4] cursor-pointer transition-transform duration-300 hover:scale-[99%]"
              onClick={() =>
                setPopup({
                  src: "/img/q.jpg",
                  alt: "Awal Perjalanan",
                  caption: "Awal yang sunyi...",
                  description:
                    "Semuanya bermula dari langkah kecil, dalam gelap yang menggantung.",
                })
              }
            />
          </div>

          <div className="text-black text-center pt-20 pb-20 animate-fade-in mb-[150px]">
            <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in">
              Kami...
            </p>
          </div>

          <div className="w-full mb-[150px] border-y-[5px] border-black">
            <img
              src="/img/q.jpg"
              alt="Awal Perjalanan"
              className="w-full object-cover aspect-[4/4] cursor-pointer transition-transform duration-300 hover:scale-[99%]"
              onClick={() =>
                setPopup({
                  src: "/img/q.jpg",
                  alt: "Awal Perjalanan",
                  caption: "Awal yang sunyi...",
                  description:
                    "Semuanya bermula dari langkah kecil, dalam gelap yang menggantung.",
                })
              }
            />
          </div>

          <div className="text-black text-center pt-20 pb-20 animate-fade-in mb-[150px]">
            <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
              Kami gabisa ngasi apa2...Kami hanya bisa berharap kau tetap hidup
              sampai kita ketemu lagi di ketidaksengajaan lainya.
            </p>
          </div>

          <div className="w-full mb-[150px] border-y-[5px] border-black">
            <img
              src="/img/q.jpg"
              alt="Awal Perjalanan"
              className="w-full object-cover aspect-[4/4] cursor-pointer transition-transform duration-300 hover:scale-[99%]"
              onClick={() =>
                setPopup({
                  src: "/img/q.jpg",
                  alt: "Awal Perjalanan",
                  caption: "Awal yang sunyi...",
                  description:
                    "Semuanya bermula dari langkah kecil, dalam gelap yang menggantung.",
                })
              }
            />
          </div>

          <div className="text-black text-center pt-20 pb-20 animate-fade-in mb-[150px]">
            <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
              Siapa...?
            </p>
          </div>

          <div className="w-full mb-[250px] border-y-[5px] border-black">
            <img
              src="/img/q.jpg"
              alt="Awal Perjalanan"
              className="w-full object-cover aspect-[4/4] cursor-pointer transition-transform duration-300 hover:scale-[99%]"
              onClick={() =>
                setPopup({
                  src: "/img/q.jpg",
                  alt: "Awal Perjalanan",
                  caption: "Awal yang sunyi...",
                  description:
                    "Semuanya bermula dari langkah kecil, dalam gelap yang menggantung.",
                })
              }
            />
          </div>

          <div className="text-black text-center pt-20 pb-20 animate-fade-in mb-[50px]">
            <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
              Kau sekarang?
            </p>
          </div>

          <div className="w-full mb-[200px] border-y-[5px] border-black">
            <img
              src="/img/q.jpg"
              alt="Awal Perjalanan"
              className="w-full object-cover aspect-[4/4] cursor-pointer transition-transform duration-300 hover:scale-[99%]"
              onClick={() =>
                setPopup({
                  src: "/img/q.jpg",
                  alt: "Awal Perjalanan",
                  caption: "Awal yang sunyi...",
                  description:
                    "Semuanya bermula dari langkah kecil, dalam gelap yang menggantung.",
                })
              }
            />
          </div>

          <div className="text-black text-center pt-20 pb-20 animate-fade-in mb-[200px]">
            <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
              Ah.
            </p>
          </div>

          <div className="text-black text-center pt-20 animate-fade-in">
            <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
              Ya.
            </p>
          </div>
          <MemoryFlashback1 />
          <div className="text-black text-center pt-20 animate-fade-in">
            <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
              Aku adalah...
            </p>
          </div>
          <MemoryFlashback2 />
          <div className="text-black text-center pt-20 animate-fade-in mb-[600px]">
            <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
              Mantan Anak Teknik UM PTI,
            </p>
          </div>
          <MemoryFlashback3 />
          <div className="text-black text-center pt-20 animate-fade-in mb-[600px]">
            <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
              BUDIMAN SETIAWAN,
            </p>
          </div>
          <div className="bg-gradient-to-b from-white via-gray-400 to-gray-800 ">
            <MemoryFlashback4 />
            <MemoryFlashback5 />
            <MemoryFlashback6 />
            <div className="bg-black text-center pt-[75px] pb-[75px] animate-fade-in "></div>
          </div>

          <div className="bg-gray-800">
            <div className="text-white text-center pt-[700px] pb-[900px] animate-fade-in">
              <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
                "Kelulusan Iwan Dari Um"
              </p>
            </div>

            <div className="text-white text-center pt-20 animate-fade-in">
              <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
                Anak PTI,
              </p>
            </div>
            <div className="w-full  border-y-[5px] border-black">
              <img
                src="/img/q.jpg"
                alt="Awal Perjalanan"
                className="w-full object-cover aspect-[4/4] cursor-pointer transition-transform duration-300 hover:scale-[99%]"
                onClick={() =>
                  setPopup({
                    src: "/img/q.jpg",
                    alt: "Awal Perjalanan",
                    caption: "Awal yang sunyi...",
                    description:
                      "Semuanya bermula dari langkah kecil, dalam gelap yang menggantung.",
                  })
                }
              />
            </div>
            <div className="text-white text-center pb-[400px] animate-fade-in">
              <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
                Iwan.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* === Image Modal === */}
      {popup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          onClick={() => setPopup(null)}
        >
          <div
            className="bg-white text-gray-800 max-w-sm w-full rounded-sm shadow-2xl p-4 space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={popup.src}
              alt={popup.alt}
              className="w-full h-56 object-cover rounded"
            />
            <h3 className="text-lg font-semibold">{popup.caption}</h3>
            <p className="text-sm leading-relaxed">{popup.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default JourneyPage;

// <div className="bg-black">
//   {/* === Opening Dramatic Text === */}
//   <div className="text-center pt-32 pb-20 px-6 animate-fade-in">
//     <p className="text-xl italic opacity-70">
//       “Dalam diam... semuanya bermula.”
//     </p>
//   </div>

//   {/* === First Image === */}
//   <div className="w-full max-w-md mx-auto mb-20">
//     <img
//       src="/img/q.jpg"
//       alt="Awal Perjalanan"
//       className="rounded-sm shadow-lg w-full object-cover aspect-[3/4] cursor-pointer hover:scale-105 transition-transform duration-300"
//       onClick={() =>
//         setPopup({
//           src: "/img/q.jpg",
//           alt: "Awal Perjalanan",
//           caption: "Awal yang sunyi...",
//           description:
//             "Semuanya bermula dari langkah kecil, dalam gelap yang menggantung.",
//         })
//       }
//     />
//   </div>
// </div>

//   <div className="text-black text-center pt-32 pb-32 px-6 animate-fade-in mb-[200px]">
//           <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in">
//     Dalam gelap…
//   </p>
//   </div>
// <div>
//   {/* === Text Imbuhan === */}
//   <p className="bg-black text-center text-sm italic opacity-60 my-16 animate-fade-in">
//     ...masih samar, tapi terasa...
//   </p>

//   {/* === Second Image === */}
//   <div className="w-full max-w-md mx-auto mb-20">
//     <img
//       src="/img/q.jpg"
//       alt="Langkah Kedua"
//       className="rounded-sm shadow-lg w-full object-cover aspect-[9/16] cursor-pointer hover:scale-105 transition-transform duration-300"
//       onClick={() =>
//         setPopup({
//           src: "/img/q.jpg",
//           alt: "Langkah Kedua",
//           caption: "Ada harapan di sana",
//           description:
//             "Cahaya perlahan muncul dari sela-sela dedaunan yang membungkus.",
//         })
//       }
//     />
//   </div>

//   {/* === Mid Title === */}
//   <div className="text-center my-48 animate-fade-in">
//     <h1 className="text-4xl font-bold tracking-wide mb-3">
//       SEBUAH PERJALANAN
//     </h1>
//     <p className="text-sm italic opacity-60">
//       Bab I – Dalam Gelap, Aku Menemukan Cahaya
//     </p>
//   </div>

//   {/* === Another Text === */}
//   <p className="text-center text-sm italic opacity-60 my-16">
//     ...hingga langkah ini terasa benar...
//   </p>

//   {/* === Third Image === */}
//   <div className="w-full max-w-md mx-auto mb-20">
//     <img
//       src="/img/q.jpg"
//       alt="Bayangan Masa Lalu"
//       className="rounded-sm shadow-lg w-full object-cover aspect-[3/4] cursor-pointer hover:scale-105 transition-transform duration-300"
//       onClick={() =>
//         setPopup({
//           src: "/img/q.jpg",
//           alt: "Bayangan Masa Lalu",
//           caption: "Kenangan itu datang kembali...",
//           description:
//             "Ada masa lalu yang tak bisa dihindari, namun juga tak bisa ditinggalkan begitu saja.",
//         })
//       }
//     />
//   </div>

//   {/* === Ending Section (bisa tambahkan lagi lanjutannya) === */}
//   <div className="text-center py-32 opacity-50 text-sm">
//     <p>to be continued...</p>
//   </div>
// </div>
