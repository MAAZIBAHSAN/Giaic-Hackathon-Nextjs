import Image from "next/image";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

const Container1 = () => {
  return (
    <div className="h-[92px] w-[100vw] bg-[#FAFAFA]">
      <h2 className="text-2xl font-bold w-[63px] h-[32px] pt-6 pl-[200px] cursor-pointer">
        Shop
      </h2>
      <div>
      <h2 className="h-[20px] w-[20px] pl-[1100px] font-bold">Home </h2>
      <h2><RiArrowDropRightLine className="ml-[1160px] font-bold text-[40px] text-[#BDBDBD] absolute bottom-[464px] "/></h2>
      <h2 className="h-[20px] w-[20px] pl-[1100px] font-bold text-[#BDBDBD] absolute right-[150px] top-[138px] ">Shop </h2>
      </div>
      <div>
        {/* <Image
          src="/images/container-1.png"
          width={1440}
          alt="container"
          height={70}
          className="w-[100vw] cursor-pointer transition"
        />*/}
        <Image
          src="/images/container-2.png"
          width={1440}
          alt="containers"
          height={271}
          className="w-[100vw] cursor-pointer transition pt-10"
        /> 
      </div>
    </div>
  );
};

export default Container1;

// width: 1440px;
// height: 271px;
// padding: 0px 176px 0px 176px;
// gap: 40px;
// opacity: 0px;
