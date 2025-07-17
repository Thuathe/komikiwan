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
                Kita.
              </p>
            </div>
            <div className="text-white text-center animate-fade-in">
              <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
                Untuk Waktu yang lama,
              </p>
            </div>
            <div className="w-full flex justify-center items-center my-10">
              <div className="w-[90%] border-4 border-black overflow-hidden">
                <img
                  src="/img/q.jpg"
                  alt="Awal Perjalanan"
                  className="w-full aspect-[4/4] object-cover cursor-pointer transition-transform duration-300 hover:scale-[0.99]"
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
            </div>
            <div className="text-white text-center pb-[400px] animate-fade-in">
              <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
                Kita terus-terusan berangkat kuliah sampai sore.
              </p>
            </div>
            <div className="text-white text-center animate-fade-in">
              <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
                Kita telah mendapatkan sesuatu
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
            <div className="text-white text-center pb-[500px] animate-fade-in">
              <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
                Bersama dengan alasan apapun untuk semua tindakanya.
              </p>
            </div>
            <div className="text-white text-center animate-fade-in pb-[500px]">
              <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
                Semua yang tersisa hanyalah ingatan.
              </p>
            </div>
            <div className="text-white text-center animate-fade-in ">
              <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
                Tiba-tiba,
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
            <div className="text-white text-center animate-fade-in mb-[400px]">
              <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
                Kita bertemu bersama.
              </p>
            </div>
            <div className="mb-[500px] text-white text-center animate-fade-in ">
              <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
                Jadi, kita mencoba untuk membuat kelompok bersama.
              </p>
            </div>
            <div className="text-white text-center animate-fade-in ">
              <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
                Tapi selalu gagal.
              </p>
            </div>
            <div className="w-full  border-y-[5px] border-black mb-[300px]">
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
            <div className="text-white text-center animate-fade-in ">
              <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
                Lalu, Dipercobaan baru,
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
            <div className="text-white text-center animate-fade-in mb-[500px]">
              <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
                Kita mencari teman sendiri
              </p>
            </div>
            <div className="text-white text-center animate-fade-in ">
              <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
                Dan menciptakan seorang teman
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
            <div className=" bg-gradient-to-b from-gray-800 via-gray-600 to-white">
              <div className="text-white text-center animate-fade-in ">
                <p className=" text-center text-[20px] pb-[600px] italic opacity-60 my-16 animate-fade-in px-[70px]">
                  Yang akan hidup sebagai kelompoknya
                </p>
              </div>
            </div>
          </div>

          <div className="w-full  border-y-[5px] border-black mb-[100px]">
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

          <div className="w-full  border-y-[5px] border-black mb-[100px]">
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

          <div className="w-full  border-y-[5px] border-black mb-[300px]">
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

          <div className="w-full  border-y-[5px] border-black mb-[100px]">
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

          <div className="w-full  border-y-[5px] border-black mb-[100px]">
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

          <div className="w-full  border-y-[5px] border-black mb-[300px]">
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

          <div className="w-full  border-y-[5px] border-black mb-[100px]">
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

          <div className="w-full  border-y-[5px] border-black mb-[100px]">
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

          <div className="w-full  border-y-[5px] border-black mb-[300px]">
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

          <div className="w-full flex justify-center items-center my-10">
            <div className="w-[90%] border-4 border-black overflow-hidden">
              <img
                src="/img/q.jpg"
                alt="Awal Perjalanan"
                className="w-full aspect-[4/4] object-cover cursor-pointer transition-transform duration-300 hover:scale-[0.99]"
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
          </div>

          <div className="mb-[50px] w-full flex justify-center items-center my-10">
            <div className="w-[80%] mr-[50px] border-4 border-black overflow-hidden">
              <img
                src="/img/q.jpg"
                alt="Awal Perjalanan"
                className="w-full aspect-[4/4] object-cover cursor-pointer transition-transform duration-300 hover:scale-[0.99]"
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
          </div>

          <div className="mb-[100px] w-full flex justify-center items-center my-10">
            <div className="w-[70%] ml-[100px] border-4 border-black overflow-hidden">
              <img
                src="/img/q.jpg"
                alt="Awal Perjalanan"
                className="w-full aspect-[4/4] object-cover cursor-pointer transition-transform duration-300 hover:scale-[0.99]"
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
          </div>

          <div className="w-full flex justify-center items-center my-10">
            <div className="w-[60%] border-4 border-black overflow-hidden">
              <img
                src="/img/q.jpg"
                alt="Awal Perjalanan"
                className="w-full aspect-[4/4] object-cover cursor-pointer transition-transform duration-300 hover:scale-[0.99]"
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
          </div>

          <div
            className="w-full h-[500px] bg-no-repeat bg-cover bg-left"
            style={{
              backgroundImage: "url('/img/transisi.jpg')",
            }}
          ></div>
          <div className="bg-black">
            <div className="p-[10px]"></div>

<div className="w-full flex justify-end  py-10 ml-[50px]  overflow-hidden">
  <div className="relative w-[350px] h-[350px] rotate-45 mt-[50px] mb-[50px] border-[2px] border-black overflow-hidden shadow-md">
    <img
      src="/img/q.jpg"
      alt="Diamond Style"
      className="absolute top-0 left-0 w-full h-full object-cover"
    />
  </div>
</div>

            <div className="text-white text-center animate-fade-in mt-[300px] mb-[300px]">
              <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
                Akhirnya...
              </p>
            </div>

<div className="w-full flex justify-start py-10 mr-[20px] overflow-hidden">
  <div className="relative w-[400px] h-[800px] rotate-45 mt-[50px] mb-[50px] border-[2px] border-black overflow-hidden shadow-md">
    <img
      src="/img/q.jpg"
      alt="Diamond Style"
      className="absolute top-0 left-0 w-full h-full object-cover"
    />
  </div>
</div>

<div className="w-full flex justify-end  py-10 ml-[10px]  overflow-hidden mb-[400px]">
  <div className="relative w-[350px] h-[500px] rotate-45 mt-[50px] mb-[50px] border-[2px] border-black overflow-hidden shadow-md">
    <img
      src="/img/q.jpg"
      alt="Diamond Style"
      className="absolute top-0 left-0 w-full h-full object-cover"
    />
  </div>
</div>

<div className="w-full flex justify-center py-10 overflow-hidden">
  <div className="relative w-[500px] h-[500px] rotate-45 mt-[50px] mb-[50px] border-[2px] border-black overflow-hidden shadow-md">
    <img
      src="/img/q.jpg"
      alt="Diamond Style"
      className="absolute top-0 left-0 w-full h-full object-cover"
    />
  </div>
</div>

            <div className="text-white text-center animate-fade-in mt-[800px] mb-[300px]">
              <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
               Semua selesai disini.
              </p>
            </div>

            <div className="p-[10px]"></div>
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
