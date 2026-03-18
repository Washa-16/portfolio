import React from "react";

const StackCard = ({ icon, title, tag }) => {
  return (
    <div className="bg-gray-100 dark:bg-neutral-900 rounded-2xl p-6 flex flex-col justify-between h-[180px] hover:scale-[1.02] transition cursor-pointer border border-transparent hover:border-neutral-700">
      <div className="flex justify-center">
        <img src={icon} alt={title} className="w-20 h-20 object-contain" />
      </div>

      <div className="flex items-center justify-between">
        <h4 className="font-medium text-lg">{title}</h4>

        <span className="text-xs px-3 py-1 rounded-full bg-neutral-800 text-gray-300">
          {tag}
        </span>
      </div>
    </div>
  );
};

export default StackCard;
