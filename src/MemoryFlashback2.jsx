const images = [
  { src: '/img/1.jpg', alt: 'Kenangan 1', width: '25%', height: '60%', opacity: 0.5, top: '0%', left: '0px' },
  { src: '/img/2.jpg', alt: 'Kenangan 2', width: '15%', height: '50%', opacity: 0.1, top: '0%', left: '25%' },
  { src: '/img/3.jpg', alt: 'Kenangan 3', width: '20%', height: '60%', opacity: 0.4, top: '0%', left: '40%' },
  { src: '/img/4.jpg', alt: 'Kenangan 4', width: '20%', height: '40%', opacity: 0.2, top: '0%', left: '60%' },
  { src: '/img/5.jpg', alt: 'Kenangan 5', width: '20%', height: '50%', opacity: 0.1, top: '0%', left: '80%' },
  { src: '/img/6.jpg', alt: 'Kenangan 6', width: '25%', height: '40%', opacity: 0.7, top: '60%', left: '0%' },
  { src: '/img/7.jpg', alt: 'Kenangan 7', width: '15%', height: '50%', opacity: 0.2, top: '50%', left: '25%' },
  { src: '/img/8.jpg', alt: 'Kenangan 8', width: '20%', height: '40%', opacity: 0.6, top: '60%', left: '40%' },
  { src: '/img/9.jpg', alt: 'Kenangan 9', width: '20%', height: '60%', opacity: 0.6, top: '40%', left: '60%' },
  { src: '/img/10.jpg', alt: 'Kenangan 10', width: '20%', height: '50%', opacity: 1, top: '50%', left: '80%' },
]

const MemoryFlashback = () => {
  return (
<div className="w-screen overflow-hidden border-y-4 border-black mb-[1000px] bg-black">
  <div className="aspect-[2/1] md:h-[500px] h-[300px] relative w-full">
    {images.map((img, i) => (
      <img
        key={i}
        src={img.src}
        alt={img.alt}
        className="absolute object-cover transition duration-300 hover:scale-95"
        style={{
          width: img.width,
          height: img.height,
          top: img.top,
          left: img.left,
          opacity: img.opacity,
        }}
      />
    ))}
  </div>
</div>



  )
}

export default MemoryFlashback
