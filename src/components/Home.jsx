import React from 'react'
import hero from '../assets/image-hero-desktop.png'
import heroMobile from '../assets/image-hero-mobile.png'
import audiophile from '../assets/client-audiophile.svg'
import databiz from '../assets/client-databiz.svg'
import maker from '../assets/client-maker.svg'
import meet from '../assets/client-meet.svg'


function Home() {
  return (
    <>
      <section className='flex flex-col-reverse py-20 md:grid md:gap-10 md:grid-cols-2 md:place-items-center max-w-4xl lg:max-w-5xl md:mx-auto '>
        <article className='h-full flex flex-col justify-between text-center md:text-left px-5 xl:px-0 mt-10 md:mt-0'>
          <div className='md:mt-40'>
            <h1 className='font-bold text-4xl lg:text-6xl xl:text-7xl mb-5'>Make remote work</h1>
            <p className='mb-5 lg:w-[400px]'>Get your team in sync, no matter your location. Streamline porcesses, create team rituals, and watch productivity soar.</p>
            <button className='bg-black rounded-xl text-white shadow font-bold hover:opacity-75 transition-all duration-150 py-3 px-6 cursor-pointer'>Learn more</button>
          </div>

          <div>
            <ul className='grid grid-cols-4 gap-1 mt-10 place-items-center md:place-items-start '>
              <li><img src={databiz} alt="" className='w-16 md:w-24'/></li>
              <li><img src={audiophile} alt="" className='w-16 md:w-24'/></li>
              <li><img src={meet} alt="" className='w-16 md:w-24'/></li>
              <li><img src={maker} alt="" className='w-16 md:w-24'/></li>
            </ul>
          </div>

        </article>

        <article>
          <picture>
            <source media="(min-width: 768px)" srcSet={hero} />
            <img src={heroMobile} alt="dude with laptop" className='w-full' />
          </picture>
        </article>
      </section>
    </>
  );
}

export default Home