import React from "react";
import { Icon } from "@iconify/react";
import wifiIcon from "@iconify-icons/ion/wifi";
import batteryIcon from "@iconify-icons/ion/battery-full";
import network4GIcon from "@iconify-icons/ion/cellular";

function StatusBar({color}) {
  return (
    <div className={`text-${color} status-bar lg:hidden flex items-center justify-between bg-transparent h-[44px]`}>
      <div className="ml-[21px] mt-[13px] text-[14px]">
        <span>9:41 AM</span>
      </div>
      <div className="flex items-start gap-[3px] mr-[13px]">
        <div className="network">
          <Icon icon={network4GIcon} fontSize={18}/>
        </div>
        <div className="network">
          <Icon icon={wifiIcon} fontSize={18}/>
        </div>
        <div className="battery">
          <Icon icon={batteryIcon} fontSize={18}/>
        </div>
      </div>
    </div>
  );
}

export default StatusBar;
