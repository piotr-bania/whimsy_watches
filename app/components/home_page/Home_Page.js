'use client'

import './home_page.scss'
import Link from 'next/link'
import { motion as m } from 'framer-motion'
import { title_variant, subtext_variant, cta_variant } from '../animations/Framer_Motion_Variants'

const Home_Page = () => {
    return (
        <section id='home_page'>
            <div className='container'>
                <m.h1
                    className='heading'
                    initial='hidden'
                    animate='visible'
                    variants={title_variant}
                    >
                    Tick-Tock Extravagance
                </m.h1>

                <m.p
                    className='paragraph'
                    initial='hidden'
                    animate='visible'
                    variants={subtext_variant}
                    >
                    Indulge in the opulence of our handcrafted timepieces that don’t just mark the passing hours but celebrate them with a wink.
                </m.p>

                <m.div 
                    className='link'
                    initial='hidden'
                    animate='visible'
                    variants={cta_variant}
                    >
                    <Link href='/'>Discover Whimsy</Link>
                </m.div>
            </div>
        </section>
    )
}

export default Home_Page