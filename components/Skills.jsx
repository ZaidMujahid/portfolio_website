import Image from "next/image";

const Skills = () => {
    return ( 
        <div className="text-center w-full md:w-auto" id="skills">
            <div className="">
                <p className="text-5xl text-white font-bold mt-12">Tech Stack</p>
            </div>
            <div className="grid grid-rows-3 grid-flow-col gap-12 justify-center mt-12">
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width={50} height={50} className="bg-white rounded-lg p-1 inline hover:bg-opacity-75 hover:bg-opacity-75"/>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" width={50} height={50} className="bg-white rounded-lg p-1 inline hover:bg-opacity-75"/>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width={50} height={50} className="bg-white rounded-lg p-1 inline hover:bg-opacity-75"/>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" width={50} height={50} className="bg-white rounded-lg p-1 inline hover:bg-opacity-75"/>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width={50} height={50} className="bg-white rounded-lg p-1 inline hover:bg-opacity-75"/>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" width={50} height={50} className="bg-white rounded-lg p-1 inline hover:bg-opacity-75"/>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width={50} height={50} className="bg-white rounded-lg p-1 inline hover:bg-opacity-75"/>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width={50} height={50} className="bg-white rounded-lg p-1 inline hover:bg-opacity-75"/>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" width={50} height={50} className="bg-white rounded-lg p-1 inline hover:bg-opacity-75"/>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width={50} height={50} className="bg-white rounded-lg p-1 inline hover:bg-opacity-75"/>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width={50} height={50} className="bg-white rounded-lg p-1 inline hover:bg-opacity-75"/>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width={50} height={50} className="bg-white rounded-lg p-1 inline hover:bg-opacity-75"/>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width={50} height={50} className="bg-white rounded-lg p-1 inline hover:bg-opacity-75"/>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" width={50} height={50} className="bg-white rounded-lg p-1 inline hover:bg-opacity-75"/>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width={50} height={50} className="bg-white rounded-lg p-1 inline hover:bg-opacity-75"/>
            </div>
        </div>
    );
}
 
export default Skills;