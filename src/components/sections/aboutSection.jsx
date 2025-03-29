import React from 'react'

import { FaJava, FaPython, FaJs, FaBootstrap, FaReact, FaNodeJs, FaPhp, FaAndroid, FaUbuntu, FaFedora, FaAws, FaFigma, FaLinux, FaTerminal, FaGithub, FaSketch, FaSass } from 'react-icons/fa6'
import { SiExpress, SiMongodb, SiMysql, SiDotnet, SiApache, SiNginx, SiNetlify, SiAdobephotoshop, SiAdobeillustrator, SiCanva, SiVim } from "react-icons/si";
import { BiLogoJquery } from "react-icons/bi";

const AboutSection = () => {
    return (
        <>
            <div className='about-me bg-[var(--secondaryColor)] py-10'>
                <div className='about-content content-container'>

                    <div id='title-card-element' className='!border-[var(--thirdColor)] text-[var(--thirdColor)]'>
                        <div className='card-box card-box-1'></div>
                        <div className='card-box card-box-2 !bg-[var(--thirdColor)]'></div>
                        <div className='card-box card-box-3 !bg-[var(--thirdColor)]'></div>
                        <div className='card-box card-box-4'></div>
                        <span className='title-text'>About Me</span>
                    </div>

                    <div className='flex flex-col md:flex-row gap-1 md:gap-15'>

                        <div className='text-[var(--thirdColor)] py-14 flex flex-col gap-3 flex-1'>
                            <p className='text-justify'>
                                Hello, my name is Amey Khondekar, and I am a self-taught developer passionate about creating innovative solutions through technology. I pride myself on being disciplined and upholding strong work ethics in every project I undertake.
                            </p>
                            <ul className='list-disc px-10'>
                                <li>Problem solver with the ability to simplify complex challenges.</li>
                                <li>Strong teamwork skills for effective collaboration.</li>
                                <li>Detail-oriented, ensuring high-quality outcomes in every task.</li>
                            </ul>
                        </div>


                        <div className="flex-1 flex flex-col items-start justify-center gap-5 text-[var(--thirdColor)]">
                            <span className="font-bold w-full text-center md:text-start">My Tech Stack</span>
                            <div className="flex flex-col gap-2 overflow-auto" style={{ maxWidth: "100%", whiteSpace: "nowrap" }}>

                                <div className="flex gap-2 flex-wrap md:flex-nowrap overflow-x-auto justify-center">
                                    <div className="tech-stack-tile">
                                        <span>Coding</span>
                                        <span><FaJs size={"24px"} /></span>
                                        <span><FaJava size={"24px"} /></span>
                                        <span><FaPython size={"24px"} /></span>
                                        <span><FaPhp size={"24px"} /></span>
                                        <span><FaAndroid size={"24px"} /></span>
                                    </div>

                                    <div className="tech-stack-tile">
                                        <span>Frameworks</span>
                                        <span><FaReact size={"24px"} /></span>
                                        <span><SiExpress size={"24px"} /></span>
                                        <span><FaBootstrap size={"24px"} /></span>
                                        <span><BiLogoJquery size={"24px"} /></span>
                                    </div>

                                    <div className="tech-stack-tile">
                                        <span>Database</span>
                                        <span><SiMongodb size={"24px"} /></span>
                                        <span><SiMysql size={"24px"} /></span>
                                    </div>
                                </div>

                                <div className="flex gap-2 flex-wrap md:flex-nowrap overflow-x-auto justify-center">
                                    <div className="tech-stack-tile">
                                        <span>Env</span>
                                        <span><FaNodeJs size={"24px"} /></span>
                                        <span><SiDotnet size={"24px"} /></span>
                                    </div>

                                    <div className="tech-stack-tile">
                                        <span>OS</span>
                                        <span><FaUbuntu size={"24px"} /></span>
                                        <span><FaFedora size={"24px"} /></span>
                                    </div>

                                    <div className="tech-stack-tile">
                                        <span>Server Environment</span>
                                        <span><SiApache size={"24px"} /></span>
                                        <span><SiNginx size={"24px"} /></span>
                                    </div>

                                    <div className="tech-stack-tile">
                                        <span>Cloud</span>
                                        <span><SiNetlify size={"24px"} /></span>
                                        <span><FaAws size={"24px"} /></span>
                                    </div>
                                </div>

                                <div className="flex gap-2 flex-wrap md:flex-nowrap overflow-x-auto justify-center">
                                    <div className="tech-stack-tile">
                                        <span>Graphics</span>
                                        <span><SiAdobephotoshop size={"24px"} /></span>
                                        <span><SiAdobeillustrator size={"24px"} /></span>
                                        <span><SiCanva size={"24px"} /></span>
                                    </div>

                                    <div className="tech-stack-tile">
                                        <span>Designing</span>
                                        <span><FaFigma size={"24px"} /></span>
                                        <span><FaSketch size={"24px"} /></span>
                                    </div>

                                    <div className="tech-stack-tile">
                                        <span>Additionals</span>
                                        <span><FaLinux size={"24px"} /></span>
                                        <span><FaTerminal size={"24px"} /></span>
                                        <span><SiVim size={"24px"} /></span>
                                        <span><FaGithub size={"24px"} /></span>
                                        <span><FaSass size={"24px"} /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection
