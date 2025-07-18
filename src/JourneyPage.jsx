import { useState } from "react";
import MemoryFlashback1 from "./data/MemoryFlashback1";
import MemoryFlashback2 from "./data/MemoryFlashback2";
import MemoryFlashback3 from "./data/MemoryFlashback3";
import MemoryFlashback4 from "./data/MemoryFlashback4";
import MemoryFlashback5 from "./data/MemoryFlashback5";
import MemoryFlashback6 from "./data/MemoryFlashback6";


const JourneyPage = () => {
  const [popup, setPopup] = useState(null);

  return (
    <div className="overflow-x-hidden font-sans text-white ">
      <div className="bg-white">
        <div>
          <div>
          <div className="pt-20 pb-20 text-center text-black animate-fade-in">
            <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in">
              Makasih wan...
            </p>
          </div>
          <div className="bg-black text-center pt-[130px] pb-[130px] animate-fade-in mb-[400px]"></div>
          <div className="w-full mb-[500px] border-y-[5px] border-black">
            <img
              src="/img/23.jpg"
              alt="Awal Perjalanan"
              className="w-full object-cover aspect-[4/4] cursor-pointer transition-transform duration-300 hover:scale-[99%]"
              onClick={() =>
                setPopup({
                  src: "/img/23.jpg",
                  alt: "Awal Perjalanan",
                  caption: "Mukamulo wan...",
                  description:
                    "Mukamu sebelum kena angin malang kek orang make",
                })
              }
            />
          </div>
          <div className="w-full mb-[500px] border-y-[5px] border-black">
            <img
              src="/img/1.jpg"
              alt="Awal Perjalanan"
              className="w-full object-cover aspect-[4/4] cursor-pointer transition-transform duration-300 hover:scale-[99%]"
              onClick={() =>
                setPopup({
                  src: "/img/1.jpg",
                  alt: "Awal Perjalanan",
                  caption: "Nah ini loh maksudku...",
                  description:
                    "Ngertikan efek angin malang gimana sekarang? jadi botak.",
                })
              }
            />
          </div>
          <div className="w-full mb-[500px] border-y-[5px] border-black">
            <img
              src="/img/2.jpg"
              alt="Awal Perjalanan"
              className="w-full object-cover aspect-[4/4] cursor-pointer transition-transform duration-300 hover:scale-[99%]"
              onClick={() =>
                setPopup({
                  src: "/img/2.jpg",
                  alt: "Awal Perjalanan",
                  caption: "Nganggur a...?",
                  description:
                    "Asli wan kek orang ngelem",
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
              src="/img/3.jpg"
              alt="Awal Perjalanan"
              className="w-full object-cover aspect-[4/4] cursor-pointer transition-transform duration-300 hover:scale-[99%]"
              onClick={() =>
                setPopup({
                  src: "/img/3.jpg",
                  alt: "Awal Perjalanan",
                  caption: "Cosplay pak wahyu ini",
                  description:
                    "Iwan:'Jadi gini bang...'",
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
              src="/img/27.jpg"
              alt="Awal Perjalanan"
              className="w-full object-cover aspect-[4/4] cursor-pointer transition-transform duration-300 hover:scale-[99%]"
              onClick={() =>
                setPopup({
                  src: "/img/27.jpg",
                  alt: "Awal Perjalanan",
                  caption: "Foto terakhirmu bareng2 sekelas wan.",
                  description:
                    "Sehat2 wan jangan sampai nabrak pohon lagi",
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
              src="/img/8.jpg"
              alt="Awal Perjalanan"
              className="w-full object-cover aspect-[4/4] cursor-pointer transition-transform duration-300 hover:scale-[99%]"
              onClick={() =>
                setPopup({
                  src: "/img/8.jpg",
                  alt: "Awal Perjalanan",
                  caption: "Awal yang sunyi...",
                  description:
                    "Coba perhatikan dengan seksama wajahnya seperti minta wizkas",
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
              src="/img/5.jpg"
              alt="Awal Perjalanan"
              className="w-full object-cover aspect-[4/4] cursor-pointer transition-transform duration-300 hover:scale-[99%]"
              onClick={() =>
                setPopup({
                  src: "/img/5.jpg",
                  alt: "Awal Perjalanan",
                  caption: "Rambut baru",
                  description:
                    "Rambutnya model apa bang ini namanya? jadi adiknya upin.",
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
              src="/img/13.jpg"
              alt="Awal Perjalanan"
              className="w-full object-cover aspect-[4/4] cursor-pointer transition-transform duration-300 hover:scale-[99%]"
              onClick={() =>
                setPopup({
                  src: "/img/13.jpg",
                  alt: "Awal Perjalanan",
                  caption: "hais",
                  description:
                    "Komen sendiri yang cocok untuk gambar ini apa kira2...?",
                })
              }
            />
          </div></div>

          <div className="text-black text-center pt-20 pb-20 animate-fade-in mb-[200px]">
            <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
              Ah.
            </p>
          </div>

          <div className="pt-20 text-center text-black animate-fade-in">
            <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
              Ya.
            </p>
          </div>
          <MemoryFlashback1 />
          <div className="pt-20 text-center text-black animate-fade-in">
            <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
              Kau adalah...
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
              <p className=" text-center text-[50px] italic opacity-60 my-16 animate-fade-in px-[70px]">
                "Mampus di Do Um"
              </p>
            </div>
            <div className="pt-20 text-center text-white animate-fade-in">
              <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
                Anak PTI,
              </p>
            </div>
            <div className="w-full  border-y-[5px] border-black">
              <img
                src="/img/14.jpg"
                alt="Awal Perjalanan"
                className="w-full object-cover aspect-[4/4] cursor-pointer transition-transform duration-300 hover:scale-[99%]"
                onClick={() =>
                  setPopup({
                    src: "/img/14.jpg",
                    alt: "Awal Perjalanan",
                    caption: "Masa awal ospek",
                    description:
                      "Iwan mode survive mencari mangsa",
                  })
                }
              />
            </div>
            <div className="text-white text-center pb-[400px] animate-fade-in">
              <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
                Kita.
              </p>
            </div>
            <div className="text-center text-white animate-fade-in">
              <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
                Untuk Waktu yang lama,
              </p>
            </div>
            <div className="flex items-center justify-center w-full my-10">
              <div className="w-[90%] border-4 border-black overflow-hidden">
                <img
                  src="/img/16.jpg"
                  alt="Awal Perjalanan"
                  className="w-full aspect-[4/4] object-cover cursor-pointer transition-transform duration-300 hover:scale-[0.99]"
                  onClick={() =>
                    setPopup({
                      src: "/img/16.jpg",
                      alt: "Awal Perjalanan",
                      caption: "Ngopi",
                      description:
                        "Mukamu gakeliatan cik.",
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
            <div className="text-center text-white animate-fade-in">
              <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
                Kau telah dapat apa...?
              </p>
            </div>
            <div className="w-full  border-y-[5px] border-black">
              <img
                src="/img/26.jpg"
                alt="Awal Perjalanan"
                className="w-full object-cover aspect-[4/4] cursor-pointer transition-transform duration-300 hover:scale-[99%]"
                onClick={() =>
                  setPopup({
                    src: "/img/26.jpg",
                    alt: "Awal Perjalanan",
                    caption: "Main yok",
                    description:
                      "Mana mukakmu wan...",
                  })
                }
              />
            </div>
            <div className="text-white text-center pb-[500px] animate-fade-in">
              <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
                Bersama dengan alasan apapun untuk semua pilihanmu.
              </p>
            </div>
            <div className="text-white text-center animate-fade-in pb-[500px]">
              <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
                Sisanya cuma kenangan.
              </p>
            </div>
            <div className="text-center text-white animate-fade-in ">
              <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
                Tiba-tiba,
              </p>
            </div>
            <div className="w-full  border-y-[5px] border-black">
              <img
                src="/img/29.jpg"
                alt="Awal Perjalanan"
                className="w-full object-cover aspect-[4/4] cursor-pointer transition-transform duration-300 hover:scale-[99%]"
                onClick={() =>
                  setPopup({
                    src: "/img/29.jpg",
                    alt: "Awal Perjalanan",
                    caption: "Disiplin",
                    description:
                      "Selalu menggunakan peraturan baju anak teknik",
                  })
                }
              />
            </div>
            <div className="text-white text-center animate-fade-in mb-[400px]">
              <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
                main bareng aja.
              </p>
            </div>
            <div className="mb-[500px] text-white text-center animate-fade-in ">
              <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
                Jadi, akhirnya coba untuk membuat kelompok bersama.
              </p>
            </div>
            <div className="text-center text-white animate-fade-in ">
              <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
                Tapi kurang ramai.
              </p>
            </div>
            <div className="w-full  border-y-[5px] border-black mb-[300px]">
              <img
                src="/img/6.jpg"
                alt="Awal Perjalanan"
                className="w-full object-cover aspect-[4/4] cursor-pointer transition-transform duration-300 hover:scale-[99%]"
                onClick={() =>
                  setPopup({
                    src: "/img/6.jpg",
                    alt: "Awal Perjalanan",
                    caption: "Dapet apa...?",
                    description:
                      "Dapet kabur elahh...",
                  })
                }
              />
            </div>
            <div className="text-center text-white animate-fade-in ">
              <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
                Lalu, Dipercobaan baru,
              </p>
            </div>
            <div className="w-full  border-y-[5px] border-black">
              <img
                src="/img/31.jpg"
                alt="Awal Perjalanan"
                className="w-full object-cover aspect-[4/4] cursor-pointer transition-transform duration-300 hover:scale-[99%]"
                onClick={() =>
                  setPopup({
                    src: "/img/31.jpg",
                    alt: "Awal Perjalanan",
                    caption: "Untung..",
                    description:
                      "Tidak terbantai presentasi...",
                  })
                }
              />
            </div>
            <div className="text-white text-center animate-fade-in mb-[500px]">
              <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
                Kita mencari teman sendiri
              </p>
            </div>
            <div className="text-center text-white animate-fade-in ">
              <p className=" text-center text-[20px] italic opacity-60 my-16 animate-fade-in px-[70px]">
                Dan terciptalah tongkrongan baru
              </p>
            </div>
            <div className="w-full  border-y-[5px] border-black">
              <img
                src="/img/30.jpg"
                alt="Awal Perjalanan"
                className="w-full object-cover aspect-[4/4] cursor-pointer transition-transform duration-300 hover:scale-[99%]"
                onClick={() =>
                  setPopup({
                    src: "/img/30.jpg",
                    alt: "Awal Perjalanan",
                    caption: "Galau",
                    description:
                      "Iwan banyak pikiran ini...",
                  })
                }
              />
            </div>
            <div className=" bg-gradient-to-b from-gray-800 via-gray-600 to-white">
              <div className="text-center text-white animate-fade-in ">
                <p className=" text-center text-[20px] pb-[600px] italic opacity-60 my-16 animate-fade-in px-[70px]">
                  Yang akan ada untuk tujuan setelah kelas.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full  border-y-[5px] border-black mb-[100px]">
            <img
              src="/img/14.jpg"
              alt="Awal Perjalanan"
              className="w-full object-cover aspect-[4/4] cursor-pointer transition-transform duration-300 hover:scale-[99%]"
              onClick={() =>
                setPopup({
                  src: "/img/14.jpg",
                  alt: "Awal Perjalanan",
                  caption: "Awal ...",
                  description:
                    "Semuanya bermula dari langkah peraturan bersama",
                })
              }
            />
          </div>

          <div className="w-full  border-y-[5px] border-black mb-[100px]">
            <img
              src="/img/15.jpg"
              alt="Awal Perjalanan"
              className="w-full object-cover aspect-[4/4] cursor-pointer transition-transform duration-300 hover:scale-[99%]"
              onClick={() =>
                setPopup({
                  src: "/img/15.jpg",
                  alt: "Awal Perjalanan",
                  caption: "Semakin dalam",
                  description:
                    "Semakin mengenal sesama",
                })
              }
            />
          </div>

          <div className="w-full  border-y-[5px] border-black mb-[300px]">
            <img
              src="/img/18.jpg"
              alt="Awal Perjalanan"
              className="w-full object-cover aspect-[4/4] cursor-pointer transition-transform duration-300 hover:scale-[99%]"
              onClick={() =>
                setPopup({
                  src: "/img/18.jpg",
                  alt: "Awal Perjalanan",
                  caption: "Lagi...",
                  description:
                    "Kau kemana njir...",
                })
              }
            />
          </div>

          <div className="w-full  border-y-[5px] border-black mb-[100px]">
            <img
              src="/img/19.jpg"
              alt="Awal Perjalanan"
              className="w-full object-cover aspect-[4/4] cursor-pointer transition-transform duration-300 hover:scale-[99%]"
              onClick={() =>
                setPopup({
                  src: "/img/19.jpg",
                  alt: "Awal Perjalanan",
                  caption: "Lagi...",
                  description:
                    "Aku kemana ini cik...",
                })
              }
            />
          </div>

          <div className="w-full  border-y-[5px] border-black mb-[100px]">
            <img
              src="/img/20.jpg"
              alt="Awal Perjalanan"
              className="w-full object-cover aspect-[4/4] cursor-pointer transition-transform duration-300 hover:scale-[99%]"
              onClick={() =>
                setPopup({
                  src: "/img/20.jpg",
                  alt: "Awal Perjalanan",
                  caption: "Ramai...",
                  description:
                    "Asik si wan sebenernya, klo ga cacar",
                })
              }
            />
          </div>

          <div className="w-full  border-y-[5px] border-black mb-[300px]">
            <img
              src="/img/21.jpg"
              alt="Awal Perjalanan"
              className="w-full object-cover aspect-[4/4] cursor-pointer transition-transform duration-300 hover:scale-[99%]"
              onClick={() =>
                setPopup({
                  src: "/img/21.jpg",
                  alt: "Awal Perjalanan",
                  caption: "Bukber.",
                  description:
                    "Infokan bukber next.",
                })
              }
            />
          </div>

          <div className="w-full  border-y-[5px] border-black mb-[100px]">
            <img
              src="/img/24.jpg"
              alt="Awal Perjalanan"
              className="w-full object-cover aspect-[4/4] cursor-pointer transition-transform duration-300 hover:scale-[99%]"
              onClick={() =>
                setPopup({
                  src: "/img/24.jpg",
                  alt: "Awal Perjalanan",
                  caption: "Awal berangkat di jemur",
                  description:
                    "Sampe kos tepar",
                })
              }
            />
          </div>

          <div className="w-full  border-y-[5px] border-black mb-[100px]">
            <img
              src="/img/26.jpg"
              alt="Awal Perjalanan"
              className="w-full object-cover aspect-[4/4] cursor-pointer transition-transform duration-300 hover:scale-[99%]"
              onClick={() =>
                setPopup({
                  src: "/img/26.jpg",
                  alt: "Awal Perjalanan",
                  caption: "hitam",
                  description:
                    "Akhirnya sampe sini",
                })
              }
            />
          </div>

          <div className="w-full  border-y-[5px] border-black mb-[300px]">
            <img
              src="/img/27.jpg"
              alt="Awal Perjalanan"
              className="w-full object-cover aspect-[4/4] cursor-pointer transition-transform duration-300 hover:scale-[99%]"
              onClick={() =>
                setPopup({
                  src: "/img/27.jpg",
                  alt: "Awal Perjalanan",
                  caption: "AKhir yang sunyi...",
                  description:
                    "Last pic with all",
                })
              }
            />
          </div>

          <div className="flex items-center justify-center w-full my-10">
            <div className="w-[90%] border-4 border-black overflow-hidden">
              <img
                src="/img/26.jpg"
                alt="Awal Perjalanan"
                className="w-full aspect-[4/4] object-cover cursor-pointer transition-transform duration-300 hover:scale-[0.99]"
                onClick={() =>
                  setPopup({
                    src: "/img/15.jpg",
                    alt: "Awal Perjalanan",
                    caption: "tebak...",
                    description:
                      "Setelah uas semester satu ni",
                  })
                }
              />
            </div>
          </div>

          <div className="mb-[50px] w-full flex justify-center items-center my-10">
            <div className="w-[80%] mr-[50px] border-4 border-black overflow-hidden">
              <img
                src="/img/25.jpg"
                alt="Awal Perjalanan"
                className="w-full aspect-[4/4] object-cover cursor-pointer transition-transform duration-300 hover:scale-[0.99]"
                onClick={() =>
                  setPopup({
                    src: "/img/25.jpg",
                    alt: "Awal Perjalanan",
                    caption: "...",
                    description:
                      "Wan jangan terharu",
                  })
                }
              />
            </div>
          </div>

          <div className="mb-[100px] w-full flex justify-center items-center my-10">
            <div className="w-[70%] ml-[100px] border-4 border-black overflow-hidden">
              <img
                src="/img/30.jpg"
                alt="Awal Perjalanan"
                className="w-full aspect-[4/4] object-cover cursor-pointer transition-transform duration-300 hover:scale-[0.99]"
                onClick={() =>
                  setPopup({
                    src: "/img/30.jpg",
                    alt: "Awal Perjalanan",
                    caption: "Akhir smt1 ",
                    description:
                      "Semuanya bermula dari kabut, wan syukur kau lulus, kejar apapun yang menurutmu benar tanpa bias apapun, tanpa pengaruh apapun, kami doakan yang terbaik untuk kau, 'pikir lagi, jika ya lanjutkan jika ragu lupakan'",
                  })
                }
              />
            </div>
          </div>

          <div className="flex items-center justify-center w-full my-10">
            <div className="w-[60%] border-4 border-black overflow-hidden">
              <img
                src="/img/6.jpg"
                alt="Awal Perjalanan"
                className="w-full aspect-[4/4] object-cover cursor-pointer transition-transform duration-300 hover:scale-[0.99]"
                onClick={() =>
                  setPopup({
                    src: "/img/6.jpg",
                    alt: "Awal Perjalanan",
                    caption: "Wappala",
                    description:
                      "'W A P P A L A'",
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
      src="/img/7.jpg"
      alt="Diamond Style"
      className="absolute top-0 left-0 object-cover w-full h-full"
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
      src="/img/32.jpg"
      alt="Diamond Style"
      className="absolute top-0 left-0 object-cover w-full h-full"
    />
  </div>
</div>

<div className="w-full flex justify-end  py-10 ml-[10px]  overflow-hidden mb-[400px]">
  <div className="relative w-[350px] h-[500px] rotate-45 mt-[50px] mb-[50px] border-[2px] border-black overflow-hidden shadow-md">
    <img
      src="/img/33.jpg"
      alt="Diamond Style"
      className="absolute top-0 left-0 object-cover w-full h-full"
    />
  </div>
</div>

<div className="flex justify-center w-full py-10 overflow-hidden">
  <div className="relative w-[800px] h-[300px] rotate-45 mt-[150px] mb-[150px] border-[2px] border-black overflow-hidden shadow-md">
    <img
      src="/img/17.jpg"
      alt="Diamond Style"
      className="absolute top-0 left-0 object-cover w-full h-full"
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
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-60 backdrop-blur-sm"
          onClick={() => setPopup(null)}
        >
          <div
            className="w-full max-w-sm p-4 space-y-3 text-gray-800 bg-white rounded-sm shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={popup.src}
              alt={popup.alt}
              className="object-cover w-full h-56 rounded"
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
