"use client"
import LaunchIcon from '@mui/icons-material/Launch';
import Link from 'next/link'
import React, { MouseEventHandler, useState } from 'react'
import projectImage from "../../../public/1.jpg"
import Image from 'next/image';
interface Blog {
    image:string,
    topic:string,
    title: string;
    time: string;
    id: number;
    content: string; // Optional property
  }
type AppProps = {
    blog:Blog
}
function BlogCard({blog}:AppProps) {
    const [expand,setExpand]=useState(false);
    const [toggleShowLaunch,setToggleShowLaunch]= useState(false)
    const showLaunch = ()=>{
        setToggleShowLaunch(true)
    }
    const hideLaunch=()=>{
        setToggleShowLaunch(false)
    }
  return (
    <div onMouseLeave={hideLaunch} onMouseEnter={showLaunch}  className=" bg-white  flex flex-col pb-2 rounded-2xl shadow-md ring-1  ring-slate-400 overflow-hidden">
      <div className="relative">
        <Image src={projectImage} className="object-cover w-full aspect-3/2"  alt="blog-image" />
        <span className="p-2 text-white bg-orange-600 text-sm font-bold capitalize rounded-lg absolute bottom-3 left-3">
          {blog.topic}
        </span>
        { toggleShowLaunch &&
        <Link href={`/blogs/1`} className="absolute flex px-4 py-2 gap-2 top-0 right-0 m-4 rounded-lg text-sm text-white bg-black bg-opacity-60 items-center justify-between">
            Read 
            <LaunchIcon/>
        </Link>
}
      </div>
      <div className="p-4 ">
        <div className="flex gap-4 justify-between items-baseline">
        <h1 className="font-bold text-2xl mb-2 max-w-[80%] ">{blog.title}</h1>
        <p className="text-slate-500 text-sm mb-2 ">{blog.time}</p>
        </div>
        <p className="text-gray-400">
          {expand == false  ? blog.content.substring(0,50)+"..." : blog.content  }
          <span  onClick={()=>{
            setExpand(prev=>!prev)
          }} className="font-bold cursor-pointer text-blue-800">
            {
          expand == false ? blog.content.length > 20 ? " See more" : "" : " See more"
          }</span>
        </p>
      </div>
    </div>
  )
}

export default BlogCard