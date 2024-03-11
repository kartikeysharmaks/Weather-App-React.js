import React from "react";
import { Icon } from "@iconify/react";
import closeIcon from "@iconify-icons/ion/close";
import CustomInput from "./CustomInput";
import StatusBar from "./StatusBar";

const Weather = ({onLocationChange, weatherData}) => {
 
  return (
    <div className="weather lg:px-[120px] xl:px-[180px]">
       <StatusBar color="white" />
      <div className="top-navigator flex items-center justify-between px-[21px] lg:py-8">
        <div className="close-icon">
          <Icon icon={closeIcon} fontSize={40} color="white" cursor={"pointer"}></Icon>
        </div>
        <div className="live">
          <span>LIVE</span>
        </div>
      </div>
      <CustomInput onLocationChange={onLocationChange}/>
      <div className="mt-11 px-[21px] lg:mt-0 lg:pb-10 lg:p-0 lg:text-center text-5xl font-bold tracking-wide text-white leading-[60px]">
         {weatherData?.name? `${weatherData.name},` : "New York,"} 
        <br />
        {weatherData?.name === "New York" ? "United States" : weatherData?.sys?.country   }
      </div>
      <div className="xs:hidden flex items-center justify-center mt-[380px] mb-2">
        <div className="relative shrink-0 self-center bg-white mt-4 bg-opacity-50 h-[5px] rounded-[100px] w-[134px]" />
      </div>
   
    </div>
  );
};

export default Weather;
