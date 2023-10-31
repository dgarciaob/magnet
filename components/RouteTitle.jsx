import React from "react";

function RouteTitle(props) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-full text-center">
        <div className="text-center">
          <p className="font-lufga font-bold text-[#0D0760] text-xl">
            {props.title}
          </p>
        </div>

        <div className="text-center max-w-[240px]">
          <p className="text-[#1F1F1F]/50 text-[10px] mt-4">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RouteTitle;
