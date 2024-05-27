/* eslint-disable react/prop-types */

const PinnedUser = (props) => {
  const { src } = props;
  return <div className="w-full h-full bg-gray-500 p-4">{src}</div>;
};

export default PinnedUser;
