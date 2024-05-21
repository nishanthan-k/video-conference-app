import { useEffect } from "react";
import { useRef } from "react";

const RenderVideo = () => {
  const user1 = useRef()
  const user2 = useRef()

  useEffect(() => {
    const init = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({video: true, audio: false});
        user1.current.srcObject = stream;
      } catch (error) {
        console.log("Error on connecting audio / video:", error)
      }
    }

    init()
  }, [])

  return (
    <div>
      <div className="w-full pt-10 flex justify-around">
        <video ref={user1} autoPlay playsInline className="w-2/5 h-72 bg-slate-300"></video>
        <video ref={user2} autoPlay playsInline className="w-2/5 h-72 bg-slate-300"></video>
      </div>
    </div>
  );
};

export default RenderVideo;
