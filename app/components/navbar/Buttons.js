'use client'

import './buttons.scss'
import Link from 'next/link'
import { motion as m } from 'framer-motion'
import { top_variant, bottom_variant } from '../animations/Framer_Motion_Variants'

const Buttons = () => {
    return (
        <section id='buttons'>
            <m.div
                className='top'
                initial='hidden'
                animate='visible'
                variants={top_variant}
                >
            </m.div>

            <m.div
                className='link bottom'
                initial='hidden'
                animate='visible'
                variants={bottom_variant}
                >
                <Link href='/'>Scroll <br /> Down</Link>
            </m.div>
        </section>
    )
}

export default Buttons