import React,{useEffect} from 'react'
import {Link, useLocation, UNSAFE_NavigationContext as NavigationContext } from 'react-router-dom'
import {useBlocker, usePrompt} from './CustomHook.js'
function Navbar({isSave}) {
    console.log(isSave)
      
    usePrompt('Leaver?' , isSave)
// console.log(useLocation())

  return (
    <div>
        {/* <usePrompt when={!isSave} message={() => 'Leave?'}/> */}
        <Link to='/shop'>Shop</Link>
        <Link to='/sales'>Sales</Link>
        <Link to='/story'>Story</Link>
    </div>
  )
}

export default Navbar