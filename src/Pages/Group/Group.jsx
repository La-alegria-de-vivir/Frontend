import React from 'react'

export default function Group() {
  return (
    <main className="flex flex-col items-center justify-start h-screen pt-32">
      <h2 className="text-6xl">Grup<span className='title-2-word'>os</span></h2>
      <hr className='hr1' />
      <hr className='hr2' />
      <section className='flex flex-wrap justify-center gap-4 w-[95%] mt-8'>
        <img className=" h-64 " src='https://firebasestorage.googleapis.com/v0/b/alegria-de-vivir-99.appspot.com/o/Menu%201.png?alt=media&token=30aca0b3-abd4-4068-807f-a7ea0159ec21' alt='Menu de grupo 1' />
        <img className=" h-64 " src='https://firebasestorage.googleapis.com/v0/b/alegria-de-vivir-99.appspot.com/o/Menu%202.png?alt=media&token=22b024f8-3f77-4228-ab5a-0dfb269b8ffc' alt='Menu de grupo 2' />
        <img className=" h-64 " src='https://firebasestorage.googleapis.com/v0/b/alegria-de-vivir-99.appspot.com/o/Menu%203.png?alt=media&token=5ee43a7c-4b5e-480a-a986-3bc205eeb6de' alt='Menu de grupo 3' />
      </section>
    </main>
  )
}
