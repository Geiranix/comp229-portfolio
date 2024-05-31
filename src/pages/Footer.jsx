
import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

function Footer() {
    const socials = [
        {
            socialName: 'LinkedIn',
            link: 'https://www.linkedin.com/in/ayowolemi-eni-omosule-65a5762b2/',
            icon: <FaLinkedin />
        },
        {
            socialName: 'GitHub',
            link: 'https://github.com/Geiranix',
            icon: <FaGithub />
        },
        {
            socialName: 'WhatsApp',
            link: 'https://w.app/tg46pw',
            icon: <FaWhatsapp />
        },
    ]
    return (
        <div className='w-full h-[25%] bg-white flex flex-col justify-center items-center'>
            <div className='h-full flex flex-col justify-start items-center gap-y-4 pt-4'>
                <h3 className='capitalize'>connect with me</h3>
                <div className='h-full w-full flex items-center'>
                    {socials.map((social, index) => (
                        <div className='flex gap-x-8'>
                            <a href={social.link}
                                key={index}
                                target='_blank'
                                className='flex items-center justify-center w-[200px] h-[50px] rounded-md gap-x-2 cursor-pointer border-[rebeccapurple] border-[0.5px]'>
                                <span className='text-black'>{social.icon}</span>
                                <p className='capitalize text-black '>{social.socialName}</p>
                            </a>
                            {index !== socials.length - 1 ? <div className='w-[10px] h-full'></div> : null}
                        </div>
                    ))}
                </div>
                <p className='text-[12px]'> Copyright &copy; 2024. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
