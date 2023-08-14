const Hero = () => {
    return (
        <div id="home" className="flex md:flex-row flex-col-reverse m-16 2xl:mx-32 bg-white dark:bg-slate-500 dark:shadow-slate-600 rounded-2xl shadow-2xl p-6 mt-32 2xl:pr-20">
            <div className="lg:mx-8 2xl:mx-20 justify-center">
                <div className="flex flex-col justify-center m-8 lg:ml-16">
                    <p className="text-xl lg:text-2xl 2xl:text-3xl font-semibold mt-8 ">Hello I&apos;m <span className="text-darkBlue text-4xl lg:text-5xl 2xl:text-6xl font-semibold"><br />Zaid Mujahid</span></p>
                    <p className="text-md lg:text-xl 2xl:text-2xl font-bold pt-4">I&apos;m a <span className="text-slate-900">Web Developer, </span><span className="text-xl text-blue-400">G</span>
                        <span className="text-md lg:text-xl text-red-400">o</span>
                        <span className="text-md lg:text-xl text-yellow-500">o</span>
                        <span className="text-md lg:text-xl text-blue-400">g</span>
                        <span className="text-md lg:text-xl text-green-400">l</span>
                        <span className="text-md lg:text-xl text-red-400">e </span> DSC Web Lead, <br className="hidden md:block" />and a lifelong learner based in India. <br className="hidden md:block" /> When I&apos;m weary of coding I play football.</p>
                </div>
                <div className="m-6 md:mt-16 ml-14">
                    <button className="bg-gradient-to-r from-lightBlue to-lightPink dark:bg-gradient-to-r dark:from-slate-800 dark:to-blue-500 rounded-lg p-2 m-2 text-white font-semibold shadow-lg">
                        <a href="https://drive.google.com/file/d/1mTZCETt916YWoMBBvURadJSgDclkNmnf/view?usp=drive_link" target="_blank" className="p-2">Resume</a>
                    </button>

                    <button className="rounded-lg p-2 m-2
                     font-semibold dark:bg-white dark:shadow-md dark:shadow-slate-700">
                        <a href="#contact" className="bg-white px-3 py-[10px]
                        text-lightPink dark:bg-white dark:px-1 rounded-lg dark:text-darkBlue dark:shadow-none shadow-lightBlue shadow-md pb-2">Contact Me</a>
                    </button>
                </div>
            </div>
            <div className="bg-gradient-to-r from-lightBlue to-lightPink dark:bg-gradient-to-r dark:from-slate-400 dark:to-blue-200 rounded-t-full rounded-r-full rounded-l-full overflow-hidden mx-auto md:w-[10rem] md:h-[9rem] lg:w-[17rem] lg:h-[16.5rem] xl:h-[16rem] xl:w-[16rem] 2xl:h-[18rem] 2xl:w-[18rem] my-auto md:mr-20">
                <img src="/Hero.png" alt="Not Found" className="" />
            </div>
        </div>
    );
}

export default Hero;