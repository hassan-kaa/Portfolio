import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React from 'react'

function Contact() {
  return (
    <div id='contact' className='w-full flex flex-col gap-6 items-center justify-between lg:px-[20%] p-12  lg:items-start ' >
        <h2 className="font-2xl font-bold uppercase text-blue-500">Contact</h2>
        <h1 className="font-bold text-2xl">Hit me up !👇🏻</h1>
        
        <div className="flex flex-col gap-4 items-center justify-between lg:flex-row ">
            <div className="text-blue-500 shadow-md shadow-slate-300 rounded-full p-6">
            <LocationOnIcon />
            </div>
            <div className="flex flex-row lg:flex-col lg:items-start gap-4">
            <h2 className="text-xl font-bold">Location</h2>
            <p className="text-xl text-slate-700">Tunis, Tunisia</p>
            </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-between lg:flex-row">
            <div className="text-blue-500 shadow-md shadow-slate-300 rounded-full p-6">
            <MailOutlinedIcon/>
            </div>
            <div className="flex flex-row lg:flex-col lg:items-start gap-4">
            <h2 className="text-xl font-bold">mail</h2>
            <p className="text-xl text-slate-700">hassan.kaabechi@esprit.tn</p>
            </div>
        </div>
    </div>
  )
}

export default Contact