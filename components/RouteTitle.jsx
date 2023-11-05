import React from "react";

function RouteTitle(props) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-full text-center">
        <div className="text-center">
          <p className="font-lufga font-bold text-[#0D0760] text-xl xl:text-4xl">
            {props.title}
          </p>
        </div>

        <div className="text-center max-w-[240px] xl:max-w-[500px]">
          <p className="text-[#1F1F1F]/50 text-[10px] xl:text-lg mt-4">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RouteTitle;
