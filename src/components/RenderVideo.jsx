import { useEffect, useRef, useState } from "react";

const RenderVideo = () => {
  const [localStream, setLocalStram] = useState("");
  const [remoteStream, setRemoteStram] = useState("");
  const user1 = useRef();
  const user2 = useRef();

  const init = async (ref) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      ref.current.srcObject = stream;
    } catch (error) {
      console.log("Error on connecting audio / video:", error);
    }
  };

  init(user1);

  const servers = {
    iceServers: [
      {
        urls: [
          "stun:stun1.1.google.com:19302",
          "stun:stun2.1.google.com:19302",
        ],
      },
    ],
  };

  const createOffer = async () => {
    const peerConnection = new RTCPeerConnection(servers);

    const stream = new MediaStream();
    user2.current.srcObject = stream;

    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription();

    console.log(offer);
  };

  return (
    <div>
      <div className="w-full pt-10 flex justify-around">
        <div className="w-1/3 py-10 bg-slate-400 flex flex-col items-center gap-5">
          <video
            ref={user1}
            autoPlay
            playsInline
            className="w-full h-72"
          ></video>
          <button className="bg-sky-500 px-4 py-2" onClick={createOffer}>
            Create Offer
          </button>
        </div>
        <div className="w-2/5 py-10 bg-slate-400 flex flex-col items-center gap-5">
          <video
            ref={user2}
            autoPlay
            playsInline
            className="w-full h-72"
          ></video>
          <button className="bg-sky-500 px-4 py-2">Create Offer</button>
        </div>
      </div>
    </div>
  );
};

export default RenderVideo;
