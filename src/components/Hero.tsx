import React from 'react'

const Hero = () => {
  return (
    <section 
        className="bg-cover bg-center h-screen" 
        style={{ backgroundImage: "url('/portfolio-bg.jpg')" }}
    >
        <div className=" grid gap-14 text-center m-auto w-fit h-screen place-content-center relative">
            <button className="text-white absolute rounded-full bottom-5 p-3 border-2 border-gray-800 right-0 bg-transparent animate-bounce">
                <a href="#works">
                    <img src="p-arrow.svg" alt="" className='-rotate-90'/>
                </a>
            </button>
            <div className="grid">
                <h1 className="font-medium text-lg">  Hi, I’m </h1>
                <h1 className="text-8xl leading-[115px] font-extrabold gradient-background w-[954px] typing-animation">Chibuikem Igboanugo</h1>
                <h1 className="font-medium text-xl w-[450px] mx-auto">a developer passionate about building intuitive, scalable and efficient web experiences.</h1>
            </div>
            <section className="flex mx-auto w-full justify-between max-w-96 h-[100px]">

                <div className="flex flex-col justify-center items-center gap-1 group w-[78px]">
                    <div className="w-[60px] h-[60px] p-2.5 bg-white/10 rounded-full flex justify-center items-center transition-transform duration-300 ease-in-out">
                        <a 
                            href="https://wa.me/+2348023614838?text=Hi I'd like to talk to you about "
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/p-call.svg" alt="Call Icon" className="w-8 h-8 transition-transform duration-300 ease-in-out hover:scale-[1.15]" />
                        </a>
                    </div>
                    <h3 className="capitalize text-white hidden transition-opacity duration-300 ease-in-out group-hover:block font-medium">
                        whatsapp
                    </h3>
                </div>
            
                <div className="flex flex-col justify-center items-center gap-1 group w-[78px]">
                    <div className="w-[60px] h-[60px] p-2.5 bg-white/10 rounded-full flex justify-center items-center transition-transform duration-300 ease-in-out">
                        <a 
                            href="https://github.com/Bekuech1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/p-github.svg" alt="GitHub Icon" className="w-8 h-8 transition-transform duration-300 ease-in-out hover:scale-[1.15]" />
                        </a>
                    </div>
                    <h3 className="capitalize text-white hidden transition-opacity duration-300 ease-in-out group-hover:block font-medium">
                        GitHub
                    </h3>
                </div>
            
                <div className="flex flex-col justify-center items-center gap-1 group w-[78px]">
                    <div className="w-[60px] h-[60px] p-2.5 bg-white/10 rounded-full flex justify-center items-center transition-transform duration-300 ease-in-out">
                        <a 
                            href="#contact"
                        >
                            <img src="/p-mail.svg" alt="Mail Icon" className="w-8 h-8 transition-transform duration-300 ease-in-out hover:scale-[1.15]" />
                        </a>
                    </div>
                    <h3 className="capitalize text-white hidden transition-opacity duration-300 ease-in-out group-hover:block font-medium">
                        mail
                    </h3>
                </div>
            
                <div className="flex flex-col justify-center items-center gap-1 group w-[78px]">
                    <div className="w-[60px] h-[60px] p-2.5 bg-white/10 rounded-full flex justify-center items-center transition-transform duration-300 ease-in-out">
                        <a 
                            href="https://linkedin.com/in/yourlinkedin"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/p-linkedin.svg" alt="LinkedIn Icon" className="w-8 h-8 transition-transform duration-300 ease-in-out hover:scale-[1.15]" />
                        </a>
                    </div>
                    <h3 className="capitalize text-white hidden transition-opacity duration-300 ease-in-out group-hover:block font-medium">
                        LinkedIn
                    </h3>
                </div>
            
                <div className="flex flex-col justify-center items-center gap-1 group w-[78px]">
                    <div className="w-[60px] h-[60px] p-2.5 bg-white/10 rounded-full flex justify-center items-center transition-transform duration-300 ease-in-out">
                        <a 
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/p-resume.svg" alt="Resume Icon" className="w-8 h-8 transition-transform duration-300 ease-in-out hover:scale-[1.15]" />
                        </a>
                    </div>
                    <h3 className="capitalize text-white hidden transition-opacity duration-300 ease-in-out group-hover:block font-medium">
                        Resume
                    </h3>
                </div>
                
            </section>
        </div>
    </section>
  )
}

export default Hero