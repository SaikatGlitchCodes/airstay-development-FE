import React, {useState} from 'react'
import baba from '../assests/images/baba.gif';


export default function Game() {
  const [position, setPosition] = useState({x:0,y:0});

  const rightFunction = () =>{
    setPosition({...position, x: position.x+20})
  }
  const leftFunction = () =>{
    setPosition({...position, x: position.x-20})
  }
  return (
    <div className="w-[100vw] h-[100vh] game_screen ">
        <div className='h-[500px] w-[900px] bg-shadow m-auto overflow-hidden'>
          <img src={baba} className='h-40' style={{marginLeft: position.x, marginTop: position.y}} />
        </div>
        <div className='flex justify-center gap-6 x-direction mt-7'> 
          <i onClick={leftFunction} className="text-6xl fi fi-ss-angle-square-left"></i>
          <i onClick={rightFunction} className="text-6xl fi fi-ss-angle-square-right"></i>
        </div>
    </div>
  )
}
