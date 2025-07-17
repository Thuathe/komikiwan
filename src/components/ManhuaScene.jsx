import { useState } from "react"
import ImagePanel from "./ImagePanel"
import TextPanel from "./TextPanel"

const ManhuaScene = ({ story }) => {
  const [popup, setPopup] = useState(null)

  return (
    <div className="bg-black text-white min-h-screen py-10 px-4 space-y-10">
      {story.map((item, idx) => {
        switch (item.type) {
          case "image":
            return <ImagePanel key={idx} item={item} onClick={() => setPopup(item)} />
          case "text":
            return <TextPanel key={idx} content={item.content} />
          case "milestone":
            return (
<div key={idx} className="text-center my-20" data-aos="zoom-in">
  <h2 className="text-3xl font-bold">{item.title}</h2>
  <p className="text-sm italic opacity-70">{item.note}</p>
</div>


            )
          default:
            return null
        }
      })}

      {popup && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setPopup(null)}>
          <div className="bg-white text-black max-w-sm w-full p-5 rounded-lg shadow-lg space-y-3" onClick={e => e.stopPropagation()}>
            <img src={popup.src} alt={popup.caption} className="w-full h-56 object-cover rounded" />
            <h3 className="font-bold text-lg">{popup.caption}</h3>
            <p className="text-sm">{popup.description}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ManhuaScene
