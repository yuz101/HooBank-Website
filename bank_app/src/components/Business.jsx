import React from 'react'
import { features } from '../constants'
import styles from '../styles'
import Button from "./Button";

const FeatureCard = ({icon, title, content, index}) => (
    <div className='flex flex-row rounded-[20px] p-6 feature-card'>
        <div className={`${styles.flexCenter} w-[64px] h-[64px] rounded-full bg-dimBlue`}>
            <img 
                src={icon} 
                alt="icon"
                className='w-[50%] h-[50%] object-contain'
            />
        </div>
        <div className='flex-1 flex flex-col ml-3'>
            <h4 className='text-white'>{title}</h4>
            <p className={`${styles.paragraph}`}> {content}</p>
        </div>
    </div>
)

const Business = () => {
  return (
    <section id="features" className='flex md:flex-row flex-col'>
        <div className={`flex-1 ${styles.flexStart} flex-col`}>
            <h2 className={` ${styles.heading2}`}>
                You do the business,<br/> we'll handle the money
            </h2>
            <p className={`${styles.paragraph} max-w-[470px]`}>
                With the right credit card, you can improve your financial life by
                building credit, earning rewards and saving money. But with hundreds
                of credit cards on the market.
            </p>
            <Button/>
        </div>
        <div className={`flex-1 ${styles.flexStart} flex-col sm:mt-10 mt-6`}>
            {features.map((feature, index) => (
                <FeatureCard key={feature.id} {...feature} index={index}/>
            ))}
        </div>
    </section>
  )
}

export default Business