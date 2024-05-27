/* eslint-disable react/jsx-key */
import { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon, FilmIcon } from '@heroicons/react/24/solid'

function NavBar() {
    let Links =[
        {name:"MOVIES",link:"/"},
        {name:"STREAMING",link:"/"},
        {name:"TRAILERS & INTERVIEWS",link:"/"},
        {name:"NEWS",link:"/"},
        {name:"MADE IN HOLLYWOOD",link:"/"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0 bg-[#2e2e2e]'>
           <div className='md:flex items-center justify-between py-4 md:px-0 px-7 md:max-w-[1100px] m-auto'>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                <FilmIcon className='w-7 h-7 text-[#2FC4EC]'/>
                <span className='text-white pl-2'>MovieRank</span>
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden z-[1] w-7 h-7 text-white'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#2e2e2e] md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-regular'>
                        <a href={link.link} className='text-white hover:text-[#2FC4EC] duration-500'>{link.name}</a>
                    </li>))
                }
            </ul>
            {/* button */}
           </div>
        </div>
    );
}

export default NavBar