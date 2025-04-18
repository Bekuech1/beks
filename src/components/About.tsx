import React from 'react'
import Header from './Header'

const About = () => {
  return (
          <div 
            className="text-center  pt-24"
            id="about"
          >
            <Header>
              beyond the screen 
            </Header>

            <div className="grid gap-10">
              <p className="w-[600px] mx-auto text-base font-medium mt-14">When I’m not coding, I love spending time with friends—whether we’re talking about football or basketball, watching games, or shooting hoops ourselves. I also enjoy gaming and getting lost in a good book. Building meaningful relationships comes naturally to me; it’s something I truly value because it enriches my life and reminds me of what really matters. This ability to connect with people isn’t just personal—it’s something I bring into my professional life as well, helping me collaborate effectively and work seamlessly with others.</p>

              <div className='md:flex grid w-fit mx-auto fix'>
                <section className='flex justify-between gap-8 h-fit'>
                  <div className='my-auto grid gap-5 md:gap-8'>
                    <img src="/me1.jpg" alt="" className='h-auto w-[300px]'/>
                    <img src="/me2.jpg" alt="" className='h-auto w-[300px]'/>
                  </div>

                  <div className='grid gap-5 md:gap-8'>
                    <img src="/mee6.jpeg" alt="" className='lg:w-[300px] h-auto w-[187px]'/>
                    <img src="/mee4.jpg" alt="" className='lg:w-[300px] h-auto w-[187px]'/>
                    <img src="/mee7.jpeg" alt="" className='lg:w-[300px] h-auto w-[187px]'/>
                  </div>
                </section>
              </div>
            </div>
          </div>
  )
}

export default About