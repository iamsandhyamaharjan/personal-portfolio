import React from 'react'
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg"
import installNode from "../assets/portfolio/installNode.jpg"
import navbar from "../assets/portfolio/navbar.jpg"
import reactParallax from "../assets/portfolio/blood.jpeg"
import reactSmooth from "../assets/portfolio/reactSmooth.jpg"
import reactWeather from "../assets/portfolio/reactWeather.jpg"

const Portfolio = () => {

  const portfoilios = [
    {
      id:1,
      src:arrayDestruct,
      demo:'https://job123-portal123.netlify.app/',
      code:'https://github.com/iamsandhyamaharjan/job-portal'
    },
    {
      id:2,
      src:reactParallax,
      demo:'https://github.com/iamsandhyamaharjan/blood-bank',
      code:''
    },
   
  ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
          <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                    <div className='pb-8'>
                              <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                              <p className='py-6'>Check out some of my work right here</p>
                    </div>
                   
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                      portfoilios.map(({id,src,demo,code})=>
                      (    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                      <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
                      <div className='flex items-center justify-center'>
                                <button onClick={() => window.open(demo, '_blank')} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                <button onClick={() => window.open(code, '_blank')} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                      </div>
            </div>)
                        
                      )
                    }
                          
                    </div>
          </div>

    </div>
  )
}

export default Portfolio