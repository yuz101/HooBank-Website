import React from 'react'
import { quotes } from "../assets";
import styles from '../styles';

const FeedbackCard = ({content, name, title, img}) => {
  return (
    <div className='flex flex-col justify-between my-5 px-12 py-12 max-w-[370px] rounded-[20px] feedback-card'>
        <img src={quotes} alt="quotes" className='w-[42.6px] h-[27.6px]'/>
        <p className='font-poppins font-normal text-[18px] leading-[32.4px] py-10 text-white'>
          {content}
        </p>
        <div className='flex flex-row items-center'>
          <img src={img} alt="profile img" className='w-[48px] h-[48px]'/>
          <div className='flex-col px-4'>
            <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>{name}</h4>
            <p className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite`}>{title}</p>
          </div>
        </div>
    </div>
  )
}

export default FeedbackCard