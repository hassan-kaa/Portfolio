import { faLink, faAd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
function Hero() {
  return (
    <div
      id="hero"
      className="lg:px-custom flex w-full flex-col items-center justify-center gap-12 px-20  py-4 pt-20 lg:flex-row-reverse lg:items-start  lg:gap-12 lg:py-40"
    >
      <div className=" aspect-square max-h-80 max-w-sm animate-custom overflow-hidden border-4 border-solid border-black  lg:max-h-96 lg:max-w-md">
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
          <Link href="https://github.com/hassan-kaa" className="cursor-pointer">
            <FontAwesomeIcon height={32} width={32} icon={faLink} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/hassan-kaabechi-250363229/"
            className="cursor-pointer"
          >
            <FontAwesomeIcon height={32} width={32} icon={faAd} />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 lg:items-start  lg:gap-8 ">
          <div className="flex w-full flex-col items-center justify-center gap-4 lg:grid lg:grid-cols-4 lg:grid-rows-2 ">
            <h2 className="font-ligt  text-lg ">Main Tech Stack </h2>
            <div className="col-span-3 flex items-center justify-center gap-4 lg:justify-start ">
              <Image src={"/html-5.png"} alt="html" width={48} height={48} />
              <Image src={"/css-3.png"} alt="css" width={48} height={48} />
              <Image src={"/js.png"} alt="js" width={48} height={48} />
              <Image src={"/typescript.png"} alt="ts" width={48} height={48} />
              <Image
                className="rounded-md"
                src={"/react.png"}
                alt="react"
                width={48}
                height={48}
              />
              <Image src={"/next.svg"} alt="next" width={48} height={48} />
            </div>
            <h2 className="font-ligt text-lg">Other Skills </h2>
            <div className="col-span-3 flex items-center justify-center gap-4 lg:justify-start">
              <Image src={"/node-js.png"} alt="node" width={48} height={48} />
              <Image src={"/spring.png"} alt="spring" width={48} height={48} />
              <Image
                src={"/angular.png"}
                alt="angular"
                width={48}
                height={48}
              />
              <Image src={"/nest.png"} alt="nest" width={48} height={48} />

              <Image src={"/aws.png"} alt="aws" width={48} height={48} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
