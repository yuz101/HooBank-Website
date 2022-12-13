import React from 'react'
import { card } from '../assets'
import styles from '../styles'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY} items-center`}>
      <div className='flex-1'>
        <h2 className={`${styles.heading2}`}>
          Find a better card deal<br className='sm:block hidden'/>in few easy steps
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button/>
      </div>
      <div className={`flex-1 ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`}>
        <img src={card} alt="card" className='w-[100%] h-[100%]'/>
      </div>
    </section>
  )
}

export default CardDeal
