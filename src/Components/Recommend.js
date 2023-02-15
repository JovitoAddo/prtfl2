import React from "react";

const Recommend = () => {
  return (
    <div className="grid justify-items-center pt-10 gap-5">
      <div className="w-full h-60">
        <div className="h-40 w-full">
          <input
            className="bg-customblack bg-opacity-10 h-full w-full border-customblack border-none rounded-md text-center"
            placeholder="Type Your Comments"
          />
          <div className="h-5"></div>
          <div className="flex justify-end pr-5">
            <button className="bg-customblue rounded-full bg-opacity-80 border-customblack h-10 px-5 text-customwhite">Submit</button>
          </div>
        </div>
      </div>
      <div className="h-screen"> LIST OF COMMENTS </div>
    </div>
  );
};

export default Recommend;
