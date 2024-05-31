
import React from 'react'
import Layout from '../pages/Layout'
import { FaCloud, FaCode, FaDatabase, FaMobileAlt, FaPlug, FaTools } from 'react-icons/fa'

function Services() {
  const services = [
    {
      title: "Web Application Development",
      description: "Design and develop responsive and scalable web applications using modern frameworks and technologies.",
      icon: <FaCode />
    },
    {
      title: "Mobile App Development",
      description: "Create intuitive and high-performance mobile applications for iOS and Android platforms.",
      icon: <FaMobileAlt />
    },
    {
      title: "API Integration",
      description: "Implement and integrate RESTful and GraphQL APIs to enable seamless data exchange between systems.",
      icon: <FaPlug />
    },
    {
      title: "Database Design and Management",
      description: "Design, implement, and maintain efficient and secure relational and NoSQL databases.",
      icon: <FaDatabase />
    },
    {
      title: "Cloud Services",
      description: "Deploy, manage, and scale applications using cloud platforms like AWS, Azure, and Google Cloud.",
      icon: <FaCloud />
    },
    {
      title: "DevOps and CI/CD",
      description: "Set up and manage continuous integration and continuous deployment pipelines to ensure smooth and automated software releases.",
      icon: <FaTools />
    }
  ]
  
  return (
    <Layout>
    <div className='flex flex-col items-start justify-center pl-20 py-6'>
      <h1 className='text-[24px] text-white my-4 font-bold'>My &nbsp;<span className='text-[rebeccapurple]'>Services</span></h1>
      <div className='grid grid-cols-3 grid-row-2 gap-x-20 gap-y-4'>
        {services.map((service, index) => (
          <div key={index} className='w-[250px] h-[200px] bg-[#2F363F] border-gray-200 border-[0.5px] flex flex-col gap-y-4 px-2 rounded-md'>
            <div className='w-full flex justify-between items-center'>
              <span className='text-[20px] text-gray-200'>0{index + 1}</span>
              <span className='text-[20px] text-[rebeccapurple]'>{service.icon}</span>
            </div>
            <h2 className='text-[rebeccapurple] font-bold'>{service.title}</h2>
            <p className='text-[13px] text-white'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  )
}

export default Services
