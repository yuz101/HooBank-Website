import React from 'react'
import { clients } from '../constants'
const Clients = () => {
  return (
    <section className='flex flex-row justify-center items-center'>
      <div className='flex justify-center items-center flex-wrap w-full'>
        {clients.map((client) => (
          <div key={client.id} className='flex flex-1 justify-center items-center sm:min-w-[192px] min-w-[120px]'>
            <img src={client.logo} alt="client" className='sm:w-[192px] w-[100px] object-contain'/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients