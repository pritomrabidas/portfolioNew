import { AiFillSetting } from "react-icons/ai";

const SkilIteam = ({ Names, percentage }) => {
  return (
    <div>
      <div className="gap-2 flex items-center w-28 h-16">
        <span className=" text-2xl text-secandari mr-2">
          <AiFillSetting />
        </span>
        <div>
          <h3 className="font-medium font-Popins text-secandari text-base">
            {Names}
          </h3>
          <span className="font-normal font-Monrope text-secandari text-sm">
            {percentage}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkilIteam;
