import React from 'react'

export default function Group() {
  return (
    <main className="flex flex-col items-center justify-start h-screen pt-32" style={{marginBottom:'7rem'}}>
      <h2 className="text-4xl">Estamos cocinando la pagína <span className='title-2-word'>vuelva más tarde</span></h2>
      <hr className='hr1' />
      <hr className='hr2' />
      <section className='flex flex-wrap justify-center gap-4 w-[95%] mt-8'>
        <img className="h-[30rem] rounded-[12%] mb-[2rem] "  src='https://firebasestorage.googleapis.com/v0/b/alegria-de-vivir-99.appspot.com/o/ON_WORK.png?alt=media&token=37d016b4-e7d6-448e-a185-c2035c2dc241' alt='Chef cocinando' />
        
      </section>
    </main >
  )
}
