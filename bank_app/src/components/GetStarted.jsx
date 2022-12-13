import React from 'react'
import styles from '../styles'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className={`${styles.flexStart} bg-blue-gradient w-[140px] h-[140px] rounded-full p-[2px] cursor-pointer`}>
        <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
            <div className={`${styles.flexStart} flex-row`}>
                <p className='font-poppins font-medium text-[18px] leading-[23.4px]'>
                    <span className='text-gradient'>Get</span>
                </p>
                <img 
                    src={arrowUp} 
                    alt="arrowUp"
                    className='object-contain'
                />
            </div>
            <p className='font-poppins font-medium text-[18px] leading-[23.4px]'>
                <span className='text-gradient'>Started</span>
            </p>
        </div>
    </div>
  )
}

export default GetStarted