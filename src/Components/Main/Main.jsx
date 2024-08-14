import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Context } from '../Context/Context'

function Main() {
    
    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

    return (
        <div className='flex-1 min-h-screen pb-[15vh] relative' id="main">
            <div className='flex items-center justify-between text-[22px] p-5 text-[#585858]' id="nav">
                <p>Gemini</p>
                <img className='w-10 rounded-full' src={assets.user_icon} alt="" />
            </div>
                <div className='max-w-[900px] m-auto' id="main-container">
            {!showResult? <>
                <div className='mt-7 text-[56px] text-[#c4c7c5] font-medium p-5' id="greet">
                    <p><span id='greet-span'>Hello, Arnav</span></p>
                    <p className='mt-0'>How can I help you today?</p>
                </div>
                <div id='cards'>
                    <div id="card">
                        <p>Suggest an organized list of the best food spots in a city</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div id="card">
                        <p>Briefly summarize this concept: urban planning</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div id="card">
                        <p>I’m sick and need help crafting a text message for my boss</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div id="card">
                        <p>Evaluate and rank common camera categories</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
            </> : <div id='result'>
                <div id="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div id='result-data'>
                    <img src={assets.gemini_icon} alt="" />
                    {loading? <div id='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div> : <p className='text-[17px] font-light ' dangerouslySetInnerHTML={{__html:resultData}}></p>}
                    
                </div>
            </div>
              
            }
           
                <div id="main-bottom">
                    <div id="search-box">
                        <input onChange={(e)=>{setInput(e.target.value)}} value={input} type="text" placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p id='bottom-info'>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
                </div>
            </div>
        </div>
    )
}

export default Main
