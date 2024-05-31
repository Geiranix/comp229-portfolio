
import React from 'react'
import Layout from '../pages/Layout'

export default function About() {
    return (
        <Layout>
            <div className='h-full flex items-center justify-between px-20'>
                <div className='w-[50%]'>
                    <div className='bg-white w-fit rounded-full p-2'>
                        <img src="../assets/ayowolemi.jpg" alt="Ayowolemi" className='h-[250px] w-[250px] rounded-full' />
                    </div>
                </div>
                <div className='w-[50%] flex flex-col gap-y-4'>
                    <p className='text-[12px] text-gray-300'>Software Engineer <br /><span className='text-[rebeccapurple] text-[20px] font-bold'>Ayowolemi Eni-Omosule</span></p>
                    <p className='text-[14px] text-gray-300'>I am a dedicated software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Proficient in multiple programming languages and adept at collaborating with cross-functional teams to deliver robust solutions. Committed to continuous learning and staying updated with industry trends.
                    </p>
                    <div className='flex gap-x-4 my-4'>
                        <a href='../assets/resume.pdf' className='text-gray-300' download><button>Download Resume</button></a>
                        <a href='/contact' className='text-gray-300'><button> Contact</button></a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
