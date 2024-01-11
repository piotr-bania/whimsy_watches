'use client'

import './navbar.scss'
import Link from 'next/link'
import { motion as m } from 'framer-motion'
import { logo_variant, nav_links_variant } from '../animations/Framer_Motion_Variants'

const Navbar = () => {
    const navLinks = [
        { name: 'Chronicles', href: '/' },
        { name: 'Humorology', href: '/' },
        { name: 'Contact Time', href: '/' }
    ]

    return (
        <section id='navbar'>
            <div className='container'>
                <m.div
                    className='logo'
                    initial="hidden"
                    animate="visible"
                    variants={logo_variant}
                    >
                    <p>Whimsy</p>
                    <p>Watches</p>
                </m.div>
                
                <div className='links'>
                    {navLinks.map((link, i) => (
                        <m.div
                            key={i}
                            initial="hidden"
                            animate="visible"
                            variants={nav_links_variant}
                            custom={i}
                            >
                            <Link href={link.href}>{link.name}</Link>
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Navbar