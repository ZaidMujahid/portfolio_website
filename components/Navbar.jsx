import { useState } from 'react';
import {MdDarkMode} from 'react-icons/md';
import {CiLight} from 'react-icons/ci';
import {GiHamburgerMenu} from 'react-icons/gi';
import {GrFormClose} from 'react-icons/gr';
import { useTheme } from "next-themes";

const Navbar = () => {
    const [nav, setNav] = useState(true);
    const [dark, setDark] = useState(false);
    const { theme, setTheme } = useTheme();
    // const currentTheme = theme === 'system' ? systemTheme : theme;
    return (
        <div className="flex justify-between bg-white dark:bg-slate-500 dark:shadow-slate-700 rounded-b-2xl shadow-2xl fixed top-0 w-full mb-4">
            <div className="text-3xl font-bold p-2 ml-14 pt-3 inline"> 
                {nav && <button className='md:hidden mr-4 pt-2' onClick={() => setNav(false)}>
                    <GiHamburgerMenu/>
                </button>}
                {nav && <a href="#home" className='font-bold text-4xl md:text-3xl'>ZAID</a>}
            </div>
            {nav && <div className="md:flex text-lg font-semibold p-2 mr-6 hidden">
                <a href="#home" className="p-2 pr-6">Home</a>
                <a href="#about" className="p-2 pr-6">About</a>
                <a href="#projects" className="p-2 pr-6">Projects</a>
                <a href="#skills" className="p-2 pr-6">Skills</a>
                {/* {dark && <button onClick={() => setDark(false) ? setTheme('light'): setTheme("dark")} className="p-2 pr-6 text-xl pt-1.5"><CiLight/></button>}
                {!dark && <button onClick={() => setDark(true) ? setTheme('dark'): setTheme("light")} className="p-2 pr-6 text-xl pt-1.5"><MdDarkMode/></button>} */}
            </div>}
            {!nav && <div className="flex text-lg font-semibold p-2 flex-col mr-[550px] mt-2">
                {/* <a href="#home" className='text-3xl font-bold pb-4' onClick={() => setNav(true)}>ZAID</a> */}
                <button className='md:hidden inline text-4xl font-bold mb-4' onClick={() => setNav(true)}><GrFormClose/></button>
                <a href="#home" className="text-2xl p-2 pr-6" onClick={() => setNav(true)}>Home</a>
                <a href="#about" className="text-2xl p-2 pr-6" onClick={() => setNav(true)}>About</a>
                <a href="#skills" className="text-2xl p-2 pr-6" onClick={() => setNav(true)}>Skills</a>
                <a href="#projects" className="text-2xl p-2 pr-6" onClick={() => setNav(true)}>Projects</a>  
            </div>}
            {nav && <div className="flex mr-14">
                <a href="https://leetcode.com/ZaidMujahid/" target="_blank" className="text-3xl p-2 pt-4 mt-[2px] md:mt-0"><span><img src="/leetcode.png" alt="" /></span></a>
                {/* {!dark && <button onClick={() => setDark(true) ? setTheme('dark'): setTheme("light")} className="p-2 pr-6 text-3xl pt-1 md:hidden"><MdDarkMode/></button>}
                {dark && <button onClick={() => setDark(false) ? setTheme('light'): setTheme("dark")} className="p-2 pr-6 text-3xl pt-1 md:hidden"><CiLight/></button>} */}
            </div>}
        </div>
    );
}

export default Navbar;