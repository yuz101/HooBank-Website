import React from 'react'
import styles from '../styles'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.marginY} ${styles.flexCenter} sm:flex-row flex-col max-w-[1170px] px-12 py-12 rounded-[20px] bg-black-gradient-2 box-shadow`}>
        <div className='flex flex-1 flex-col'>
          <h2 className={`${styles.heading2}`}>
            Let’s try our service now!
          </h2>
          <p className={`${styles.paragraph} max-w-[445px]`}>
            Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>
        </div>
        <div className={`${styles.flexCenter}`}>
          <Button/>
        </div>
    </section>
  )
}

export default CTA