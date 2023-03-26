const Hero = () => {
    return ( 
        <div id="home" className="flex md:flex-row flex-col-reverse md:justify-between m-16 bg-white dark:bg-slate-500 dark:shadow-slate-600 rounded-2xl shadow-2xl p-6 mt-32">
            <div className="md:mx-8 justify-center">
                <div className="flex flex-col justify-center m-8 ml-16">
                    <p className="text-2xl font-semibold mt-8 ">Hello I&apos;m <span className="text-slate-900 text-5xl font-semibold"><br />Zaid Mujahid</span></p>
                    <p className="text-xl font-bold pt-4">I&apos;m a <span className="text-slate-900">Web Developer, </span><span className="text-xl text-blue-400">G</span>
                    <span className="text-xl text-red-400">o</span>
                    <span className="text-xl text-yellow-500">o</span>
                    <span className="text-xl text-blue-400">g</span>
                    <span className="text-xl text-green-400">l</span>
                    <span className="text-xl text-red-400">e </span> DSC Web Lead, <br className="hidden md:block"/>and a lifelong learner based in India. <br className="hidden md:block"/> When I&apos;m weary of coding I play football.</p>
                </div>
                <div className="m-6 md:mt-16 ml-14">
                    <button className="bg-gradient-to-r from-orange-400 to-yellow-300 dark:bg-gradient-to-r dark:from-slate-800 dark:to-blue-500 rounded-lg p-2 m-2 text-white font-semibold shadow-lg">
                        <a href="https://drive.google.com/file/d/1Tmetd0SiLrkVy4Ii-l6UhmFH76p02XfN/view?usp=drivesdk" target="_blank" className="p-2">Resume</a>
                    </button>
                    
                    <button className="rounded-lg p-2 m-2 font-semibold dark:bg-white">
                        <a href="#contact" className="bg-white px-3 py-[6px]
                        bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-300 dark:bg-gradient-to-r dark:from-slate-800 dark:to-blue-500 rounded-lg dark:shadow-none shadow-orange-200 shadow-lg">Contact Me</a>
                    </button> 
                </div>
            </div>
            <div className="bg-gradient-to-r from-orange-300 to-yellow-300 dark:bg-gradient-to-r dark:from-slate-400 dark:to-blue-200 rounded-t-full rounded-r-full rounded-l-full overflow-hidden mx-auto w-[14rem] md:w-[18rem] md:h-[18rem] my-auto md:mr-20 effect dark:effectt">
                <img src="/Hero.png" alt="Not Found" className=""/>
            </div>
        </div>
    );
}
 
export default Hero;