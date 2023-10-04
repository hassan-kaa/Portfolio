import { faLink, faAd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
function Hero() {
  return (
    <div className="lg:px-custom flex w-full flex-col items-center justify-center gap-12 bg-slate-200 px-20 py-4 lg:flex-row-reverse lg:items-start  lg:gap-12 lg:py-40">
      <div className="lg:min-w-80 aspect-square max-h-80 max-w-sm animate-custom overflow-hidden border-4 border-solid border-black bg-slate-400 lg:max-h-96 lg:max-w-md">
        <img
          alt="photo"
          src={"/photo.png"}
          className=" h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 lg:items-start lg:justify-start">
        <h1 className="text-center text-4xl font-extrabold leading-normal lg:max-w-2xl lg:text-start lg:text-5xl lg:leading-relaxed ">
          Software Engineering Student / Web Developer 👋🏻
        </h1>
        <p className="text-center text-xl font-light lg:max-w-lg lg:text-start">
          Hi, I'm Hassan Kaabechi. A software engineering student @ my last year
          and passionate web developer based in Tunis, Tunisia. 📍
        </p>
        <div className="flex items-center justify-center gap-4 text-black">
          <Link href="/" className="cursor-pointer">
            <FontAwesomeIcon height={32} width={32} icon={faLink} />
          </Link>
          <Link href="/" className="cursor-pointer">
            <FontAwesomeIcon height={32} width={32} icon={faAd} />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:items-start lg:justify-start lg:gap-8 ">
          <h2 className="text-xl font-bold underline">Tech stack</h2>

          <div className="flex items-center justify-center gap-4 ">
            <Image src={"/node-js.png"} alt="node" width={48} height={48} />
            <Image src={"/typescript.png"} alt="node" width={48} height={48} />
            <Image src={"/js.png"} alt="node" width={48} height={48} />
            <Image src={"/next.svg"} alt="node" width={48} height={48} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
