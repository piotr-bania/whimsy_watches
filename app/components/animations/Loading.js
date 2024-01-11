import './loading.scss'
import { motion as m } from 'framer-motion'
import { loader_variant } from './Framer_Motion_Variants'

const Loading = () => {
    return (
        <div className='loading'>
            <m.div
                className='loader'
                initial="hidden"
                animate="visible"
                variants={loader_variant}
                >
                <p>Whimsy</p>
                <p>Watches</p>
            </m.div>
        </div>
    )
}

export default Loading