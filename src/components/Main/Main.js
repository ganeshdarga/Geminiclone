import React, { useContext } from 'react'
import './Main.css'
import {assets} from '../../Asserts/assets'
import { Context } from '../../context/context'

const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}= useContext(Context)

  return (
    <div className='main'>
        <div className='nav'>
            <p>Gemini</p>
            <img src={assets.ai}></img>
        </div>
        <div className='main-container'>

            {!showResult
            ?<>
                        <div className='greet'>
                <p><span>Hello, dev</span></p>
                <p>How can i help today</p>
            </div>
            {/* <div className='cards'>
                <div className='card'>
                    <p>Suggest beautiful places to see on an upcomming road trip</p>
                    <img src={assets.compass_icon}></img>
                </div>
                <div className='card'>
                    <p>Breafily summarize this concept urban planning</p>
                    <img src={assets.bulb_icon}></img>
                </div>
                <div className='card'>
                    <p>Suggest beautiful places to see on an upcomming road trip</p>
                    <img src={assets.message_icon}></img>
                </div>
                <div className='card'>
                    <p>Suggest beautiful places to see on an upcomming road trip</p>
                    <img src={assets.code_icon}></img>
                </div>
            </div> */}
            </>
            :<div className='result'>
                <div className='result-title'>
                    <img src={assets.ai}></img>
                    <p>{recentPrompt}</p>

                </div>
                <div className='result-data'>
                    <img src={assets.gemini_icon}></img>
                    {loading
                    ?<div className='loader'>
                        <hr></hr>
                        <hr></hr>
                        <hr></hr>
                    </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                   

                </div>



            </div>
            }
            <div className='main-bottom'>
                <div className='search-box'>
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Enter a promp heare'></input>
                    <div>
                        <img src={assets.gallery_icon}></img>
                        <img src={assets.mic_icon}></img>
                        <img onClick={()=>onSent()} src={assets.send_icon}></img>
                    </div>

                </div>
                <p className='bottom-info'>
                        My name is Gemini feel free to ask
                    </p>

            </div>

        </div>

    </div>
  )
}

export default Main