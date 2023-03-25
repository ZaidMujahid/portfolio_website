import Image from "next/image";
import {HiOutlineMail} from 'react-icons/hi';
import {FiLinkedin} from 'react-icons/fi';
import {BsGithub} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';

const Contact = () => {
    return ( 
        <div id="contact" className="bg-white flex shadow-2xl rounded-2xl m-16 justify-evenly dark:bg-slate-500">
            {/* image */}
            <div className="my-auto">
                <Image src="/contact.png" width={400} height={300} alt="" className="justify-center items-center m-4 ml-12 md:block hidden"/>
            </div>
            {/* text */}
            <div>
                <div className="mt-6 md:mx-32 mx-6 p-4 xl:mt-8 xl:p-6">
                    <p className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-3xl font-bold xl:text-4xl text-center md:text-left">Get In Touch</p>
                    <p className="font-medium pt-2 xl:pt-4">Let&apos;s connect! If you&apos;d like to discuss potential projects or simply want to say hello, please feel free to contact me. I&apos;m always open to new opportunities and collaborations. Looking forward to hearing from you.</p>
                </div>
                <div className="mx-36 flex md:justify-between mb-6 xl:mb-8 justify-center">
                    <a href="mailto: zaidmujahid274@gmail.com" target="_blank" className="text-2xl md:p-1 text-red-500 pr-4"><span><HiOutlineMail /></span></a>
                    <a href="https://www.linkedin.com/in/zaid-mujahid-0923a0221/" target="_blank"  className="text-2xl md:p-1 pr-4 text-blue-900"><span><FiLinkedin /></span></a>
                    <a href="https://github.com/ZaidMujahid" target="_blank" className="text-2xl md:p-1 pr-4 text-bg text-clip "><span><BsGithub /></span></a>
                    <a href="https://twitter.com/ZaidMujahid4" target="_blank" className="text-2xl md:p-1 pr-4 text-blue-500"><span><BsTwitter /></span></a>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;