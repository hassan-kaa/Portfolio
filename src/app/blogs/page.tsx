import React from 'react'
import BlogCard from './BlogCard'
const blogs =[{id:1,title:"Do I really need Next js ?" , image:"/desk.jpg", content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quod facere exercitationem iste minus, provident magni, corrupti nihil reprehenderit quas laudantium modi voluptatibus recusandae nulla! Laudantium eligendi placeat nesciunt molestiae!",topic:"FullStack",time:"5m read"},
{title:"Tailwind ... Bye bye CSS ?" ,id:2, image:"/1.jpg", content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quod facere exercitationem iste minus, provident magni, corrupti nihil reprehenderit quas laudantium modi voluptatibus recusandae nulla! Laudantium eligendi placeat nesciunt molestiae!",topic:"Frontend",time:"7m read"}
,{id:3,title:"Right way to build responsive web app" , image:"/2.jpg", content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quod facere exercitationem iste minus, provident magni, corrupti nihil reprehenderit quas laudantium modi voluptatibus recusandae nulla! Laudantium eligendi placeat nesciunt molestiae!",topic:"Frontend",time:"10m read"},
{title:"Complete intro into AWS",id:4 , image:"/3.jpg", content:"lorem",topic:"cloud",time:"12m read"}]
function page() {
  return (
    <div className='grid xl:grid-cols-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-12 py-20 '>
        {blogs.map(blog=><BlogCard key={blog.id} blog={blog}/>)}
    </div>
  )
}

export default page