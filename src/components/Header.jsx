import React from 'react';
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

function Header(){
    const path = useLocation().pathname;
    return (
        <Navbar className='border -b-2'>
            <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
                <span className='px-2 py-1'>Nishkarsh</span>
                Blog
            </Link>
            <form>
                <TextInput 
                    type="text"
                    placeholder='Search...'
                    rightIcon={AiOutlineSearch}
                />
            </form>
            <div className='flex gap-2 md:order-2'>
                <Button className='w-12 h-10 md:hidden' color='grey'>
                    <FaMoon />
                </Button>
                <Link to='/signin'>
                    <Button className='w-25 h-10 hidden sm:flex' authline color='cyan'>
                        Sign In
                    </Button>
                </Link>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link active={path === '/'} as={'div'}>
                    <Link to="/">
                        Home
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === '/about'} as={'div'}>
                    <Link to="/about">
                        About
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === '/projects'} as={'div'}>
                    <Link to="/projects">
                        Projects
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;