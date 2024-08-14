import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { Context } from '../Context/Context'

function Sidebar() {
    const [extended, setExtended] = useState(false)
    const {onSent, prevPrompt, setPrevPrompt} = useContext(Context)

    return (
        <div className='min-h-screen inline-flex flex-col justify-between bg-[#f0f4f9]' id="Sidebar">
            <div id="top">
                <img onClick={() => setExtended(prev=>!prev)} className='block ml-[10px] cursor-pointer' id='menu-icon' src={assets.menu_icon} alt="" />
                <div className='mt-[50px] inline-flex items-center gap-[10px] bg-[#e6eaf1] rounded-[50px] text-[14px] text-gray-400 cursor-pointer' id='new-chat'>
                    <img src={assets.plus_icon} alt="" />
                    {extended?<p>New Chat</p>:null}
                </div>
                {extended?<div className='flex flex-col'>
                        <p id='recent-title' className='mt-[30px] mb-5'>Recent</p>
                        {prevPrompt.map((item, index) => {
                            return(
                    <div className='flex items-start gap-[10px] p-[10px] pr-[10px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]'>
                        <img src={assets.message_icon} alt="" />
                        <p>{item.slice(0,18)}...</p>
                    </div>
                    )
                    })}
                </div>:null}
            </div>
            <div id="bottom" className='flex flex-col'>
                <div className='pr-[10px] cursor-pointer flex gap-2 items-center'>
                    <img src={assets.question_icon} alt="" />
                    {extended?<p>Help</p>:null}
                </div>
                <div className='pr-[10px] cursor-pointer mt-3 flex gap-2'>
                    <img src={assets.history_icon} alt="" />
                    {extended?<p>Activity</p>:null}
                </div>
                <div className='pr-[10px] cursor-pointer mt-3 flex gap-2'>
                    <img src={assets.setting_icon} alt="" />
                    {extended?<p>Settings</p>:null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
