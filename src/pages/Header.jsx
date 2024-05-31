
import React from 'react';
import { useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    const paths = [
        { pathname: 'home', path: '/' },
        { pathname: 'about me', path: '/about-me' },
        { pathname: 'resume', path: '/resume' },
        { pathname: 'projects', path: '/projects' },
        { pathname: 'services', path: '/services' },
        { pathname: 'contact', path: '/contact' },
    ];
    return (
        <div className='w-full flex justify-between px-20 h-[10%] items-center bg-white'>
            <a href="/" className='w-[30%] flex items-center justify-start'>
                <div className='w-[40px] h-[40px] rounded-full bg-[rebeccapurple] mr-2 flex items-center justify-center text-white'>A</div>
                <span className='text-gray-500'><b>Ayo</b>wolemi</span>
            </a>
            <nav className='w-[50%] flex gap-y-2 justify-between'>
                {paths.map((path, index) => (
                    <a
                        href={path.path}
                        key={index}
                        className={
                            `capitalize text-[14px] border-[rebeccapurple]
                            ${location.pathname === path.path ? "border-b-2 text-[rebeccapurple]" : ""}`
                        }>
                        {path.pathname}
                    </a>
                ))}
            </nav>
        </div>
    );
}

export default Header;
