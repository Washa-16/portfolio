import { linkedinIcon } from "../../constants/images/ImageConstants";

const WorkCard = ({
  title,
  buttonText,
  description,
  leftImage,
  rightImage,
  imageClass,
}) => {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center bg-gray-100 dark:bg-neutral-900 p-10 pb-0 rounded-3xl">
      <div className="max-w-[500px]">
        <img
          src={leftImage}
          className="mb-6 h-20 w-20 rounded-2xl object-contain"
        />
        <h3 className="text-2xl font-semibold leading-snug mb-5">{title}</h3>

        <p className="text-gray-600 dark:text-gray-400 leading-8 mb-8">
          {description}
        </p>

        <button className="font-medium text-lg">{buttonText} →</button>
      </div>

      {/* <div className="h-60 bg-gray-300 dark:bg-gray-700 rounded-xl"> */}
      {/* </div> */}
      <div className="flex justify-center md:justify-end items-end h-full">
        <img src={rightImage} className={`object-contain ${imageClass}`} />
      </div>
    </div>
  );
};

export default WorkCard;
