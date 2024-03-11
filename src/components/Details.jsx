import React from "react";
import StatusBar from "./StatusBar";
import { Icon } from "@iconify/react";
import menuIcon from "@iconify-icons/ion/menu-sharp";
import searchIcon from "@iconify-icons/ion/search";
import multipleCloudIcon from "@iconify-icons/ion/cloud-outline";
import sunnyIcon from "@iconify-icons/ion/sunny";
import mixedCloudyIcon from "@iconify-icons/ion/partly-sunny-outline";
import rainIcon from "@iconify-icons/ion/rainy";
import graph from "../assets/assets.svg";

export default function Details({ weatherData }) {
  function getCurrentDate() {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const currentDate = new Date();
    const month = months[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    const formattedDate = `${month} ${day}, ${year}`;
    return formattedDate;
  }
  const date = getCurrentDate();
  function handleHours(hours) {
    return ((hours % 24) + 24) % 24;
  }
  const iconUrl = `https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}.png`;

  return (
    <div className="">
      <StatusBar color="black" />
      <div className="lg:hidden flex items-center justify-between px-[21px]">
        <div className="close-icon">
          <Icon icon={menuIcon} fontSize={25} color="#003339" />
        </div>
        <div className="search-icon">
          <Icon icon={searchIcon} fontSize={25} color="#003339" />
        </div>
      </div>
      <div className="flex items-center justify-between px-[21px] lg:px-[120px] xl:px-[180px]">
        <div className="left-heading">
          <div className="mt-7 text-[25px] tracking-wide text-teal-950 font-bold">
            {weatherData?.name ? `${weatherData.name},` : "New York,"}
            <br />
            {weatherData?.name === "New York"
              ? "United States"
              : weatherData?.sys?.country}
          </div>
          <p className="text-[#96969A] mb-1">{date}</p>
          <div className="flex items-center text-[#057BFF] text-[15px] font-bold">
            <img
              src={iconUrl}
              alt="current-weather-icon"
              height={36}
              width={36}
            />{" "}
            {weatherData?.weather[0]?.description}
          </div>
        </div>
        <div className="flex overflow-hidden relative flex-col items-start pt-20 pr-2.5 pb-2.5 pl-16 mt-10 max-w-full text-xs tracking-normal text-white whitespace-nowrap aspect-[1.18] w-[130px]">
          <img
            loading="lazy"
            src="https://s3-alpha-sig.figma.com/img/fac3/d34c/9de36001a0149bb1cb5ca78b1687489f?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SJXRVKTgl32x4wCl~rQx8et-LBW8j-bzrgHnbOGvk5nA38ovybQnynamNLmyg8lFlECevNWBZlZW5rAvFw8smGg2O1wxWcXxrnka2A6QUhQg9IAaZX63brvIoiDv-r5S-T29jUOxG4tyD5N~CD8unYkhlrcJ5KVXBebnDi8~Nnxw9uniEo6rQJNU5NUFf0~W2cyidfB1PALLsof1yNbZrsxnvnSEgEAZJw~RQSZfHbuqIWSHqQ1TFUaXm-Hll3tavR02gMPSrZHHfsWefFbIUXtcnB9RWWoRbuUpYdogsiMbhS2bMBVBvl9r5LUb6V536JxWJRsMGQRX3YUusuEPJA__"
            className="object-cover absolute inset-0 size-full rounded-2xl"
            alt=""
          />
          <div className="absolute text-center px-2 py-1 mb-2 ml-3 font-extralight bg-rose-500 rounded-md">
            LIVE
          </div>
        </div>
      </div>
      <div className="mt-10 px-[21px] lg:px-[120px] xl:px-[180px]">
        <div className="flex gap-3 items-center justify-evenly px-7 pt-3.5 pb-3.5 rounded-3xl bg-[#003339] text-white">
          <div className="flex flex-col gap-2 items-center">
            <div className="time text-sm font-bold tracking-normal">
              {handleHours(new Date().getHours())}:00
            </div>
            <div>
              <Icon
                icon={mixedCloudyIcon}
                color="white"
                className="icon"
                fontSize={24}
              ></Icon>
            </div>
            <div className="date">{new Date().getDate()}</div>
          </div>
          <div className="shrink-0 w-1.5 h-16 rounded-2xl bg-gradient-to-t from-[#014048] to-[#01404800]" />
          <div className="flex flex-col gap-2 items-center">
            <div className="time text-sm font-bold tracking-normal">
              {handleHours(new Date().getHours() + 1)}:00
            </div>
            <div>
              <Icon
                icon={multipleCloudIcon}
                color="white"
                className="icon"
                fontSize={24}
              ></Icon>
            </div>
            <div className="date">{new Date().getDate()}</div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="time text-sm font-bold tracking-normal">
              {handleHours(new Date().getHours() + 2)}:00
            </div>
            <div>
              <Icon
                icon={rainIcon}
                color="white"
                className="icon"
                fontSize={24}
              ></Icon>
            </div>
            <div className="date">{new Date().getDate()}</div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="time text-sm font-bold tracking-normal">
              {handleHours(new Date().getHours() + 3)}:00
            </div>
            <div>
              <Icon
                icon={sunnyIcon}
                color="white"
                className="icon"
                fontSize={24}
              ></Icon>
            </div>
            <div className="date">{new Date().getDate()}</div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="time text-sm font-bold tracking-normal">
              {handleHours(new Date().getHours() + 4)}:00
            </div>
            <div>
              <Icon
                icon={mixedCloudyIcon}
                color="white"
                className="icon"
                fontSize={24}
              ></Icon>
            </div>
            <div className="date">{new Date().getDate()}</div>
          </div>
        </div>
      </div>
      <div className="w-[auto] mx-[21px] lg:mx-[120px] xl:mx-[180px]  h-[1px] mt-12 rounded-2xl bg-[#D8D8D8]" />
      <div className="additional-info px-[21px] lg:px-[120px] xl:px-[180px]  mt-6">
        <div className="text-[#003339] font-bold text-[18px]">
          Additional Info
        </div>
        <div className="flex items-center justify-between mt-2">
          <div>
            <div className="font-regular text-[13px]">Precipitation</div>
            <div className="font-bold text-[15px] text-[#003339]">3%</div>
          </div>
          <div>
            <div className="font-regular text-[13px]">Humidity</div>
            <div className="font-bold text-[15px] text-[#003339]">
              {weatherData?.main?.humidity
                ? `${weatherData.main.humidity}%`
                : "74%"}
            </div>
          </div>
          <div>
            <div className="font-regular text-[13px]">Windy</div>
            <div className="font-bold text-[15px] text-[#003339]">
              {weatherData?.wind?.speed
                ? `${weatherData.wind.speed} km/h`
                : "18 km/h"}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[full] mx-[21px] lg:mx-[120px] xl:mx-[180px] h-[1px] mt-6 rounded-2xl bg-[#D8D8D8]" />
      <div className="flex justify-between mt-6 font-bold text-[#003339] px-[21px] lg:px-[120px] xl:px-[180px]">
        <div className="flex-1 my-auto text-lg">Temperature</div>
        <select className="flex items-center justify-center text-xs px-2 py-2 bg-white rounded-md border border-solid outline-none border-[#003339]">
          <option>Last month</option>
        </select>
      </div>
      <div className="flex relative flex-col gap-5 justify-between px-8 pt-4 pb-2.5 mt-10 text-base font-bold tracking-normal whitespace-nowrap text-neutral-300">
        <img
          loading="lazy"
          src={graph}
          className="object-cover absolute top-0 inset-0 w-[100%]"
          alt="temperature-graph"
        />
        <div className="flex absolute flex-col xs:hidden">
          <div className="text-[#C1C2CF] font-bold text-[15px] absolute top-[-4px] left-0">
            01
          </div>
          <div className="text-[#C1C2CF] font-bold text-[15px] absolute top-2 left-14">
            02
          </div>
          <div className="text-[#C1C2CF] font-bold text-[15px] absolute top-4 left-28">
            03
          </div>
          <div className="text-[#003339] font-bold text-[15px] absolute top-[-45px] left-[168px]">
            04
          </div>
          <div className="text-[#C1C2CF] font-bold text-[15px] absolute top-[-42px] left-[224px]">
            05
          </div>
          <div className="text-[#C1C2CF] font-bold text-[15px] absolute top-0 left-[280px]">
            06
          </div>
        </div>
      </div>
      <div className="xs:hidden flex items-center justify-center mt-[102px]">
        <div className="relative shrink-0 self-center bg-black mt-4 h-[5px] rounded-[100px] w-[134px]" />
      </div>
    </div>
  );
}
