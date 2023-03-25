import Image from "next/image";
import { DiReact } from 'react-icons/di';
import { DiNodejsSmall } from 'react-icons/di';
import { SiMongodb } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { SiYoutube } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { FiSend } from 'react-icons/fi';
const Projects = () => {
    return ( 
        <div id="projects">
            <div className="text-center">
                <p className="text-5xl text-white font-bold mb-12">Projects</p>
            </div>
            {/* project card */}
            <div className="mx-16 bg-white flex md:flex-row flex-col rounded-xl shadow-2xl mb-6 dark:bg-slate-500">
                <div>
                    <Image src="/EHR.png" width={525} height={300} className="md:m-6 md:mt-7 rounded-xl shadow-xl md:w-[550px] w-[400px] mx-auto mt-5 mb-4"/>
                </div>

                <div className="ml-8 md:mt-2">
                    <p className="text-2xl font-bold p-2 md:mt-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 xl:mt-4 ">Electronic Health Record(48hours National level Hackathon)</p>
                    <p className="font-medium px-2 pr-4 xl:pr-8">As a team member, I contributed by designing and developing the landing page. Additionally, I worked on the patient details section, which involved collecting and organizing patient information and ensuring its accurate representation.</p>
                    <div className="flex justify-between xl:pt-8 pt-2 mb-4">
                        <div className="flex ">
                            <span className="text-2xl p-1 text-sky-500"><DiReact/></span>
                            <span className="text-2xl p-1 text-green-800"><DiNodejsSmall/></span>
                            <span className="text-2xl p-1 text-green-500"><SiMongodb/></span>
                            <span className="text-2xl p-1 text-sky-500"><SiTailwindcss/></span>
                            <span className="text-2xl p-1 text-orange-500"><SiFirebase/></span>
                        </div>
                        <div className="flex mr-2 pr-8">
                            <a href="https://github.com/orgs/Error404-5-0/repositories" target="_blank" className="text-2xl p-1"><span><SiGithub/></span></a>
                            {/* <a href="#"  className="text-2xl p-1"><span><FiSend/></span></a>
                            <a href="#"  className="text-2xl p-1 text-red-600"><span><SiYoutube/></span></a> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* project card */}
            <div className="mx-16 bg-white flex rounded-xl shadow-2xl mb-6 md:flex-row flex-col dark:bg-slate-500">
                <div>
                    <Image src="/MedTracker.png" width={520} height={300} className="md:m-6 md:mt-7 rounded-xl shadow-xl md:w-[500px] w-[400px] mx-auto mt-5 mb-4"/>
                </div>

                <div className="ml-8 md:mt-2">
                    <p className="text-2xl font-bold p-2 md:mt-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-50 xl:mt-4">Medicine Tracker</p>
                    <p className="font-medium px-2 pr-4 xl:pr-8">A fully responsive MERN App with authentication that you can use to keep track of your
medicines and appointments. Implemented authentication using JSON Web Tokens (JWT) and storing users data in
MongoDB.</p>
                    <div className="flex justify-between xl:pt-8 pt-2 mb-4">
                        <div className="flex">
                            <span className="text-2xl p-1 text-sky-500"><DiReact/></span>
                            <span className="text-2xl p-1 text-green-800"><DiNodejsSmall/></span>
                            <span className="text-2xl p-1 text-green-500"><SiMongodb/></span>
                            <span className="text-2xl p-1 text-sky-500"><SiTailwindcss/></span>
                        </div>
                        <div className="flex mr-2 pr-8">
                            <a href="https://github.com/ZaidMujahid/MedTracker" target="_blank" className="text-2xl p-1"><span><SiGithub/></span></a>
                            {/* <a href="#"  className="text-2xl p-1"><span><FiSend/></span></a> */}
                            <a href="https://www.youtube.com/watch?v=lpJd2r-QcF8&ab_channel=ZaidMujahid" target="_blank" className="text-2xl p-1 text-red-600"><span><SiYoutube/></span></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* project card */}
            <div className="mx-16 bg-white flex rounded-xl shadow-2xl mb-6 md:flex-row flex-col dark:bg-slate-500">
                <div>
                    <Image src="/GymPartner.png" width={500} height={300} className="md:m-6 md:mt-7 rounded-xl shadow-xl w-[400px] md:w-[500px] mx-auto mt-5 mb-4"/>
                </div>

                <div className="ml-8 md:mt-2">
                    <p className="text-2xl font-bold p-2 md:mt-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-50 xl:mt-4">Your Gym Partner</p>
                    <p className="font-medium px-2 pr-4 xl:pr-8">A Fully responsive React App which shows different exercises along with their videos link
for YouTube. Rapid API is used for fetching exercises data and for YouTube videos. Implemented
features like Pagination.</p>
                    <div className="flex justify-between xl:pt-8 pt-2 mb-4">
                        <div className="flex">
                            <span className="text-2xl p-1 text-sky-500"><DiReact/></span> 
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" className="w-7 p-1 mt-1"/>
                        </div>
                        <div className="flex mr-2 pr-8">
                            <a href="https://github.com/ZaidMujahid/Gym-website" target="_blank" className="text-2xl p-1"><span><SiGithub/></span></a>
                            <a href="https://your-gym-partner.netlify.app/" target="_blank" className="text-2xl p-1"><span><FiSend/></span></a>
                            <a href="https://www.youtube.com/watch?v=BZ4-qgUOIlQ&ab_channel=ZaidMujahid" target="_blank" className="text-2xl p-1 text-red-600"><span><SiYoutube/></span></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* project card */}
            <div className="mx-16 bg-white flex rounded-xl shadow-2xl mb-6 md:flex-row flex-col dark:bg-slate-500">
                <div>
                    <Image src="/ImageToText.png" width={450} height={300} className="md:m-6 md:mt-7 rounded-xl shadow-xl w-[400px] md:w-[450px] mx-auto mt-5 mb-4"/>
                </div>

                <div className="ml-8 md:mt-2">
                    <p className="text-2xl font-bold p-2 md:mt-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-50 xl:mt-4">Image to Text</p>
                    <p className="font-medium px-2 pr-4 xl:pr-8">A Python Program that converts handwritten text to editable text. Group Project built using Tesseract OCR, Open CV is used for Image Processing. Text can be converted to many regional languages</p>
                    <div className="flex justify-between xl:pt-8 pt-2 mb-4">
                        <div className="flex">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-7 p-1 mt-1"/>
           
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" className="w-7 p-1 mt-1"/>
          
                        </div>
                        <div className="flex mr-2 pr-8">
                            <a href="https://github.com/ZaidMujahid/Handwritten-Text-to-Editable-Text" target="_blank" className="text-2xl p-1"><span><SiGithub/></span></a>
                            {/* <a href="#"  className="text-2xl p-1"><span><FiSend/></span></a>
                            <a href="#"  className="text-2xl p-1 text-red-600"><span><SiYoutube/></span></a> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* project card */}
            <div className="mx-16 bg-white flex rounded-xl shadow-2xl mb-6 md:flex-row flex-col dark:bg-slate-500">
                <div>
                    <Image src="/Portfolio.png" width={500} height={300} className="md:m-6 md:mt-7 rounded-xl shadow-xl w-[400px] md:w-[570px] mx-auto mt-5 mb-4"/>
                </div>

                <div className="ml-8 md:mt-2">
                    <p className="text-2xl font-bold p-2 md:mt-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-50 xl:mt-4">Portfolio Website</p>
                    <p className="font-medium px-2 pr-4 xl:pr-8">This portfolio website was created with the intention of providing a comprehensive overview of my skills, experience, and accomplishments as a Web Developer. It features a sleek and responsive design, and highlights of my most successful projects.</p>
                    <div className="flex justify-between xl:pt-4 pt-2 mb-4">
                        <div className="flex">
                            <span className="text-2xl p-1"><SiNextdotjs/></span>
                            <span className="text-2xl p-1 text-sky-500"><SiTailwindcss/></span>
                        </div>
                        <div className="flex mr-2 pr-8">
                            <a href="https://github.com/ZaidMujahid/portfolio_website" target="_blank" className="text-2xl p-1"><span><SiGithub/></span></a>
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