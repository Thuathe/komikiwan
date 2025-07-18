const images = [
  { src: '/img/1.jpg', alt: 'Kenangan 1', width: '45%', height: '45%', opacity: 1, top: '25%', left: '25%' },
  { src: '/img/2.jpg', alt: 'Kenangan 2', width: '30%', height: '30%', opacity: 1, top: '0%', left: '0%' },
  { src: '/img/3.jpg', alt: 'Kenangan 3', width: '25%', height: '28%', opacity: 1, top: '0%', left: '27%' },
  { src: '/img/4.jpg', alt: 'Kenangan 4', width: '20%', height: '32%', opacity: 1, top: '0%', left: '48%' },
  { src: '/img/5.jpg', alt: 'Kenangan 5', width: '30%', height: '38%', opacity: 1, top: '0%', left: '67%' },
  { src: '/img/6.jpg', alt: 'Kenangan 6', width: '28%', height: '35%', opacity: 1, top: '30%', left: '0%' },
  { src: '/img/7.jpg', alt: 'Kenangan 7', width: '40%', height: '43%', opacity: 1, top: '65%', left: '0%' },
  { src: '/img/8.jpg', alt: 'Kenangan 8', width: '30%', height: '40%', opacity: 1, top: '68%', left: '38%' },
  { src: '/img/9.jpg', alt: 'Kenangan 9', width: '30%', height: '45%', opacity: 1, top: '70%', left: '68%' },
  { src: '/img/10.jpg', alt: 'Kenangan 10', width: '30%', height: '35%', opacity: 1, top: '35%', left: '68%' },
]

const MemoryFlashback = () => {
  return (
    <div className="w-screen overflow-hidden border-y-4 border-black mb-[500px] bg-black">
      <div className="relative w-full h-screen md:aspect-[1/2] md:h-auto">
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
