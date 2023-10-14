import React from 'react'
import { Link } from 'react-router-dom'
import { BankingIcon, ExperienceIcon, PreviouslyIcon, TechnicalIcon } from '../common/Icon'
import From_left_side from '../../assets/img/png/From.left_one.png'
import From_dots from '../../assets/img/png/From_dots.png'
import From_Center_left from '../../assets/img/png/from_left_center.png'
import From_Center_right from '../../assets/img/png/From_right_center.png'
const From = () => {
    return (
        <section className='relative'>
               <div className='relative z-[50]'>
            <img className='absolute top-[-10%] z-[-20]  hidden md:block' src={From_left_side} alt="image" />
            <img className='absolute top-[2%]  z-[-20] hidden md:block' src={From_dots} alt="image" />
            <img className='absolute top-[70%] right-[-40px]  z-[-20] hidden md:block' src={From_dots} alt="image" />
            <img className='absolute top-[60%] z-[-20]  hidden md:block' src={From_Center_left} alt="image" />
            <img className='absolute top-[60%] right-0  z-[-20] hidden md:block' src={From_Center_right} alt="image" />
            <div className="container mx-auto ">
               <div className='max-w-[946px] mx-auto mt-28 mb-[121px] rounded-[12px] px-[30px] md:px-[40px] lg:px-[50px] pb-[52px] lg:pt-[40px] pt-[25px] md:pt-[32px] shadow-FullBox  z-[100] relative bg-white' data-aos="zoom-in" data-aos-duration="700" data-aos-delay="3000" data-aos-easing="linear">
                    <div>
                        <h2 className='text-[#4D4D4D] font-Outfit text-[14px]   md:text-xl  font-semibold  pb-[11px]  leading-normal'>Register Now</h2>
                    </div>
                    <p className='text-[#4D4D4D] font-Inter text-[14px]  md:text-lg font-normal leading-normal'>To make WorkUp 's products better please leave your INFORMATION here.</p>
                    <div className='flex flex-col sm:flex-row justify-between  pt-[41px]  '>
                        <div className='w-full'>
                            <h2 className='text-[#333333] font-Inter text-[14px]  md:text-lg font-normal pb-[10px] leading-normal'>Full Name</h2>
                            <div className='border-[1px] border-solid border-[#DFDFDF] p-4 rounded-[12px]'>
                                <input type="text" placeholder='Your first name' className='placeholder:font-Inter placeholder:text-base placeholder:font-normal placeholder:text-[##999999] outline-none placeholder:leading-normal' />
                            </div>
                        </div>
                        <div className='w-full sm:ps-[40px] mt-[35px] sm:mt-0'>
                            <h2 className='text-[##4D4D4D] font-Inter text-[14px]  md:text-lg font-normal pb-[10px] leading-normal'>Email</h2>
                            <div className='border-[1px] border-solid border-[#DFDFDF] p-4 rounded-[12px]'>
                                <input type="text" placeholder='Email address' className='placeholder:font-Inter placeholder:text-base placeholder:font-normal placeholder:text-[##999999] outline-none placeholder:leading-normal' />
                            </div>
                        </div>
                    </div>
                    <div className='mt-9'>
                        <h2 className='text-[##4D4D4D] font-Inter text-[14px]  md:text-lg font-normal mb-4 leading-normal'>About Us</h2>
                        <div className='border-[1px] border-solid border-[#DFDFDF] p-4 rounded-[12px]'>
                            <textarea type="text" className=' outline-none ' />
                        </div>
                    </div>
                    <div className='mt-9'>
                        <h2 className='text-[##4D4D4D] font-Inter text-[14px]  md:text-lg font-normal mb-4 leading-normal'>Why WorkUp</h2>
                        <div className='border-[1px] border-solid border-[#DFDFDF] p-4 rounded-[12px]'>
                            <textarea type="text" className=' outline-none ' />
                        </div>
                    </div>
                    <div className='mt-9'>
                        <h2 className='text-[#333333] font-Inter text-[14px]  md:text-lg font-normal mb-4 leading-normal'>My You</h2>
                        <div className='border-[1px] border-solid border-[#DFDFDF] p-4 rounded-[12px]'>
                            <textarea type="text" className=' outline-none ' />
                        </div>
                    </div>
                    <div className='pt-[37px]' >
                        <p className='text-black font-Outfit text-[14px]  md:text-lg  capitalize pb-[26px]'>Must have ata least one of the requirements</p>
                    </div>
                    <div className='flex gap-[19px] flex-col lg:flex-row'>
                        <div className='sm:flex gap-[19px]'>
                            <div className='flex items-center cursor-pointer py-3 w-full lg:w-[193px] ps-[10px]  rounded-[12px] border-[1px] border-solid border-[#E5E5E5]'>
                                <PreviouslyIcon />
                                <p className='text-[#1C1D1D] opacity-[0.7] font-Outfit text-sm leading-[112.5%] font-normal capitalize ps-[10px] max-w-[128px]'>Previously build a fintech startup</p>
                            </div>
                            <div className='mt-[19px] sm:mt-0 flex items-center cursor-pointer py-3 w-full lg:w-[193px] ps-[10px]  rounded-[12px] border-[1px] border-solid border-[#E5E5E5]'>
                                <BankingIcon />
                                <p className='text-[#1C1D1D] opacity-[0.7] font-Outfit text-sm leading-[112.5%] font-normal capitalize ps-[10px] '>Banking Executive</p>
                            </div>
                        </div>
                        <div className='mt-[19px] lg:mt-0 sm:flex gap-[19px]'>
                            <div className='flex items-center cursor-pointer py-3 w-full lg:w-[193px] ps-[10px]  rounded-[12px] border-[1px] border-solid border-[#E5E5E5]'>
                                <TechnicalIcon />
                                <p className='text-[#1C1D1D] opacity-[0.7] font-Outfit text-sm leading-[112.5%] font-normal capitalize ps-[10px] max-w-[128px]'>Technical + coding experience</p>
                            </div>
                            <div className='mt-[19px] sm:mt-0 flex cursor-pointer py-3 w-full lg:w-[193px] ps-[10px]  rounded-[12px] border-[1px] border-solid border-[#E5E5E5]'>
                                <div className='mt-1'>
                                <ExperienceIcon />
                                </div>
                                <p className='text-[#1C1D1D] opacity-[0.7] font-Outfit text-sm leading-[112.5%] font-normal capitalize ps-[10px] max-w-[115px]'>Experience in building fintech startup</p>
                            </div>
                        </div>
                    </div>
                    <Link className='  py-[12px] px-[44px] inline-block mt-[45px] rounded-[100px] text-white text-[14px]  md:text-lg font-Inter font-medium common_btn_two Submit_btn'>Submit</Link>
                </div>
               </div>
            </div>
        </section>
    )
}

export default From 