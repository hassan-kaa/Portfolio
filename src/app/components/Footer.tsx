
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from "react";
import Link from 'next/link';

function Footer() {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-4 bg-black p-24 text-opacity-70 text-white lg:px-48">
      <h1 className="text-md text-center font-bold lg:text-2xl">
        Copyright © 2023. All rights are reserved
      </h1>
      <div className="flex gap-4">
      <Link href="https://github.com/hassan-kaa" className="cursor-pointer hover:text-white">
            
            <GitHubIcon/>
          </Link>
          <Link
            href="https://www.linkedin.com/in/hassan-kaabechi-250363229/"
            className="cursor-pointer hover:text-white"
          >
            <LinkedInIcon/>
          </Link>
      </div>
    </div>
  );
}

export default Footer;
