import React, { useState } from 'react'
import Questions_img from '../../assets/img/png/Quection_Img.png'
import Questions_img_imput from '../../assets/img/png/Quection_Img_input.png'
import Questions_img_imput_two from '../../assets/img/png/Quection_Img_input_two.png'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ArrowIcon } from '../common/Icon';
function Icon({ id, open }) {
  return (
    <div>
      <div className="absolute  top-[22px] right-0">
        <svg className={`${id === open ? "rotate-[1deg]" : ""} h-5 w-5 transition-transform rotate-90`} width="12" height="3" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.14583 2.13639C0.92482 2.13639 0.712858 2.0486 0.556578 1.89232C0.400298 1.73604 0.3125 1.52407 0.3125 1.30306C0.3125 1.08205 0.400298 0.870085 0.556578 0.713804C0.712858 0.557524 0.92482 0.469727 1.14583 0.469727H11.1458C11.3668 0.469727 11.5788 0.557524 11.7351 0.713804C11.8914 0.870085 11.9792 1.08205 11.9792 1.30306C11.9792 1.52407 11.8914 1.73604 11.7351 1.89232C11.5788 2.0486 11.3668 2.13639 11.1458 2.13639H1.14583Z" fill="black" />
        </svg>
      </div>

      <div className="absolute  top-[22px] right-0 ">
        <svg className='h-5 w-5' width="12" height="3" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.14583 2.13639C0.92482 2.13639 0.712858 2.0486 0.556578 1.89232C0.400298 1.73604 0.3125 1.52407 0.3125 1.30306C0.3125 1.08205 0.400298 0.870085 0.556578 0.713804C0.712858 0.557524 0.92482 0.469727 1.14583 0.469727H11.1458C11.3668 0.469727 11.5788 0.557524 11.7351 0.713804C11.8914 0.870085 11.9792 1.08205 11.9792 1.30306C11.9792 1.52407 11.8914 1.73604 11.7351 1.89232C11.5788 2.0486 11.3668 2.13639 11.1458 2.13639H1.14583Z" fill="black" />
        </svg>

      </div>
    </div>
  );
}
const Questions = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div>
      <div className="container mx-auto">
        <div className='lg:pt-[77px]'>
          <div className=' bg-[#2ABAE9] w-[175px] h-[4px] mx-auto rounded-sm '></div>
        </div>
        <h2 className='text-center text-[#1C1D1D] text-[30px] md:text-[35px] lg:text-[40px]  font-medium font-Outfit leading-normal' data-aos="zoom-in" data-aos-duration="700" data-aos-delay="500" data-aos-easing="linear"  >Frequently Awesome Questions</h2>
        <div className='flex flex-col lg:flex-row  items-center mt-[45px] md:mt-[55px] lg:mt-[68px]'>
          <div className='w-full lg:w-[45%]' >
            <img className=' mx-auto lg:ms-auto pe-8' data-aos="fade-right" data-aos-duration="700" data-aos-delay="500" data-aos-easing="linear" src={Questions_img} alt="Questions_img" />
          </div>
          <div className="w-full lg:w-[55%]  " data-aos="fade-left" data-aos-duration="700" data-aos-delay="500" data-aos-easing="linear">
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className=' ' >
              <AccordionHeader className="text-base font-medium py-[18px] text-black font-Outfit max-w-[275px]   text-start sm:max-w-[500px] md:max-w-[590px] lg:max-w-[460px] xl:max-w-[515px]   " onClick={() => handleOpen(1)}>Q1 What is WorkUp's visionary approach?</AccordionHeader>
              <AccordionBody className=" mb-[18px] max-w-[627px] pt-[5px]  font-Inter  text-[14px] md:text-base   ">
                WorkUp envisions becoming the ultimate integrated business automation platform, leveraging AI and automation to empower business owners and accounting professionals. Our goal is to revolutionise the accessibility and management of financial information, leading to unparalleled efficiency and control.
              </AccordionBody>
            </Accordion>
            <div className='border-[1px] border-solid border-[#EBEBEB] ' ></div>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />} className=" ">
              <AccordionHeader className="text-base font-medium py-[18px]  font-Outfit  max-w-[275px]  text-start sm:max-w-[500px] md:max-w-[590px] lg:max-w-[460px] xl:max-w-[515px]   " onClick={() => handleOpen(2)}>
                Q2 How does WorkUp tackle financial control challenges using AI?
              </AccordionHeader>
              <AccordionBody className=" mb-[18px] max-w-[627px] pt-[5px]  font-Inter  text-[14px] md:text-base   ">
                WorkUp envisions becoming the ultimate integrated business automation platform, leveraging AI and automation to empower business owners and accounting professionals. Our goal is to revolutionise the accessibility and management of financial information, leading to unparalleled efficiency and control.
              </AccordionBody>
            </Accordion>
            <div className='border-[1px] border-solid border-[#EBEBEB] ' ></div>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />} className=" ">
              <AccordionHeader className="text-base font-medium py-[18px]  font-Outfit max-w-[275px]  text-start sm:max-w-[500px] md:max-w-[590px] lg:max-w-[460px] xl:max-w-[515px]   " onClick={() => handleOpen(3)}>
                Q3 How does WorkUp's real-time automation set it apart in the realm of finance?
              </AccordionHeader>
              <AccordionBody className=" mb-[18px] max-w-[627px] pt-[5px]  font-Inter  text-[14px] md:text-base   ">
                WorkUp envisions becoming the ultimate integrated business automation platform, leveraging AI and automation to empower business owners and accounting professionals. Our goal is to revolutionise the accessibility and management of financial information, leading to unparalleled efficiency and control.
              </AccordionBody>
            </Accordion>
            <div className='border-[1px] border-solid border-[#EBEBEB] ' ></div>
            <Accordion open={open === 4} icon={<Icon id={4} open={open} />} className=" ">
              <AccordionHeader className="text-base font-medium py-[18px]  font-Outfit  max-w-[275px]   text-start sm:max-w-[500px] md:max-w-[590px] lg:max-w-[460px] xl:max-w-[515px]   " onClick={() => handleOpen(4)}>Q4 How does WorkUp redefine the role of accounting professionals with automation?</AccordionHeader>
              <AccordionBody className=" mb-[18px] max-w-[627px] pt-[5px]  font-Inter  text-[14px] md:text-base   ">
                WorkUp envisions becoming the ultimate integrated business automation platform, leveraging AI and automation to empower business owners and accounting professionals. Our goal is to revolutionise the accessibility and management of financial information, leading to unparalleled efficiency and control.
              </AccordionBody>
            </Accordion>
            <div className='border-[1px] border-solid border-[#EBEBEB] ' ></div>
            <Accordion open={open === 5} icon={<Icon id={5} open={open} />} className=" ">
              <AccordionHeader className="text-base font-medium py-[18px]  font-Outfit  max-w-[275px]   text-start sm:max-w-[500px] md:max-w-[590px] lg:max-w-[460px] xl:max-w-[515px]   " onClick={() => handleOpen(5)}>
                Q5 Why is WorkUp the perfect choice for businesses seeking financial empowerment?
              </AccordionHeader>
              <AccordionBody className=" mb-[18px] max-w-[627px] pt-[5px]  font-Inter  text-[14px] md:text-base   ">
                WorkUp envisions becoming the ultimate integrated business automation platform, leveraging AI and automation to empower business owners and accounting professionals. Our goal is to revolutionise the accessibility and management of financial information, leading to unparalleled efficiency and control.
              </AccordionBody>
            </Accordion>
            <div className='border-[1px] border-solid border-[#EBEBEB] ' ></div>
            <Accordion open={open === 6} icon={<Icon id={6} open={open} />} className=" ">
              <AccordionHeader className="text-base font-medium py-[18px] max-w-[275px]  font-Outfit  sm:max-w-[500px] md:max-w-[590px] lg:max-w-[460px] xl:max-w-[515px]    text-start  " onClick={() => handleOpen(6)}>
                Q6 How does WorkUp showcase its genuine commitment to businesses' success?
              </AccordionHeader>
              <AccordionBody className=" mb-[18px] max-w-[627px] pt-[5px]  font-Inter  text-[14px] md:text-base   ">
                WorkUp envisions becoming the ultimate integrated business automation platform, leveraging AI and automation to empower business owners and accounting professionals. Our goal is to revolutionise the accessibility and management of financial information, leading to unparalleled efficiency and control.
              </AccordionBody>
            </Accordion>
            <div className='border-[1px] border-solid border-[#EBEBEB] ' ></div>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-duration="700" data-aos-delay="500" data-aos-easing="linear" className='relative z-50'>
          <div className='bg-gradient-to-r from-cyan-500 to-blue-500 pb-[50px] rounded-[16px] mt-[30px] md:mt-[50px] lg:mt-[75px] translate-y-[50px] relative z-10' >
            <img className=' absolute z-[-1]' src={Questions_img_imput} alt="" />
            <img className=' absolute right-0 z-[-1]' src={Questions_img_imput_two} alt="" />
            <h2 className='font-Outfit text-white  font-medium  text-[30px] md:text-[35px] lg:text-[40px] text-center pt-[41px]'>Join Free Demo</h2>
            <div className='flex  flex-col sm:flex-row items-center justify-between py-2 pe-[9px] ps-[21px] max-w-[290px]  sm:max-w-[464px] mx-auto bg-white rounded-[100px]  mt-8  '>
              <input type="text" placeholder='Enter email to join waitlist' className='w-10/12  text-center sm:text-start placeholder:font-Inter placeholder:sm:text-[14px] placeholder:text-base placeholder:font-normal placeholder:text-[#666666] mt-[10px] sm:mt-0 outline-none placeholder:leading-normal' />
              <div className='rounded-[35px] group  mt-[20px]  cursor-pointer sm:mt-0 bg-gradient-to-r from-cyan-500 to-blue-500 inline-block px-[27px] py-[16px] '>
                <div className='group-hover:translate-x-[6px] transition-all ease-linear duration-200'>
                  <ArrowIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Questions