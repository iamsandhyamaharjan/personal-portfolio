// import React from 'react'
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg"
// import installNode from "../assets/portfolio/installNode.jpg"
// import navbar from "../assets/portfolio/navbar.jpg"
import reactParallax from "../assets/portfolio/blood.jpeg"
import restaurant from "../assets/portfolio/Restaurant.PNG"
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg"
// import reactWeather from "../assets/portfolio/reactWeather.jpg"

const Portfolio = () => {

  const portfoilios = [
    {
      id: 1,
      src: arrayDestruct,
      demo: 'https://job123-portal123.netlify.app/',
      code: 'https://github.com/iamsandhyamaharjan/job-portal',
      desc:"My first React project: a Job Portal where users can log in and search for jobs. I used Redux for state management and Bootstrap for styling."
    },
    {
      id: 2,
      src: reactParallax,
      demo: '',
      code: 'https://github.com/iamsandhyamaharjan/blood-bank',
      desc:"College project: Blood Bank Management System to track donations and requests efficiently."
    },
    {
      id: 3,
      src: restaurant,
      demo: 'https://dinespot.netlify.app',
      code: 'https://github.com/iamsandhyamaharjan/DineSpot',
      desc:"DineSpot: A restaurant web app built with React, Redux , and TailwindCSS . Integrated a payment gateway for seamless online ordering."
    },


  ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
          {
            portfoilios.map(({ id, src, demo, code ,desc}) =>
            (<div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt='' className='rounded-md duration-200 hover:scale-105 h-40 w-full'  />
              <div className='flex items-center justify-center'>
                <button onClick={() => window.open(demo, '_blank')} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                <button onClick={() => window.open(code, '_blank')} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
              </div>
<p className="p-4 text-gray-300 text-sm leading-relaxed">
  {desc.split(' ').map((word, i) => {
    const techs = ['React', 'Redux', 'TailwindCSS', 'Bootstrap', 'Payment'];
    return techs.includes(word) ? <span key={i} className="font-bold text-green-400">{word} </span> : word + ' ';
  })}
</p>
            </div>)

            )
          }

        </div>
      </div>

    </div>
  )
}

export default Portfolio