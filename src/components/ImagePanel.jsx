const ImagePanel = ({ item, onClick }) => {
  return (
    <div
      className="max-w-md mx-auto cursor-pointer hover:scale-105 transition-transform"
      onClick={onClick}
      data-aos="fade-up"
    >
<img
  src={item.src}
  alt={item.caption}
  className="rounded-lg shadow-[0_10px_40px_rgba(255,255,255,0.05)] w-full object-cover"
/>

    </div>
  )
}

export default ImagePanel