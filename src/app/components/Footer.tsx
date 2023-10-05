import { faAnchor } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-4 bg-black p-24 text-white lg:px-48">
      <h1 className="text-md text-center font-bold lg:text-2xl">
        Copyright © 2023. All rights are reserved
      </h1>
      <div className="flex gap-4">
        <FontAwesomeIcon icon={faAnchor} height={24} width={24} />
        <FontAwesomeIcon icon={faAnchor} height={24} width={24} />
      </div>
    </div>
  );
}

export default Footer;
