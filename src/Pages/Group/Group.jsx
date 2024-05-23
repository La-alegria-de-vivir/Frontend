import React from 'react'

export default function Group() {
  return (
    <main  className="flex flex-col items-center justify-start h-screen pt-32">
              <h2 className="text-6xl">Grup<span className='title-2-word'>os</span></h2>
        <hr className='hr1'/>
        <hr className='hr2'/>
       <section className='flex flex-row items-center justify-center mt-8'>     
        <p className="w-1/3">Menú Restaurante 1</p>
    <p className="w-1/3">Menú Restaurante 2</p>
    <p className="w-1/3">Menú Restaurante 3</p>
    </section>
    </main>
  )
}
