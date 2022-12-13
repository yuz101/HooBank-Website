import React from 'react'
import styles from '../styles'
import { discount, robot} from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6 ${styles.flexStart}`}>
            <div className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}>
                <img 
                    src={discount} 
                    alt= "discount"
                    className='w-[32px] h-[32px]'
                />
                <p className={`${styles.paragraph}`}>
                    <span className='text-white'>20% </span> DISCOUNT FOR <span className='text-white'> 1 MONTH </span>ACCOUNT
                </p>
            </div>
            <div className='flex flex-row justify-between items-center w-full'>
                <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px] text-white'>
                    The Next {" "} <br className='sm:block hidden'/> <span className='text-gradient'>Generation</span>
                </h1>
                <div className='ss:flex hidden md:mr-4 mr-0'>
                    <GetStarted/>
                </div>
            </div>
            <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100.8px] leading-[75px] text-white w-full'>
                Payment Method
            </h1>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Our team of experts uses a methodology to identify the credit cards
                most likely to fit your needs. We examine annual percentage rates,
                annual fees.
            </p>
        </div>
        <div className={`flex-1 flex ${styles.flexCenter} relative md:my-0 my-10`}>
            <img 
                src={robot} 
                alt="robot"
                className='w-[100%] h-[100%] relative z-[5]'
            />
            <div className='absolute w-[40%] h-[35%] z-[0] top-0 pink__gradient'/>
            <div className='absolute w-[80%] h-[80%] z-[1] rounded-full bottom-40 white__gradient'/>
            <div className='absolute w-[50%] h-[50%] z-[0] right-20 bottom-20 blue__gradient'/>
        </div>
        <div className={`ss:hidden ${styles.flexCenter}`}>
            <GetStarted/>
        </div>
    </section>
  )
}

export default Hero