import React from 'react'
import styles from '../styles'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
  return (
    <section className='flex flex-col justify-center items-center'>
      <div className='w-full flex md:flex-row flex-col justify-between items-start sm:my-10 my-6'>
        <div className='flex flex-1 flex-col md:mb-0 mb-6'>
          <img src={logo} alt="logo" className='w-[266px] h-[72.14px] object-contain'/>
          <p className={`${styles.paragraph} max-w-[312px] mt-4`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className='w-full flex flex-[1.5] flex-row justify-between'>
          {footerLinks.map((footerlink) => (
            <div key={footerlink.title} className='flex flex-col'>
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] mb-4 text-white">
                {footerlink.title}
              </h4>
              <ul>
                {footerlink.links.map((link) => (
                    <li key={link.name} className='font-poppins font-normal text-[16px] leading-[24px] mb-2 hover:text-secondary text-dimWhite'>
                      {link.name}
                    </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full flex justify-between items-center md:flex-row flex-col py-6 border-t-[1px] border-t-[#3F3E45]'>
          <p className='flex font-poppins font-normal text-[18px] leading-[27px] text-dimWhite'> 
            Copyright Ⓒ 2022 HooBank. All Rights Reserved. 
          </p>
          <div className='flex justify-between flex-row cursor-pointer'>
            {socialMedia.map((media) => (
              <div key={media.id} className="md:mt-0 mt-2 mr-6">
                <img src={media.icon} alt="media" onClick={() => window.open(media.link)}/>
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}

export default Footer