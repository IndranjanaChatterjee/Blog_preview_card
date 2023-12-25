import React from "react";
import cardImg from "../assets/images/illustration-article.svg";
import avaImg from "../assets/images/image-avatar.webp";

export default function Card() {
  return (
    <div className="bg-[#ffffff] w-[17rem] rounded-2xl flex flex-row justify-center items-center border-[1.3px] border-solid border-[#121212] shadow-[10px_10px_rgb(18,18,18)] m-[1rem]">
      <div className="inside bg-[#ffffff] p-[1.1rem] rounded-xl border-[1.3px] border-solid border-[#121212] font-['Figtree']">
        <img
          src={cardImg}
          alt="article"
          className="rounded-lg mb-[1rem]"
        />
        <span className="text-xs bg-[#f5d254] p-[0.3rem] font-bold mb-[1rem]">Learning</span>
        <p className="text-xs my-[1rem] font-medium">Published 21 Dec 2023</p>
        <h1 className="text-lg font-bold hover:text-[#f4d04e] cursor-pointer transition-all ease-linear duration-200 mb-[0.5rem]">HTML & CSS foundations </h1>
        <p className="para text-xs text-[#808080] mb-[1rem]">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <span className="avatar flex flex-row justify-start gap-[0.5rem]">
          {" "}
          <img src={avaImg} alt="avatar" className="w-[1.5rem]" />
          <p className="av text-sm font-bold">Greg Hooper</p>
        </span>
      </div>
    </div>
  );
}
