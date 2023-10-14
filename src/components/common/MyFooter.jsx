import React from 'react'
import { FacebookIcon, InstagramIcon, LinkDinIcon, MyFooterIcon, TwitterIcon } from './Icon'
import { Link } from 'react-router-dom'
import Footer_Down_line from '../../assets/img/png/footer_down_line.png'
const MyFooter = () => {
    return (
        <section className='footer_bg relative'>
            <img className='absolute bottom-0 right-0 hidden md:block' src={Footer_Down_line} alt="Footer_down" />
            <div className="container mx-auto">
                <div className='pt-[107px] pb-14 md:pb-20 lg:pb-24 flex flex-col md:flex-row justify-between'>
                    <div >
                       <div className='cursor-pointer'>
                       <MyFooterIcon />
                       </div>
                        <p className='max-w-[326px] lg:max-w-[450px] py-2 my-1 mb-0 text-white opacity-[0.7]'>The is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <div >
                            <div className=' flex gap-3'>
                                <FacebookIcon />
                                <div>
                                    <InstagramIcon />
                                </div>
                                <TwitterIcon />
                                <div>
                                    <LinkDinIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between mt-[50px]'>
                        <ul>
                            <li className='text-white font-Open text-base mg:text-[20px] font-semibold mb-[10px] leading-normal'>Home</li>
                            <li><Link className='text-white font-Inter text-sm inline-block font-medium relative after:container-[""] after:w-0 after:h-[1.5px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-white after:absolute leading-normal after:bottom-0 hover:after:w-full hover:after:left-0 after:left-[50%] '>Chatroom</Link></li>
                            <li><Link className='text-white font-Inter text-sm inline-block font-medium my-[14px] relative after:container-[""] after:w-0 after:h-[2px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-white after:absolute leading-normal after:bottom-0 hover:after:w-full hover:after:left-0 after:left-[50%] '>Invest</Link></li>
                            <li><Link className='text-white font-Inter text-sm inline-block font-medium relative after:container-[""] after:w-0 after:h-[1.5px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-white after:absolute leading-normal after:bottom-0 hover:after:w-full hover:after:left-0 after:left-[50%] '>Become A Cofounder</Link></li>
                        </ul>
                        <ul className='ps-[93px]'>
                            <li className='text-white font-Open text-base mg:text-[20px] font-semibold mb-[10px] leading-normal'>Links</li>
                            <li><Link className='text-white font-Inter text-sm inline-block font-medium relative after:container-[""] after:w-0 after:h-[1.5px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-white after:absolute leading-normal after:bottom-0 hover:after:w-full hover:after:left-0 after:left-[50%] '>Contact us</Link></li>
                            <li><Link className='text-white font-Inter text-sm inline-block font-medium my-[14px] relative after:container-[""] after:w-0 after:h-[2px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-white after:absolute leading-normal after:bottom-0 hover:after:w-full hover:after:left-0 after:left-[50%] '>FAQ</Link></li>
                            <li><Link className='text-white font-Inter text-sm inline-block font-medium relative after:container-[""] after:w-0 after:h-[1.5px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-white after:absolute leading-normal after:bottom-0 hover:after:w-full hover:after:left-0 after:left-[50%] '>Privacy</Link></li>
                            <li><Link className='text-white font-Inter text-sm inline-block font-medium mt-[14px] relative after:container-[""] after:w-0 after:h-[2px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-white after:absolute after:bottom-0 hover:after:w-full hover:after:left-0 after:left-[50%] '>Terms & conditions</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='border-white opacity-[0.2] border-[1px] border-solid'></div>
            <h2 className='text-center pt-3 pb-[22px] text-[#94DCF4] text-base md:text-[18px] font-Open leading-[177.778%]'>Copyright 2023 JesMor Enterprises, All Rights Reserved.</h2>
        </section>
    )
}

export default MyFooter     