'use client'
import React from 'react'
import Link from 'next/link'
import {BiMenu} from "react-icons/all"
function dropdown() {
  return (
    <div>
      <div className="dropdown dropdown-end">
  <label tabIndex={0} className="btn m-1 rounded-full bg-red-500 border-red-500    w-12  border-none   "><div className='text-xl pt-[-20px] pb-[-3px]'><BiMenu/></div></label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><Link href='/'>Home</Link></li>
    <li><Link href='#features' >Features</Link></li>
    <li><Link href='#about'>About</Link></li>
    <li><Link href='#products'>Products</Link></li>
  </ul>
</div>      
    </div>
  )
}

export default dropdown
