import React from 'react'
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Navbar = () =>{
      const [menuOpen, setMenuOpen] = React.useState(false);
      const navigate = useNavigate()
  return (
    <>
      <nav className="z-50 flex items-center justify-between w-full py-4 px-4 md:px-16 lg:px-24 xl:px-32 backdrop-blur border-b text-white border-slate-800">
        <Link to='/'>
             <img src={assets.logo} alt="logo" className='h-5 sm:h-7'/>
          </Link>

          <div className="hidden md:flex items-center gap-8 transition duration-500">
            <Link to='/'>Home</Link>
            <Link to='/projects'> My Projects</Link>
            <Link to='/community'>Community</Link>
            <Link to='/pricing'>Pricing</Link>
          </div>

          <div className="flex items-center gap-3">
            
            <button  onClick={() => navigate('/auth/signin')}className="px-6 py-1.5 max-sm:text-sm  bg-indigo-600 active:scale-95 hover:bg-indigo-700 transition rounded-md">
              Get started
            </button>
             <button id="open-menu" className="md:hidden active:scale-90 transition" onClick={() => setMenuOpen(true)} >
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
          </button>
          </div>

         
        </nav>
        {/* Mobile menu */}
        {menuOpen && (

         <div className="fixed inset-0 z-[100] bg-black/60 text-white backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300">
            <Link to='/'onClick={() => setMenuOpen(false)}>Products</Link>
            <Link to='/projects' onClick={() => setMenuOpen(false)}>My Projects</Link>
            <Link to='/community' onClick={() => setMenuOpen(false)}>Community</Link>
            <Link to='/pricing' onClick={() => setMenuOpen(false)}>Pricing</Link>
            
            <button className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-slate-100 hover:bg-slate-200 transition text-black rounded-md flex" onClick={() => setMenuOpen(false)} >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
        )}

         {/* BACKGROUND IMAGE */}
          <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/hero/bg-gradient-2.png" className="absolute inset-0 -z-10 size-full opacity" alt="" />

    </>
  )
}

export default Navbar
