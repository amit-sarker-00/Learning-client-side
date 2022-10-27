import React from "react";

const HomePage = ({ home }) => {
  const { name, image } = home;

  return (
    <div>
      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 my-20">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
