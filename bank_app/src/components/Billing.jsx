import React from 'react'
import { apple, bill, google } from '../assets'
import styles from '../styles'
const Billing = () => {
  return (
    <section id="product" className={`flex md:flex-row flex-col-reverse ${styles.paddingY} items-center`}>
      <div className={`flex-1 ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`}>
        <img src={bill} alt='bill'className='w-[100%] h-[100%] relative z-[5]'/>
      </div>
      <div className={`flex-1 ${styles.flexStart} flex-col`}>
        <h2 className={`${styles.heading2}`}>
          Easily control your <br className="sm:block hidden" /> billing & invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="apple" className='w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer'/>
          <img src={google} alt="google" className='w-[144.17px] h-[43.08px] object-contain cursor-pointer'/>
        </div>
      </div>
    </section>
  )
}

export default Billing