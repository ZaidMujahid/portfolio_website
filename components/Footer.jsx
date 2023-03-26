
const Footer = () => {
    return ( 
        <div className="flex md:flex-row flex-col justify-center md:justify-between rounded-t-2xl shadow-2xl shadow-yellow-900">
            <div className="text-3xl font-bold p-2 ml-14 pt-3 md:block hidden">
                <a href="#home" >ZAID</a>
            </div>
            {/* <div className="flex text-md p-2 md:mr-6 justify-center">
                <a href="#home" className="p-2 pr-4">Home</a>
                <a href="#about" className="p-2 pr-4">About</a>
                <a href="#projects" className="p-2 pr-4">Projects</a>
                <a href="#skills" className="p-2 pr-4">Skills</a>
                <a href="https://leetcode.com/ZaidMujahid" target="_blank" className="text-lg p-2 pt-2"><img src="/leetcode.png" alt="" /></a>
            </div> */}
            <div className="flex md:mr-14 md:pt-4 text-center justify-center md:pb-0 py-2">
                &copy; Zaid All Rights Reserved
            </div>
        </div>
    );
}
 
export default Footer;