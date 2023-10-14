import React from 'react'
import MyNav from '../common/MyNav'
import { ArrowIcon } from '../common/Icon'

const Hero = () => {
  return (
    <section className='bg_image bg-center bg-cover bg-no-repeat'>
      <MyNav />
      <div className="container mx-auto" data-aos="zoom-in" data-aos-duration="700" data-aos-delay="3000" data-aos-easing="linear">
        <h1 className='pt-36 text-white text-center font-Outfit text-[30px] md:text-[36px] lg:text-[42px] xl:text-5xl  font-semibold leading-[120%]' >Become a Co-founder</h1>
        <p className='text-white opacity-[0.9] font-Inter text-center mx-auto max-w-[550px] mt-2.5 mb-4 leading-[150%]'>The is a long established fact that a reader will be distracted by the readable content of a page.</p>
        <div className='pb-24'>
          <div className='flex  flex-col sm:flex-row items-center justify-between py-2 pe-[9px] ps-[21px] max-w-[290px]  sm:max-w-[464px] mx-auto bg-white rounded-[100px]  '>
            <input type="text" placeholder='Enter email to join waitlist' className='w-10/12  text-center sm:text-start placeholder:font-Inter placeholder:sm:text-[14px] placeholder:text-base placeholder:font-normal placeholder:text-[#666666] mt-[10px] sm:mt-0 outline-none placeholder:leading-normal' />
            <div className='rounded-[35px] group  mt-[20px]  cursor-pointer sm:mt-0 bg-gradient-to-r from-cyan-500 to-blue-500 inline-block px-[27px] py-[16px] '>
              <div className='group-hover:translate-x-[6px] transition-all ease-linear duration-200'>
                <ArrowIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero