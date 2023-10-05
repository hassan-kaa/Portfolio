"use client";
import { faDownload, faMailReply } from "@fortawesome/free-solid-svg-icons";
import { faNavicon } from "@fortawesome/free-solid-svg-icons/faNavicon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <nav className="shadow-custom fixed left-0 top-0 z-20 flex max-h-16 w-full items-center justify-between bg-white px-12 py-4 lg:px-24  ">
      <h1 className="text-2xl font-bold">Hassan Kaabechi</h1>
      <div className="hidden w-2/3 sm:flex sm:justify-between">
        <div className=" flex w-3/4 items-center justify-end gap-5 ">
          <Link href={"#home"}>Home</Link>
          <Link href={"#about"}>About</Link>
          <Link href={"#projects"}>Projects</Link>
          <Link href={"#contact"}>Contact</Link>
        </div>
        <a
          href={"/Hassan_Kaabechi_Resume.pdf"}
          download={true}
          className="flex cursor-pointer items-center justify-center text-blue-500 lg:gap-4"
        >
          Download CV
          <FontAwesomeIcon icon={faDownload} height={24} width={24} />
        </a>
      </div>
      <div
        className="flex cursor-pointer justify-end sm:hidden"
        onClick={() => {
          setToggleNav((prev) => !prev);
        }}
      >
        <FontAwesomeIcon
          icon={faNavicon}
          height={24}
          width={24}
          className=" text-slate-700"
        />
      </div>
      {toggleNav && (
        <div className="absolute right-0 top-full mt-3 flex w-1/2 min-w-[210px] flex-col items-end justify-end gap-2 rounded-lg bg-white p-5">
          <Link href={"#home"}>Home</Link>
          <Link href={"#about"}>About</Link>
          <Link href={"#projects"}>Projects</Link>
          <Link href={"#contact"}>Contact</Link>
          <a
            href={"/Hassan_Kaabechi_Resume.pdf"}
            download={true}
            className="flex cursor-pointer items-center justify-center text-blue-500 lg:gap-4"
          >
            Download CV
            <FontAwesomeIcon icon={faDownload} height={24} width={24} />
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
