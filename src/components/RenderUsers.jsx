/* eslint-disable react/jsx-key */
import RenderVideo from "./RenderVideo";

const RenderUsers = () => {
  const users = [
    1, 2, 3, 4, 5, 6, 4, 5, 6, 4, 5, 6, 4, 5, 6, 4, 5, 6, 4, 5, 6, 4, 5, 6, 4,
    5, 6, 4, 5, 6,
  ];
  const pinned = 3;
  users.map((e) => console.log(e === pinned));
  return (
    <div className="w-full h-[calc(100vh-100px)] flex gap-4">
      <div className="w-5/6 h-full">
        {users.map((e) => e == pinned && <RenderVideo key={e} src={e} />)}
      </div>
      <div className="w-2/12 overflow-y-scroll">
        {users.map(
          (e) =>
            e != pinned && (
              <div className="w-full h-40 flex flex-col justify-start  mb-3">
                <RenderVideo key={e} src={e} />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default RenderUsers;
