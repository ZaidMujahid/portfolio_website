import Image from "next/image";
import { DiReact } from 'react-icons/di';
import { DiNodejsSmall } from 'react-icons/di';
import { DiJavascript1 } from 'react-icons/di';
import { SiMongodb } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { SiYoutube } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { SiElectron } from 'react-icons/si';
import { FiSend } from 'react-icons/fi';


const Projects = () => {
    return ( 
        <div id="projects">
            <div className="text-center">
                <p className="text-5xl text-white font-bold mb-12">Projects</p>
            </div>
            {/* project card */}
            <div className="mx-16 2xl:mx-32 bg-white flex md:flex-row flex-col pt-2 rounded-xl shadow-2xl mb-6 dark:bg-slate-500">
                <div className="lg:w-[800px]">
                    <Image src="/EHR.png" width={700} height={300} alt="" className="object-cover rounded-xl shadow-md h-[85%] w-[95%] md:w-[100%] mx-auto sm:mx-4 mt-[18px]"/>
                </div>

                <div className="sm:ml-6 ml-4 md:mt-2">
                    <p className="text-2xl lg:text-3xl 2xl:text-4xl font-bold p-2 text-darkBlue">Electronic Health Record(48hours National level Hackathon)</p>
                    <p className="font-medium 2xl:text-[24px] lg:text-xl px-2 pr-4 xl:pr-8 2xl:py-4">As a team member, I contributed by designing and developing the landing page. Additionally, I worked on the patient details section, which involved collecting and organizing patient information and ensuring its accurate representation.</p>
                    <div className="flex justify-between xl:pt-8 pt-2 mb-4">
                        <div className="flex 2xl:mt-[3em]">
                            <span className="text-2xl 2xl:text-3xl p-1 text-sky-500"><DiReact/></span>
                            <span className="text-2xl 2xl:text-3xl p-1 text-green-800"><DiNodejsSmall/></span>
                            <span className="text-2xl 2xl:text-3xl p-1 text-green-500"><SiMongodb/></span>
                            <span className="text-2xl 2xl:text-3xl p-1 text-sky-500"><SiTailwindcss/></span>
                            <span className="text-2xl 2xl:text-3xl p-1 text-orange-500"><SiFirebase/></span>
                        </div>
                        <div className="flex mr-2 pr-8 2xl:mt-[3em]">
                            <a href="https://github.com/orgs/Error404-5-0/repositories" target="_blank" className="text-2xl 2xl:text-3xl p-1"><span><SiGithub/></span></a>
                            {/* <a href="#"  className="text-2xl p-1"><span><FiSend/></span></a>
                            <a href="#"  className="text-2xl p-1 text-red-600"><span><SiYoutube/></span></a> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* project card */}
            <div className="mx-16 2xl:mx-32 py-2 bg-white flex rounded-xl shadow-2xl mb-6 md:flex-row flex-col dark:bg-slate-500">
                <div>
                    <Image src="/MedTracker.png" width={650} height={300} alt="" className="object-cover rounded-xl shadow-md h-[90%] w-[95%] mx-auto sm:mx-4 mt-3"/>
                </div>

                <div className="sm:ml-2 ml-4 md:mt-2">
                    <p className="text-2xl lg:text-3xl 2xl:text-4xl font-bold p-2 text-darkBlue">Medicine Tracker</p>
                    <p className="font-medium 2xl:text-[24px] lg:text-xl px-2 pr-4 xl:pr-8 2xl:py-4">A fully responsive MERN App with authentication that you can use to keep track of your
medicines and appointments. Implemented authentication using JSON Web Tokens (JWT) and storing users data in
MongoDB.</p>
                    <div className="flex justify-between xl:pt-8 pt-2 mb-4">
                        <div className="flex 2xl:mt-[5em]">
                            <span className="text-2xl 2xl:text-3xl p-1 text-sky-500"><DiReact/></span>
                            <span className="text-2xl 2xl:text-3xl p-1 text-green-800"><DiNodejsSmall/></span>
                            <span className="text-2xl 2xl:text-3xl p-1 text-green-500"><SiMongodb/></span>
                            <span className="text-2xl 2xl:text-3xl p-1 text-sky-500"><SiTailwindcss/></span>
                        </div>
                        <div className="flex mr-2 pr-8 2xl:mt-[5em]">
                            <a href="https://github.com/ZaidMujahid/MedTracker" target="_blank" className="text-2xl 2xl:text-3xl p-1"><span><SiGithub/></span></a>
                            {/* <a href="#"  className="text-2xl p-1"><span><FiSend/></span></a> */}
                            <a href="https://www.youtube.com/watch?v=lpJd2r-QcF8&ab_channel=ZaidMujahid" target="_blank" className="text-2xl 2xl:text-3xl p-1 text-red-600"><span><SiYoutube/></span></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* project card */}
            <div className="mx-16 2xl:mx-32 py-2 bg-white flex rounded-xl shadow-2xl mb-6 md:flex-row flex-col dark:bg-slate-500">
                <div>
                    <Image src="/GymPartner.png" width={650} height={300} alt="" className="object-cover rounded-xl shadow-md h-[90%] w-[95%] mx-auto sm:mx-4 mt-3"/>
                </div>

                <div className="sm:ml-2 ml-4 md:mt-2">
                    <p className="text-2xl lg:text-3xl 2xl:text-4xl font-bold p-2 text-darkBlue">Your Gym Partner</p>
                    <p className="font-medium 2xl:text-[24px] lg:text-xl px-2 pr-4 xl:pr-8 2xl:py-4">A Fully responsive React App which shows different exercises along with their videos link
for YouTube. Rapid API is used for fetching exercises data and for YouTube videos. Implemented
features like Pagination.</p>
                    <div className="flex justify-between xl:pt-8 pt-2 mb-4">
                        <div className="flex 2xl:mt-[5em]">
                            <span className="text-2xl 2xl:text-3xl p-1 text-sky-500"><DiReact/></span> 
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="" className="w-7 p-1 mt-1 2xl:text-3xl"/>
                        </div>
                        <div className="flex mr-2 pr-8 2xl:mt-[5em]">
                            <a href="https://github.com/ZaidMujahid/Gym-website" target="_blank" className="text-2xl 2xl:text-3xl p-1"><span><SiGithub/></span></a>
                            <a href="https://your-gym-partner.netlify.app/" target="_blank" className="text-2xl 2xl:text-3xl p-1"><span><FiSend/></span></a>
                            <a href="https://www.youtube.com/watch?v=BZ4-qgUOIlQ&ab_channel=ZaidMujahid" target="_blank" className="text-2xl 2xl:text-3xl p-1 text-red-600"><span><SiYoutube/></span></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* project card */}
            <div className="mx-16 2xl:mx-32 py-2 bg-white flex rounded-xl shadow-2xl mb-6 md:flex-row flex-col dark:bg-slate-500">
                <div className="lg:w-[860px]">
                    <Image src="/YoutubeClone.png" width={650} height={300} alt="" className="object-cover rounded-xl shadow-md h-[90%] w-[95%] mx-auto sm:mx-4 mt-3"/>
                </div>

                <div className="sm:ml-2 ml-4 md:mt-2">
                    <p className="text-2xl lg:text-3xl 2xl:text-4xl font-bold p-2 text-darkBlue">Youtube 2.0</p>
                    <p className="font-medium 2xl:text-[24px] lg:text-xl px-2 pr-4 xl:pr-8 2xl:py-4">A YouTube clone using React.js and Tailwind CSS, integrating the YouTube v3 API to replicate core functionalities and features.
Implemented responsive design principles to ensure a seamless user experience across various devices.</p>
                    <div className="flex justify-between xl:pt-8 pt-2 mb-4">
                        <div className="flex 2xl:mt-[5em]">
                            <span className="text-2xl 2xl:text-3xl p-1 text-sky-500"><DiReact/></span> 
                            <span className="text-2xl 2xl:text-3xl p-1 text-sky-500"><SiTailwindcss/></span>
                        </div>
                        <div className="flex mr-2 pr-8 2xl:mt-[5em]">
                            <a href="https://github.com/ZaidMujahid/Youtube-Clone" target="_blank" className="text-2xl 2xl:text-3xl p-1"><span><SiGithub/></span></a>
                            <a href="https://youtube2-clone2.netlify.app/" target="_blank" className="text-2xl 2xl:text-3xl p-1"><span><FiSend/></span></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* project card */}
            <div className="mx-16 2xl:mx-32 py-2 bg-white flex rounded-xl shadow-2xl mb-6 md:flex-row flex-col dark:bg-slate-500">
                <div className="lg:w-[920px]">
                    <Image src="/DesktopWidget.png" width={850} height={300} alt="" className="object-cover rounded-xl shadow-md h-[90%] w-[95%] mx-auto sm:mx-4 mt-3"/>
                </div>

                <div className="sm:ml-2 ml-4 md:mt-2">
                    <p className="text-2xl lg:text-3xl 2xl:text-4xl font-bold p-2 text-darkBlue">Desktop Widget</p>
                    <p className="font-medium 2xl:text-[24px] lg:text-xl px-2 pr-4 xl:pr-8 2xl:py-4">Developed an Electron desktop widget that generates inspiring quotes using data from &apos;Quotes free API&apos;.
Implemented fetching and display functionalities for real-time quote updates, leveraging JavaScript, Electron, and RESTful API integration.</p>
                    <div className="flex justify-between xl:pt-8 pt-2 mb-4">
                        <div className="flex 2xl:mt-[5em]">
                            <span className="text-2xl 2xl:text-3xl p-1 text-sky-500"><SiElectron/></span> 
                            <span className="text-2xl 2xl:text-3xl p-1"><DiJavascript1/></span> 
                        </div>
                        <div className="flex mr-2 pr-8 2xl:mt-[5em]">
                            <a href="https://github.com/ZaidMujahid/Desktop-Quote-Generator-Widget" target="_blank" className="text-2xl 2xl:text-3xl p-1"><span><SiGithub/></span></a>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* project card */}
            <div className="mx-16 2xl:mx-32 py-2 bg-white flex rounded-xl shadow-2xl mb-6 md:flex-row flex-col dark:bg-slate-500">
                <div className="sm:mb-1 lg:w-[900px]">
                    <Image src="/Portfolioo.png" width={700} height={300} alt="" className="object-cover rounded-xl shadow-md h-[90%] w-[95%] md:w-[100%] mx-auto sm:mx-4 mt-3"/>
                </div>

                <div className="sm:ml-6 ml-4 md:mt-2">
                    <p className="text-2xl lg:text-3xl 2xl:text-4xl font-bold p-2 text-darkBlue">Portfolio</p>
                    <p className="font-medium 2xl:text-[24px] lg:text-xl px-2 pr-4 xl:pr-8 2xl:py-4">This portfolio website was created with the intention of providing a comprehensive overview of my skills, experience, and accomplishments as a Web Developer. It features a sleek and responsive design, and highlights of my most successful projects.</p>
                    <div className="flex justify-between xl:pt-4 pt-2 mb-4">
                        <div className="flex 2xl:mt-[5em]">
                            <span className="text-2xl 2xl:text-3xl p-1"><SiNextdotjs/></span>
                            <span className="text-2xl 2xl:text-3xl p-1 text-sky-500"><SiTailwindcss/></span>
                        </div>
                        <div className="flex mr-2 pr-8 2xl:mt-[5em]">
                            <a href="https://github.com/ZaidMujahid/portfolio_website" target="_blank" className="text-2xl 2xl:text-3xl p-1"><span><SiGithub/></span></a>
                            {/* <a href="#"  className="text-2xl p-1"><span><FiSend/></span></a>
                            <a href="#"  className="text-2xl p-1 text-red-600"><span><SiYoutube/></span></a> */}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
 
export default Projects;