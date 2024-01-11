import Image from 'next/image'

const Image_Component = ({ className, src, alt }) => {
    return (
        <Image
            className={className}
            src={src}
            alt={alt}
            layout='fill'
            objectFit='cover'
        />
    )
}

export default Image_Component