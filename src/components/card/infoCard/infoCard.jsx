import { useNavigate } from "react-router-dom";

const InfoCard = ({ title, subtitle, image, imageClass, path }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(path)}
      className="bg-gray-100 dark:bg-neutral-900 p-8 rounded-2xl min-h-[320px] cursor-pointer flex flex-col  items-center overflow-hidden "
    >
      <div>
        <h4 className="font-semibold text-2xl mb-2">{title}</h4>
        <p className="text-gray-600 dark:text-gray-400 leading-7">{subtitle}</p>
      </div>
      <div className="flex-1 flex items-end justify-center">
        <img
          src={image}
          className={`object-contain max-w-none ${imageClass}`}
        />
      </div>
    </div>
  );
};

export default InfoCard;
