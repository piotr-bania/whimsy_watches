'use client'

import './home_page_images.scss'
import Image_Component from '../home_page/Image_Component'
import { motion as m } from 'framer-motion'
import { image_variant } from '../animations/Framer_Motion_Variants'

const Home_Page_Images = () => {
    return (
        <section id='home_page_images'>
            <m.div
                className='whimsy'
                initial='hidden'
                animate='visible'
                variants={image_variant}
                custom={0}
                >
                <h1 >Whimsy</h1>
            </m.div>

            <m.div
                className={`image_1`}
                initial='hidden'
                animate='visible'
                variants={image_variant}
                custom={3}
                >
                <Image_Component
                    src='/images/3.webp'
                    alt='image 3'
                />
            </m.div>

            <m.div
                className={`image_2`}
                initial='hidden'
                animate='visible'
                variants={image_variant}
                custom={2}
                >
                <Image_Component
                    src='/images/2.webp'
                    alt='image 2'
                />
            </m.div>

            <m.div
                className={`image_3`}
                initial='hidden'
                animate='visible'
                variants={image_variant}
                custom={1}
                >
                <Image_Component
                    src='/images/1.webp'
                    alt='image 1'
                />
            </m.div>

            <m.div
                className={`image_4`}
                initial='hidden'
                animate='visible'
                variants={image_variant}
                custom={4}
                >
                <Image_Component
                    src='/images/4.webp'
                    alt='image 4'
                />
            </m.div>
        </section>
    )
}

export default Home_Page_Images