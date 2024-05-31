
import React from 'react'
import Layout from '../pages/Layout'
import { FaEnvelope, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

function Contact() {
    const contacts = [
        {
            name: "email",
            link: "mailto:ayowolemieniomosule@gmail.com",
            icon: <FaEnvelope />
        },
        {
            name: "whatsApp",
            link: 'https://w.app/tg46pw',
            icon: <FaWhatsapp />
        },
        {
            name: "linkedIn",
            link: "https://www.linkedin.com/in/ayowolemi-eni-omosule-65a5762b2/",
            icon: <FaLinkedin />
        },
    ]
    return (
        <Layout>
            <div className='h-full flex flex-col items-center justify-center gap-y-10'>
                <div className='w-full flex flex-col items-center'>
                    <h1 className='capitalize mb-4 text-[24px] text-white'>get in touch</h1>
                    <p className='text-white'>Want to get in touch? I would love to hear from you.</p>
                </div>
                <div className='w-full flex items-center justify-center gap-x-10'>
                    {contacts.map((contact, index) => (
                        <a href={contact.link}
                            key={index}
                            target='_blank'
                            className='flex flex-col items-center justify-center bg-white w-[200px] h-[50px] rounded-md text-[12px] gap-y-1 cursor-pointer hover:bg-[rebeccapurple] transition-all duration-700 delay-200'>
                            <span className='text-black'>{contact.icon}</span>
                            <p className='capitalize text-black '>{contact.name}</p>
                        </a>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Contact
