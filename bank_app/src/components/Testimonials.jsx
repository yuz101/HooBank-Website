import React from 'react'
import { feedback } from '../constants'
import styles from '../styles'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => {
  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
        <div className='w-full flex justify-between md:flex-row flex-col items-center sm:mb-16 mb-6 relative'>
          <h2 className={`${styles.heading2}`}> What people are<br className='sm:block hidden'/> saying about us</h2>
          <div className='w-full'>
            <p className={`${styles.paragraph} max-w-[450px] text-left md:mt-0 mt-6`}>
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </div>
        </div>
        <div className='flex flex-wrap w-full sm:justify-start justify-center'>
          {feedback.map((card) => (
              <FeedbackCard key={card.id} {...card}/>
          ))}
        </div>
    </section>
  )
}

export default Testimonials