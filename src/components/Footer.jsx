import React from 'react';
import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble, BsDiscord } from 'react-icons/bs';

function FooterComponent(){
    return (
        <Footer container className='border border-t-8 border-teal-500'>
          <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between md:flex md:grid-cols-1'>
              <div className='mt-4'>
                <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
                    <span className='px-2 py-1'>Footer</span>
                </Link>
              </div>
              <div className='flex grid-cols-2 gap-8 sm: mt-4 sm:grid-cols-3 sm:gap-6'>
                <div>
                    <Footer.Title title='About' />
                    <Footer.LinkGroup col>
                        <Footer.Link 
                            href='/'
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                            100 JS Projects
                        </Footer.Link>
                        <Footer.Link 
                            href='/'
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                            Nishkarsh's Blog
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <div>
                    <Footer.Title title='Follow us' />
                    <Footer.LinkGroup col>
                        <Footer.Link 
                            href='https://www.github.com/'
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                            Github
                        </Footer.Link>
                        <Footer.Link 
                            href='/'
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                            Discord
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <div>
                    <Footer.Title title='Legal' />
                    <Footer.LinkGroup col>
                        <Footer.Link 
                            href='https://www.github.com/'
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                            Github
                        </Footer.Link>
                        <Footer.Link 
                            href='/'
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                            Discord
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
              </div>
            </div>
            <Footer.Divider />
            <div className='w-full sm:items-center sm:justify-between'>
                <Footer.Copyright href='/' by="Nishkarsh's Blog" year={new Date().getFullYear()}/>
                <div className='flex gap-4 sm:mt-0 mt-4 sm:justify-center'>
                    <Footer.Icon href="#" icon={BsFacebook} />
                    <Footer.Icon href="#" icon={BsInstagram} />
                    <Footer.Icon href="#" icon={BsTwitter} />
                    <Footer.Icon href="#" icon={BsGithub} />
                    <Footer.Icon href="#" icon={BsDribbble} />
                </div>
            </div>
          </div>  
        </Footer>
    )
}

export default FooterComponent;