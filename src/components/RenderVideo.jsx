/* eslint-disable react/prop-types */
const RenderVideo = (props) => {
  const { src } = props;
  return (
    <div className="w-full h-full bg-gray-500 p-4 flex justify-center items-center font-bold text-6xl">
      {src}
    </div>
  );
};

export default RenderVideo;
