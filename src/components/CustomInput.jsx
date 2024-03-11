import React, { useState } from "react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify-icons/ion/location-sharp";

function CustomInput({ onLocationChange }) {
  const [searchTerm, setSearchTerm] = useState('');
  const handleInputChange = (event) => {
    const value = event.target.value;
    console.log(value)
    setSearchTerm(value);
    onLocationChange(value);
  };

  return (
    <div className="flex relative items-center gap-2 py-3 mt-28 lg:mt-10 lg:mx-auto mx-[21px] w-[187px] min-h-[30px] text-xs font-bold tracking-normal text-white rounded-xl backdrop-blur-[0.6795704364776611px] bg-black bg-opacity-10">
      <Icon icon={locationIcon} className=" ml-3" fontSize={18} />
      <input
        type="text"
        placeholder="CURRENT LOCATION"
        value={searchTerm}
        onChange={handleInputChange}
        className="flex-auto my-auto text-[14px] font-thin bg-transparent border-none outline-none placeholder:text-white placeholder:text-[14px] placeholder:font-thin"
      />
    </div>
  );
}

export default CustomInput;
