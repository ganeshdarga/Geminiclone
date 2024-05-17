import React, { useContext, useState } from 'react'
import {assets} from '../../Asserts/assets'
import '../../components/Sidenavbar/Sidenavbar.css'
import { Context } from '../../context/context'

const Sidenavbar = () => {

    const [activte,setactive]=useState(false)
    const {onSent,previousPrompt,setRecentPrompt} = useContext(Context)

    function expand(){
        if (activte === false){
            setactive(true)
        }else{
            setactive(false)
        }
    }

  return(
    <div className='sidenavbar'>
        <div className='top'>
            <img onClick={expand} className='menu' src={assets.menu_icon}></img>
            <div className='new-chat'>
                <img  src={assets.plus_icon}></img>
                {activte ?
                <p>New Chat</p>:null}
            </div>
            {activte ?
            <div className='recent'>
                <p>Recent</p>
            </div>:null}

            

            {previousPrompt.map((item,index)=>{
                        return(
                            <>
                            {activte ?
                            <div className='recent1'>
                                <img src ={assets.message_icon}></img>
                                <p>{item.slice(0,18)}...</p>
                            </div>:null}
                            </>
                        )
            })}
        </div>

        <div className='bottom'>
            <div className='help recent' >
                <img src={assets.question_icon}></img>
                {activte ?
                <p>Help</p>:null}
            </div>
            <div className='activity recent'>
                <img src={assets.history_icon}></img>
                {activte ?
                <p>Activity</p>:null}
            </div>
            <div className='settings recent'>
                <img src={assets.setting_icon}></img>
                {activte ?
                <p>Settings</p>:null}
            </div>
        </div>

    </div>

    )
}

export default Sidenavbar