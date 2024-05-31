
import React from 'react'
import Layout from '../pages/Layout'

function Projects() {
  const projects = [
    {
      title: "Calculator App",
      link: "",
      image: "../assets/calculator.jpeg",
    },
  ]
  return (
    <Layout>
      <div className='w-full h-full flex flex-col items-center justify-start gap-y-4 py-10'>
        <h1 className='text-[24px] text-white mb-4 font-bold'>
          My &nbsp;
          <span className='text-[rebeccapurple]'>
            Project{projects.length && projects.length > 1 ? "s" : ""}
          </span>
        </h1>
        <div className='w-full flex justify-around items-center'>
          {projects.map((project, index) => (
            <div className='box-shadow flex items-center flex-col '>
              <h1 className='text-[24px] text-white my-6'>{project.title}</h1>
              <a key={index} href={project.link}>
                <img
                  src={project.image}
                  alt={project.title}
                  className='text-white w-[350px] h-[250px]'
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Projects
